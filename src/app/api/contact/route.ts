import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      company,
      service,
      budget,
      message,
      _gotcha
    } = body;

    // Honeypot spam detection
    if (_gotcha) {
      // Silently discard bot submission
      return NextResponse.json(
        { success: true, message: "Consultation request received." },
        { status: 200 }
      );
    }

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid corporate email address." },
        { status: 400 }
      );
    }

    if (!company || typeof company !== "string" || company.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your company or organization name." },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select a service or practice area." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide brief details on your project (minimum 10 characters)." },
        { status: 400 }
      );
    }

    // In a real production deployment, this would trigger an email via Resend / AWS SES / SendGrid
    // or push to a CRM like HubSpot / Salesforce.
    console.log("New Qualified Lead Submission:", {
      fullName,
      email,
      phone: phone || "Not provided",
      company,
      service,
      budget: budget || "Not specified",
      message,
      receivedAt: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your request has been logged. A senior architect from Cortex Grid Consulting will review your project parameters and contact you within 24 business hours."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
