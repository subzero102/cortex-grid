"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck } from "lucide-react";

interface ContactFormProps {
  initialService?: string;
  className?: string;
  sourceContext?: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget?: string;
  message: string;
  _gotcha: string; // Honeypot spam trap
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = "ai-operations",
  className = "",
  sourceContext = "General Inbound"
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: initialService,
    budget: "",
    message: "",
    _gotcha: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid business email address.";
    }

    if (!formData.company.trim() || formData.company.trim().length < 2) {
      newErrors.company = "Please provide your company or organization name.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a primary service area.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please share a brief overview of your technical goals (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error on edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourceContext
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request. Please try again.");
      }

      setSubmissionSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again later.";
      setServerError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: initialService,
      budget: "",
      message: "",
      _gotcha: ""
    });
    setErrors({});
    setSubmissionSuccess(false);
    setServerError(null);
  };

  if (submissionSuccess) {
    return (
      <div
        className={`rounded-2xl p-8 sm:p-10 border border-[#E5DFD5] bg-white shadow-lg text-center ${className}`}
        role="alert"
        aria-live="polite"
      >
        <div className="w-16 h-16 bg-[#F4ECE4] border border-[#E8D8CC] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D97757]">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-[#141413] mb-3">
          Consultation Request Confirmed
        </h3>
        <p className="text-[#5E5D59] max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for reaching out, <strong className="text-[#141413]">{formData.fullName}</strong>. A Senior Solution Architect from Cortex Grid has been assigned to your inquiry for <strong className="text-[#C75D3C]">{formData.company}</strong>.
        </p>
        <div className="bg-[#FAF8F5] rounded-xl p-4 max-w-md mx-auto border border-[#E5DFD5] text-left text-sm text-[#5E5D59] mb-8 space-y-2">
          <div className="flex items-center gap-2 text-[#C75D3C] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#D97757]" /> Next Steps & SLA:
          </div>
          <p className="text-xs text-[#73716B]">
            • Initial technical assessment and calendar invitation sent within <strong className="text-[#141413]">24 business hours</strong>.
          </p>
          <p className="text-xs text-[#73716B]">
            • A non-disclosure agreement (NDA) can be provided upon request prior to architectural discovery.
          </p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-[#141413] hover:bg-[#2C2B28] text-white transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-2xl p-6 sm:p-10 border border-[#E5DFD5] bg-white shadow-xs relative ${className}`}
      aria-label="Cortex Grid Consultation Request Form"
    >
      {/* Honeypot field for bot suppression */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="form-gotcha">Do not fill this field</label>
        <input
          type="text"
          id="form-gotcha"
          name="_gotcha"
          value={formData._gotcha}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {serverError && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
          <div>
            <p className="font-semibold text-red-800">Submission Error</p>
            <p>{serverError}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2"
          >
            Full Name <span className="text-[#D97757]">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Sarah Jenkins"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            disabled={isSubmitting}
            className={`w-full min-h-[48px] px-4 py-2.5 rounded-lg bg-[#FAF8F5] border text-[#141413] placeholder-[#87867F] text-sm focus:outline-hidden transition-all ${
              errors.fullName
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                : "border-[#DCD6CD] focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]/30"
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2"
          >
            Corporate Email <span className="text-[#D97757]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="s.jenkins@enterprise.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={isSubmitting}
            className={`w-full min-h-[48px] px-4 py-2.5 rounded-lg bg-[#FAF8F5] border text-[#141413] placeholder-[#87867F] text-sm focus:outline-hidden transition-all ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                : "border-[#DCD6CD] focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]/30"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Company Name */}
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2"
          >
            Company / Organization <span className="text-[#D97757]">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Global Logistics"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            disabled={isSubmitting}
            className={`w-full min-h-[48px] px-4 py-2.5 rounded-lg bg-[#FAF8F5] border text-[#141413] placeholder-[#87867F] text-sm focus:outline-hidden transition-all ${
              errors.company
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                : "border-[#DCD6CD] focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]/30"
            }`}
          />
          {errors.company && (
            <p id="company-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.company}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2"
          >
            Direct Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 234-5678"
            disabled={isSubmitting}
            className="w-full min-h-[48px] px-4 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD6CD] text-[#141413] placeholder-[#87867F] text-sm focus:outline-hidden focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]/30 transition-all"
          />
        </div>
      </div>

      {/* Service Interested In */}
      <div className="mb-5">
        <label
          htmlFor="service"
          className="block text-xs font-semibold uppercase tracking-wider text-[#141413] mb-2"
        >
          Practice Area <span className="text-[#D97757]">*</span>
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full min-h-[48px] px-4 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD6CD] text-[#141413] text-sm focus:outline-hidden focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]/30 transition-all appearance-none cursor-pointer pr-10"
          >
            <option value="ai-operations">AI Operations & FinOps Consulting</option>
            <option value="cloud">Cloud Solutions (Azure, AWS, GCP)</option>
            <option value="web-solutions">Web Solutions, DNS & Modern Portals</option>
            <option value="email-solutions">Workplace & Email Productivity (M365/Google)</option>
            <option value="software-solutions">Enterprise Software (CRM, ERP, POS)</option>
            <option value="professional-services">Professional IT & 24/7 Managed Services</option>
            <option value="ai-efficiency-audit">Dedicated 48-Hour AI Efficiency Audit</option>
            <option value="comprehensive-it-audit">Comprehensive Enterprise IT Review</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#73716B]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-[#141413]"
          >
            Project Objectives & Current Stack <span className="text-[#D97757]">*</span>
          </label>
          <span className="text-[11px] text-[#73716B]">
            {formData.message.length} / 1000 chars
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={1000}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your current technical challenges (e.g., escalating OpenAI bills, AWS migration needs, Microsoft 365 cutover, or 24/7 helpdesk support)..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={isSubmitting}
          className={`w-full p-4 rounded-lg bg-[#FAF8F5] border text-[#141413] placeholder-[#87867F] text-sm focus:outline-hidden transition-all resize-y min-h-[110px] ${
            errors.message
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
              : "border-[#DCD6CD] focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]/30"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
          </p>
        )}
      </div>

      {/* Submit button & Security assurance */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-[#73716B]">
          <ShieldCheck className="w-4 h-4 text-[#D97757] flex-shrink-0" />
          <span>Enterprise Confidentiality & SOC2 Ready • Strict NDA on Request</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#141413] hover:bg-[#2C2B28] text-white shadow-md shadow-black/5 hover:shadow-lg transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Verifying & Sending...</span>
            </>
          ) : (
            <>
              <span>Schedule Architecture Consultation</span>
              <Send className="w-4 h-4 text-white" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
