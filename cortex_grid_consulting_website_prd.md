# Product Requirement Document (PRD): Cortex Grid Consulting Website

## 1. Executive Summary

**Company Name:** Cortex Grid Consulting  
**Domain:** IT Consulting, Enterprise Managed Services & AI Operations  
**Goal:** Build a modern, high-performance, mobile-responsive, and SEO-optimized website to showcase IT and AI capabilities, establish enterprise trust, and convert inbound business traffic into qualified leads via accessible contact touchpoints.

---

## 2. Technical Stack Recommendations (Antigravity CLI Target)

* **Framework:** Next.js (App Router, SSG/SSR for optimal SEO) or Astro / React with Vite + Tailwind CSS.
* **Styling:** Tailwind CSS with a modern enterprise tech theme (slate/navy dark mode foundations, subtle grid background patterns, cyan/electric blue accents).
* **Form Handling:** Formspree, Resend, or Next.js server actions/API route with client-side validation (Zod + React Hook Form).
* **Metadata & SEO:** Next.js dynamic metadata API, Schema.org JSON-LD structured data, OpenGraph images.

---

## 3. Site Architecture & Pages

```
/
├── Home (Landing Page)
├── Services
│   ├── AI Operations & Workflows (/services/ai-operations)  <-- NEW
│   ├── Cloud Solutions (/services/cloud)
│   ├── Web Solutions (/services/web-solutions)
│   ├── Workplace & Email Solutions (/services/email-solutions)
│   ├── Enterprise Software (/services/software-solutions)
│   └── Professional Services (/services/professional-services)
├── Case Studies / ROI Calculator (/roi-calculator or /insights)
├── About Us (/about)
├── Contact Us (/contact)
└── Legal (Privacy Policy & Terms)
```

---

## 4. Detailed Service Breakdown & Offerings

### 4.1 AI Operations & Workflow Consulting (`/services/ai-operations`)
* **Core Value:** Helping organizations adopt AI safely, effectively, and with controlled, predictable cloud/token expenditure.
* **Key Pillars:**
  * **Enterprise Workflow Automation:** Identifying high-friction business operations and building tailored AI/LLM-assisted workflows (document processing, support routing, knowledge retrieval).
  * **Token & Compute Cost Optimization:** Implementing semantic caching, model right-sizing (routing simple tasks to lightweight SLMs and complex reasoning to frontier models), self-hosted open-source inference, and usage quotas.
  * **AI Governance & Guardrails:** Data privacy compliance (preventing IP leak into training sets), role-based access control, prompt security, and ethical usage policies.
  * **Custom AI Tooling Integration:** Connecting private organizational databases to enterprise LLMs via RAG (Retrieval-Augmented Generation) pipelines.

### 4.2 On-Cloud Services (`/services/cloud`)
* **Key Pillars:**
  * **Microsoft Azure:** Infrastructure setup, Azure AD / Entra ID, virtual networks, compute scaling.
  * **Amazon Web Services (AWS):** EC2, S3, RDS, serverless architectures, FinOps cost optimization.
  * **Google Cloud Platform (GCP):** BigQuery setup, Google Kubernetes Engine (GKE), hybrid deployments.
  * **Private Cloud & Hybrid IT:** Bare-metal virtualization (VMware/Proxmox), on-premise to cloud synchronization.

### 4.3 Web Solutions (`/services/web-solutions`)
* **Key Pillars:**
  * **Domain & DNS Management:** Domain registration, DNS records configuration (SPF, DKIM, DMARC), SSL lifecycle.
  * **High-Speed Hosting:** VPS, dedicated cloud hosting, CDN distribution (Cloudflare).
  * **Custom Web Development:** Modern SPAs, corporate portals, e-commerce, headless CMS integrations.
  * **Search Engine Optimization (SEO):** Technical SEO, Core Web Vitals optimization, on-page content strategy.

### 4.4 Email & Workplace Productivity (`/services/email-solutions`)
* **Key Pillars:**
  * **Microsoft 365:** Tenant creation, Exchange Online, Teams configuration, licensing advisory.
  * **Google Workspace (formerly G-Suite):** Setup, user provisioning, Drive policies, domain verification.
  * **Dedicated Email Hosting:** Secure IMAP/POP3, spam filtering, custom domain business inboxes.
  * **Migration Services:** Zero-downtime migration from legacy email providers.

### 4.5 Software Solutions (`/services/software-solutions`)
* **Key Pillars:**
  * **CRM (Customer Relationship Management):** HubSpot, Salesforce, Zoho integration, custom lead-tracking funnels.
  * **ERP (Enterprise Resource Planning):** Supply chain, inventory, and resource planning deployment.
  * **POS (Point of Sale):** Cloud-connected retail and hospitality POS installations with hardware integrations.

### 4.6 Professional IT Services (`/services/professional-services`)
* **Key Pillars:**
  * **IT Maintenance & Support:** 24/7 helpdesk, patch management, endpoint monitoring.
  * **IT Consulting & Advisory:** Technology roadmap design, IT infrastructure audits, vendor evaluation.
  * **Custom IT Solutions:** Tailored hardware and networking configurations, disaster recovery planning.

---

## 5. SEO & Discoverability Requirements

1. **Meta Configuration & High-Value Keywords:**
   * Keywords: *AI workflow consulting, cost-effective enterprise AI, cloud migration, Office 365 setup, IT consulting services*.
   * Dynamic `<title>` tags: `[Service Name] | Cortex Grid Consulting - Cloud & AI Operations`
   * OpenGraph (OG) and Twitter Card tags with preview cards.

2. **Structured Data (Schema.org):**
   * Embed `Organization` and `ProfessionalService` JSON-LD schemas in the document header.
   * Add `Service` schema specifically detailing the AI Operations and Cloud consulting practices.

3. **URL Slugs & Hierarchy:** Clean, keyword-rich semantic URLs (e.g., `/services/ai-operations-consulting`).

4. **Site Assets:**
   * Automated `sitemap.xml` generation.
   * Standard `robots.txt` disallowing internal admin/API routes.
   * Semantic HTML5 (`<main>`, `<header>`, `<nav>`, `<footer>`, `<section>`, `<h1>` to `<h3>`).

5. **Performance Standards:**
   * Target Lighthouse Score: **90+** across Performance, Accessibility, Best Practices, and SEO.

---

## 6. Lead Capture & Contact Features

* **Universal Contact Form:**
  * Input fields: Full Name, Business Email, Phone Number, Company Name, **Service Interested In** (Dropdown including *AI Operations & Workflows, Cloud, Web, Workplace Email, Software, Professional IT*), Budget/Timeline, Message.
  * Form feedback: Instant success/error states, honeypot spam protection, Cloudflare Turnstile or reCAPTCHA v3.
* **Specialized AI Audit Call-To-Action (CTA):**
  * Dedicated banner: *"Want to adopt AI without skyrocketing cloud bills? Book an AI Efficiency Audit."*
* **Persistent CTAs & Direct Contact:**
  * Floating / Fixed "Schedule a Consultation" button in the global navigation bar.
  * Direct phone number (`tel:`), enterprise email (`mailto:`), and optional WhatsApp quick-chat widget.

---

## 7. Implementation Prompt for Antigravity CLI

```
# Instruction to Antigravity:
Please generate a production-ready Next.js (App Router) project with Tailwind CSS, TypeScript, and Lucide icons for "Cortex Grid Consulting".
Include:
1. Complete layout with responsive Header, Mobile Drawer, and Footer.
2. Landing page with Hero ("Future-Ready IT & Cost-Effective AI Operations"), Service Grid (6 core areas including AI Operations), Value Proposition, Testimonials, and Quick Consultation section.
3. Modular Service detail templates covering: AI Operations, Cloud Solutions, Web Solutions, Workplace Email, Enterprise Software, and Professional IT.
4. Fully functional Contact Form with client-side validation and accessible inputs.
5. Built-in metadata, sitemap.xml, robots.txt, and Schema.org JSON-LD for local/enterprise SEO.
```