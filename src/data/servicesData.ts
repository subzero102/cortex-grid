export interface KeyPillar {
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface EnterpriseBenefit {
  metric: string;
  label: string;
  description: string;
}

export interface ImplementationStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  description: string;
  iconName: string;
  heroHighlight: string;
  keyPillars: KeyPillar[];
  benefits: EnterpriseBenefit[];
  methodology: ImplementationStep[];
  techStack: TechItem[];
  faqs: FAQItem[];
  caseStudy: {
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
  };
}

export const servicesData: Record<string, ServiceData> = {
  "ai-operations": {
    id: "ai-operations",
    slug: "ai-operations",
    title: "AI Operations & Workflow Consulting",
    shortTitle: "AI Operations",
    badge: "Enterprise AI & FinOps",
    tagline: "Adopt generative AI safely with predictable token expenditure and enterprise guardrails.",
    description:
      "Bridge the gap between experimental AI prototypes and cost-efficient production operations. Cortex Grid architects sovereign RAG pipelines, model routing systems, and strict token-budgeting frameworks so your business automates workflows without skyrocketing cloud bills.",
    iconName: "BrainCircuit",
    heroHighlight: "Up to 58% reduction in recurring token costs through semantic caching & dynamic model right-sizing.",
    keyPillars: [
      {
        title: "Enterprise Workflow Automation",
        description:
          "Identify friction-heavy operational bottlenecks and build tailored AI/LLM-assisted workflows across document processing, automated customer support routing, and internal knowledge extraction.",
        features: [
          "Multi-agent task orchestration & tool calling",
          "Automated unstructured document extraction (PDF, DOCX, scans)",
          "Context-aware triage and autonomous ticketing workflows",
          "Continuous accuracy evaluation & feedback loops"
        ],
        iconName: "Workflow"
      },
      {
        title: "Token & Compute Cost Optimization (FinOps)",
        description:
          "Halt runaway API invoices through rigorous inference cost engineering. We implement semantic caching, prompt distillation, and intelligent multi-model routing.",
        features: [
          "Dynamic routing: lightweight SLMs (Llama 3, Mistral) for triage, frontier models for complex reasoning",
          "Low-latency semantic caching via vector stores",
          "Self-hosted vLLM / Ollama clusters on private GPU instances",
          "Real-time token quotas, alerting thresholds, and department billing"
        ],
        iconName: "Coins"
      },
      {
        title: "AI Governance, Security & Guardrails",
        description:
          "Protect corporate intellectual property and adhere to strict regulatory compliance standards. Ensure zero data leakage into public training corpuses.",
        features: [
          "Zero-retention private enterprise LLM tenancy",
          "PII/PHI sanitization and automated redaction filters",
          "Prompt injection, jailbreak defense & output hallucination guardrails",
          "Role-based access control (RBAC) mapped to enterprise identity"
        ],
        iconName: "ShieldCheck"
      },
      {
        title: "Custom RAG & Tooling Integration",
        description:
          "Ground language models directly in your proprietary databases, ERPs, and document stores with sub-second retrieval accuracy.",
        features: [
          "Hybrid search: Dense vector embeddings + BM25 keyword reranking",
          "Enterprise connectors (PostgreSQL, SharePoint, Notion, Salesforce, Snowflake)",
          "Chunking & metadata tagging tuned to domain vocabularies",
          "Traceability citations with source document deep links"
        ],
        iconName: "DatabaseZap"
      }
    ],
    benefits: [
      {
        metric: "58%",
        label: "Token Spend Reduction",
        description: "Achieved via semantic caching and routing simple queries to efficient small language models."
      },
      {
        metric: "3.4x",
        label: "Knowledge Retrieval Speed",
        description: "Accelerated employee lookup across legacy SOPs, regulatory documents, and CRM logs."
      },
      {
        metric: "100%",
        label: "Data Sovereignty",
        description: "Zero external model training on your internal data with private VPC and tenant isolation."
      },
      {
        metric: "< 48 hrs",
        label: "Audit Turnaround",
        description: "Rapid turnaround on our comprehensive AI Cost & Architecture Efficiency Audit."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "AI Readiness & Cost Audit",
        description: "We analyze your current LLM API logs, high-friction team processes, and data repositories to identify high-ROI automation targets.",
        deliverable: "AI Efficiency Blueprint & Token Cost Projection"
      },
      {
        step: "02",
        title: "Architecture & Guardrail Design",
        description: "We define private inference boundaries, choose optimal vector databases, establish PII sanitization pipelines, and configure model routers.",
        deliverable: "Security Compliance Matrix & Technical Architecture"
      },
      {
        step: "03",
        title: "Pilot Implementation & Caching",
        description: "We build isolated staging sandboxes, integrate semantic caching layers, and stress-test hallucination prevention mechanisms.",
        deliverable: "Working MVP with Quantitative Benchmark Report"
      },
      {
        step: "04",
        title: "Production Scaling & Continuous FinOps",
        description: "We roll out production workflows with real-time usage telemetry, automated token limit tripwires, and monthly prompt optimization.",
        deliverable: "Live Enterprise Deployment & 24/7 Monitoring"
      }
    ],
    techStack: [
      { name: "OpenAI GPT-4o / o1", category: "Frontier Reasoning" },
      { name: "Anthropic Claude 3.5", category: "Agentic Code & Analysis" },
      { name: "Meta Llama 3 & Mistral", category: "Open Source SLM" },
      { name: "LangChain / LlamaIndex", category: "Framework" },
      { name: "Qdrant / Pinecone / pgvector", category: "Vector Databases" },
      { name: "vLLM & TensorRT-LLM", category: "High-Throughput Inference" },
      { name: "Langfuse / Helicone", category: "LLM Observability" },
      { name: "NeMo Guardrails", category: "AI Safety" }
    ],
    faqs: [
      {
        question: "How do you prevent our company data from being used to train third-party AI models?",
        answer: "We mandate enterprise zero-data-retention agreements with certified cloud providers (Azure OpenAI, AWS Bedrock) and deploy self-hosted open-source models inside your dedicated private VPC. Your prompts, embeddings, and outputs are never used for model training."
      },
      {
        question: "What is an AI Efficiency Audit and what does it include?",
        answer: "Our 48-hour AI Efficiency Audit evaluates your current AI/LLM infrastructure, API billing statements, and team workflows. We pinpoint redundant token consumption, recommend semantic caching layers, and deliver a clear ROI roadmap showing how to cut recurring costs while boosting accuracy."
      },
      {
        question: "Can you run models completely on-premise or in our private cloud?",
        answer: "Yes. For regulated healthcare, finance, or defense sectors, we deploy high-throughput inference stacks using vLLM, Ollama, and quantized open-weights models (e.g. Llama 3 70B, DeepSeek, Mistral) on bare-metal GPU servers or private clouds."
      },
      {
        question: "How does semantic caching reduce LLM API bills?",
        answer: "Many enterprise queries share similar context or intent. Rather than invoking an expensive frontier model for every repeated request, semantic caching uses vector similarity to detect equivalent questions and instantly serves verified responses from memory at sub-millisecond speeds and near-zero cost."
      }
    ],
    caseStudy: {
      client: "Global Logistics & Freight Brokerage",
      industry: "Supply Chain / Logistics",
      challenge: "Customer support spent 180+ hours weekly manually reading unstructured customs declarations and billing was surging past $32,000/month on unoptimized LLM calls.",
      solution: "Cortex Grid engineered a hybrid OCR + small language model extraction pipeline with semantic caching and automated exception routing.",
      results: [
        "61% reduction in monthly LLM token expenditure",
        "Average document processing time decreased from 14 minutes to 9 seconds",
        "99.4% data extraction accuracy on complex multi-page manifests"
      ]
    }
  },

  cloud: {
    id: "cloud",
    slug: "cloud",
    title: "On-Cloud Services & Hybrid Infrastructure",
    shortTitle: "Cloud Solutions",
    badge: "Multi-Cloud & FinOps",
    tagline: "Resilient Azure, AWS, and GCP cloud environments engineered for high uptime and cost governance.",
    description:
      "Transform unpredictable cloud bills into well-architected, auto-scaling infrastructure. From greenfield cloud migrations to private virtualization and multi-cloud governance, Cortex Grid ensures high availability, security hardening, and systematic FinOps optimization.",
    iconName: "CloudCog",
    heroHighlight: "99.99% infrastructure uptime SLA with systematic multi-cloud disaster recovery architectures.",
    keyPillars: [
      {
        title: "Microsoft Azure Solutions",
        description:
          "Enterprise Azure infrastructure, Entra ID (Azure AD) federated identity, Azure Virtual Desktop, ExpressRoute, and automated bicep/Terraform deployments.",
        features: [
          "Azure Landing Zones & governance blueprints",
          "Entra ID Conditional Access & Zero Trust posture",
          "Azure App Services, AKS (Kubernetes), and SQL Managed Instances",
          "Cost management with Reserved Instances & Savings Plans"
        ],
        iconName: "Shield"
      },
      {
        title: "Amazon Web Services (AWS)",
        description:
          "Production-grade AWS architecture spanning EC2 auto-scaling groups, S3 tiering, serverless Lambda backends, and multi-region RDS clusters.",
        features: [
          "AWS Well-Architected Framework review & remediation",
          "VPC peering, AWS Transit Gateway, and Direct Connect",
          "Automated infrastructure as code (IaC) via Terraform & CDK",
          "FinOps audits to eliminate idle compute and unattached storage"
        ],
        iconName: "Server"
      },
      {
        title: "Google Cloud Platform (GCP)",
        description:
          "Leverage GCP's premier data engineering and container services including BigQuery analytical lakes, Google Kubernetes Engine (GKE), and Vertex AI pipelines.",
        features: [
          "GKE cluster setup, service mesh, and autoscaling",
          "BigQuery data warehouse setup and query cost controls",
          "Cloud IAM policies and least-privilege security models",
          "Hybrid interconnectivity between on-premise and GCP"
        ],
        iconName: "Cpu"
      },
      {
        title: "Private Cloud & Hybrid IT",
        description:
          "Bridge legacy on-premise investments with modern virtualization using Proxmox, VMware, and hybrid VPN tunnels.",
        features: [
          "Bare-metal hypervisor installation & high-availability clusters",
          "On-premise SAN/NAS storage replication & snapshot scheduling",
          "Disaster recovery as a service (DRaaS) with sub-hour RTO/RPO",
          "Hybrid cloud synchronization for latency-critical workloads"
        ],
        iconName: "Network"
      }
    ],
    benefits: [
      {
        metric: "35%",
        label: "Avg. Cloud Cost Reduction",
        description: "Through rightsizing instances, reserved capacity, and eliminating phantom cloud storage."
      },
      {
        metric: "99.99%",
        label: "Uptime Reliability",
        description: "Resilient multi-AZ architectures with automated failover and health checks."
      },
      {
        metric: "< 15 min",
        label: "Incident Response",
        description: "24/7 proactive cloud infrastructure monitoring and anomaly alerting."
      },
      {
        metric: "Zero",
        label: "Cutover Downtime",
        description: "Continuous database synchronization during production lift-and-shift migrations."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Cloud Infrastructure Audit",
        description: "Deep inspection of current cloud configurations, network topology, firewall rules, and invoice breakdowns.",
        deliverable: "Security & FinOps Optimization Report"
      },
      {
        step: "02",
        title: "Architecture & Landing Zone Blueprint",
        description: "Designing isolated VPCs, subnets, RBAC policies, and Terraform modules aligned with compliance standards.",
        deliverable: "Terraform IaC Blueprints & Disaster Recovery Plan"
      },
      {
        step: "03",
        title: "Phased Migration & Pilot",
        description: "Non-disruptive migration of non-critical workloads first, followed by live data replication and rehearsal runs.",
        deliverable: "Validated Pilot Environment & Performance Benchmarks"
      },
      {
        step: "04",
        title: "Cutover & 24/7 Managed FinOps",
        description: "Smooth cutover during designated maintenance windows, followed by 24/7 uptime monitoring and monthly cost governance.",
        deliverable: "Production Handover & SLA Dashboard"
      }
    ],
    techStack: [
      { name: "Microsoft Azure", category: "Public Cloud" },
      { name: "Amazon Web Services", category: "Public Cloud" },
      { name: "Google Cloud Platform", category: "Public Cloud" },
      { name: "Terraform / OpenTofu", category: "Infrastructure as Code" },
      { name: "Kubernetes (K8s / AKS / EKS)", category: "Containers" },
      { name: "Docker & Container Registries", category: "Containerization" },
      { name: "Cloudflare", category: "Edge & CDN" },
      { name: "Datadog / Prometheus", category: "Observability" }
    ],
    faqs: [
      {
        question: "Can you help us migrate from on-premise servers to Azure or AWS without business disruption?",
        answer: "Yes. We specialize in zero-downtime and minimal-maintenance-window migrations. We set up live database mirroring, test application dependencies in staging environments, and execute final DNS cutovers smoothly."
      },
      {
        question: "What is FinOps and how does Cortex Grid lower our monthly cloud bill?",
        answer: "FinOps is cultural and technical cloud financial management. We analyze utilization telemetry to right-size over-provisioned VMs, terminate orphaned storage volumes, configure spot instances for fault-tolerant batch jobs, and lock in optimal reserved instance contracts."
      },
      {
        question: "Do you support hybrid setups where some data must stay on-premise?",
        answer: "Absolutely. Many of our enterprise clients operate under data residency or strict regulatory rules requiring on-premise hardware. We build secure IPSec or ExpressRoute tunnels that integrate local storage with cloud services."
      }
    ],
    caseStudy: {
      client: "Regional Healthcare Network",
      industry: "Healthcare / Telemedicine",
      challenge: "Experiencing intermittent database lockouts and unpredictable AWS invoices swinging by ±40% monthly.",
      solution: "Engineered a multi-AZ AWS architecture with auto-scaling Aurora PostgreSQL, automated S3 archival, and Savings Plans.",
      results: [
        "$14,200 saved per month on cloud compute",
        "Achieved 100% HIPAA compliance verification",
        "Zero unplanned downtime over 18 consecutive months"
      ]
    }
  },

  "web-solutions": {
    id: "web-solutions",
    slug: "web-solutions",
    title: "Web Solutions, DNS & Modern Digital Platforms",
    shortTitle: "Web Solutions",
    badge: "High Performance Web",
    tagline: "Ultra-fast corporate portals, custom web applications, and rock-solid DNS infrastructure.",
    description:
      "Your web properties are the frontline of your enterprise brand. Cortex Grid provides full-lifecycle web engineering: lightning-fast Next.js portals, resilient DNS management, global CDN acceleration, and technical SEO for sustainable organic lead generation.",
    iconName: "Globe",
    heroHighlight: "Sub-second LCP and 95+ Core Web Vitals scores built for enterprise trust and conversion.",
    keyPillars: [
      {
        title: "Domain, DNS & Email Authentication",
        description:
          "Mission-critical domain lifecycle management, multi-provider redundant DNS, and bulletproof SPF, DKIM, and DMARC configurations.",
        features: [
          "Zero-latency Anycast DNS routing (Cloudflare / Route 53)",
          "DMARC enforcement to prevent brand domain spoofing & phishing",
          "Automated SSL/TLS certificate renewal and HSTS hardening",
          "Domain portfolio management & renewal protection"
        ],
        iconName: "ShieldAlert"
      },
      {
        title: "Enterprise Web Development",
        description:
          "Modern web applications, custom customer portals, and corporate sites engineered using Next.js, React, and TypeScript.",
        features: [
          "Server-side rendering (SSR) & static pre-rendering for top SEO",
          "Responsive layouts optimized for touch and keyboard accessibility",
          "Headless CMS integration (Sanity, Strapi, Contentful)",
          "Enterprise API integrations (REST, GraphQL, Webhooks)"
        ],
        iconName: "Code2"
      },
      {
        title: "High-Speed Hosting & Edge Delivery",
        description:
          "Global content delivery networks, edge caching, and isolated cloud VPS environments configured for traffic surges.",
        features: [
          "Cloudflare Enterprise CDN & Web Application Firewall (WAF)",
          "Automated DDoS mitigation and bot management",
          "Global edge caching for instantaneous sub-second page loads",
          "Automated CI/CD deployment pipelines with zero-downtime rollouts"
        ],
        iconName: "Zap"
      },
      {
        title: "Technical SEO & Core Web Vitals",
        description:
          "Structured data schemas, crawl budget optimization, and pristine rendering metrics that satisfy Google search algorithms.",
        features: [
          "Lighthouse score optimization (95+ across all 4 categories)",
          "Schema.org JSON-LD structured data for rich snippets",
          "Dynamic sitemap.xml, robots.txt, and canonical URL enforcement",
          "Conversion-rate-optimized (CRO) information architecture"
        ],
        iconName: "Search"
      }
    ],
    benefits: [
      {
        metric: "< 0.8s",
        label: "Avg. Page Load Time",
        description: "Global edge CDN distribution ensuring rapid user interaction and engagement."
      },
      {
        metric: "100%",
        label: "DMARC Compliance",
        description: "Eliminates email spoofing vulnerabilities on corporate domain names."
      },
      {
        metric: "95+",
        label: "Core Web Vitals",
        description: "Passing Google's strictest ranking benchmarks for mobile and desktop."
      },
      {
        metric: "99.99%",
        label: "DNS Availability",
        description: "Anycast architecture with multi-region failover and DDoS protection."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Domain & Web Health Audit",
        description: "Deep crawl of your current site, analyzing DNS records, SSL posture, page load bottlenecks, and SEO issues.",
        deliverable: "Technical Audit & Performance Scorecard"
      },
      {
        step: "02",
        title: "UX & Modern Technical Architecture",
        description: "Designing modern wireframes, component design systems, and headless API connection schemas.",
        deliverable: "Interactive Design System & API Specifications"
      },
      {
        step: "03",
        title: "Full-Stack Development & Testing",
        description: "Building production-grade Next.js components with TypeScript, responsive Tailwind CSS, and accessible forms.",
        deliverable: "Staging Preview Environment & QA Suite"
      },
      {
        step: "04",
        title: "DNS Cutover & Global CDN Launch",
        description: "Executing seamless DNS transitions with zero downtime, configuring edge caching, and verifying search console indexes.",
        deliverable: "Live Launch, SSL Certification, and Analytics Dashboard"
      }
    ],
    techStack: [
      { name: "Next.js (App Router)", category: "Frontend Framework" },
      { name: "React 19 & TypeScript", category: "Core UI" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Cloudflare", category: "CDN / DNS / WAF" },
      { name: "Vercel / AWS Amplify", category: "Edge Hosting" },
      { name: "PostgreSQL / Supabase", category: "Database" },
      { name: "Google Search Console", category: "SEO & Indexing" },
      { name: "Sentry", category: "Real-Time Error Tracking" }
    ],
    faqs: [
      {
        question: "Why is correct SPF, DKIM, and DMARC configuration critical for our domain?",
        answer: "Major email providers like Google and Yahoo now aggressively reject or mark as spam emails sent from domains without valid DMARC and DKIM alignment. We configure these records to protect your brand reputation and ensure 100% deliverability."
      },
      {
        question: "Do you redesign existing websites or build completely from scratch?",
        answer: "Both. We can overhaul legacy WordPress, Drupal, or PHP sites into modern high-speed Next.js platforms, or engineer completely custom applications and portals from the ground up."
      },
      {
        question: "How do you guarantee high SEO performance?",
        answer: "We combine semantic HTML5 architecture, server-side pre-rendering, automated XML sitemaps, JSON-LD Schema.org metadata, and strict Core Web Vitals optimization to ensure search engine crawlers index your pages cleanly."
      }
    ],
    caseStudy: {
      client: "B2B Financial Advisory Firm",
      industry: "Financial Services",
      challenge: "Their legacy WordPress site had 5.8-second load times, suffered from frequent bot spam, and had failing DMARC records.",
      solution: "Migrated to Next.js on edge CDN with Cloudflare WAF, modern server actions, and enforced DMARC quarantine policies.",
      results: [
        "Page load time plummeted from 5.8s to 0.7s (87% improvement)",
        "Zero domain spoofing incidents after DMARC enforcement",
        "44% increase in organic qualified inbound lead inquiries"
      ]
    }
  },

  "email-solutions": {
    id: "email-solutions",
    slug: "email-solutions",
    title: "Email & Workplace Productivity Solutions",
    shortTitle: "Workplace & Email",
    badge: "Enterprise Productivity",
    tagline: "Enterprise Microsoft 365, Google Workspace, and zero-downtime mailbox migrations.",
    description:
      "Empower your workforce with secure, collaborative productivity suites. Cortex Grid provisions, configures, and secures Microsoft 365 and Google Workspace environments, backed by multi-layered phishing defense, mobile device management, and seamless legacy migrations.",
    iconName: "Mail",
    heroHighlight: "Zero data loss email migrations with complete mailbox, calendar, and contact preservation.",
    keyPillars: [
      {
        title: "Microsoft 365 (M365) Enterprise Deployment",
        description:
          "End-to-end tenant setup, Exchange Online architecture, SharePoint document libraries, Microsoft Teams governance, and licensing advisory.",
        features: [
          "Exchange Online message hygiene & transport rules",
          "Microsoft Defender for Office 365 (Anti-Phishing & Safe Links)",
          "Intune Mobile Device Management (MDM) & Mobile Application Management (MAM)",
          "License optimization to reduce redundant M365 SKUs"
        ],
        iconName: "Laptop"
      },
      {
        title: "Google Workspace Deployment",
        description:
          "Streamlined Google Workspace onboarding, Gmail custom domain configuration, Google Drive shared drive structure, and enterprise DLP policies.",
        features: [
          "Enterprise user provisioning and SAML single sign-on (SSO)",
          "Google Vault retention rules for legal hold & discovery",
          "Data Loss Prevention (DLP) to block sensitive data sharing",
          "Third-party app access governance and API restriction"
        ],
        iconName: "Boxes"
      },
      {
        title: "Zero-Downtime Email Migration",
        description:
          "Seamlessly transition your organization from legacy cPanel, IMAP, on-premise Exchange, or between M365 and Google Workspace.",
        features: [
          "Complete mailbox history, calendar invites, contacts, and folder structures preserved",
          "Pre-staging data sync with delta passes to ensure zero lost emails",
          "Cutover scheduled over weekends or low-impact hours",
          "User-friendly desktop client reconfiguration guides"
        ],
        iconName: "ArrowRightLeft"
      },
      {
        title: "Email Security & Anti-Phishing Defense",
        description:
          "Fortify your organization's primary attack vector with modern email security layers, AI-assisted spear-phishing filters, and spam hygiene.",
        features: [
          "AI-driven impersonation protection for executive accounts",
          "Automated quarantine and malicious attachment sandboxing",
          "Comprehensive employee phishing simulation & training modules",
          "Outbound email encryption for confidential medical/financial attachments"
        ],
        iconName: "ShieldAlert"
      }
    ],
    benefits: [
      {
        metric: "99.9%",
        label: "Spam & Phishing Block Rate",
        description: "Filtered before reaching employee inboxes via advanced transport heuristics."
      },
      {
        metric: "Zero",
        label: "Lost Emails in Migration",
        description: "Dual-delivery routing and delta synchronization prevents any message drop."
      },
      {
        metric: "22%",
        label: "License Cost Savings",
        description: "Eliminating unused licenses and right-sizing enterprise SKU tiers."
      },
      {
        metric: "100%",
        label: "MFA Enforcement",
        description: "Enforcing modern authentication and conditional access across all devices."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Current Mailbox & License Inventory",
        description: "Auditing user count, active mailboxes, shared inboxes, alias addresses, and historical data volume.",
        deliverable: "Mailbox Migration Map & Licensing Recommendation"
      },
      {
        step: "02",
        title: "Tenant Provisioning & Security Hardening",
        description: "Setting up tenant tenant policies, MFA enforcement, Conditional Access, and spam hygiene filters.",
        deliverable: "Configured Tenant Environment & Security Baseline"
      },
      {
        step: "03",
        title: "Pre-Migration Synchronization",
        description: "Syncing historical emails and folders in the background while users continue working on their existing system.",
        deliverable: "Pre-Staged Mailboxes & Cutover Readiness Check"
      },
      {
        step: "04",
        title: "MX Cutover & Employee Onboarding",
        description: "Switching MX records, running final delta sync, and assisting users with seamless client authentication.",
        deliverable: "Live Environment & Post-Cutover Hypercare Support"
      }
    ],
    techStack: [
      { name: "Microsoft 365 / Exchange Online", category: "Productivity Suite" },
      { name: "Google Workspace / Gmail", category: "Productivity Suite" },
      { name: "Microsoft Entra ID / Intune", category: "Identity & MDM" },
      { name: "BitTitan MigrationWiz", category: "Migration Engine" },
      { name: "Mimecast / Proofpoint", category: "Email Security" },
      { name: "Cloudflare Email Routing", category: "DNS & Hygiene" }
    ],
    faqs: [
      {
        question: "Will our staff lose any emails during the migration to Microsoft 365 or Google Workspace?",
        answer: "Not a single email. We use specialized migration protocols that perform background synchronization of all historical messages, calendar appointments, and contacts. During the final MX DNS cutover, dual-delivery routing ensures uninterrupted email flow."
      },
      {
        question: "Can we mix and match different Microsoft 365 licenses to reduce costs?",
        answer: "Yes! Many companies unnecessarily purchase top-tier licenses for every employee. We right-size your licensing by pairing Business Basic or Exchange Online Plan 1 for frontline staff with Business Premium or E5 for power users and executives."
      },
      {
        question: "Do you help enforce Multi-Factor Authentication (MFA)?",
        answer: "Yes. Enforcing MFA with conditional access (e.g. blocking logins from unexpected countries or unmanaged devices) is an automatic part of our deployment baseline to protect against credential stuffing attacks."
      }
    ],
    caseStudy: {
      client: "Mid-Sized Accounting & Tax Advisory",
      industry: "Financial & Legal",
      challenge: "Operating on a fragmented legacy IMAP server with frequent blacklisting and zero mobile security controls.",
      solution: "Migrated 85 staff members to Microsoft 365 Business Premium with Intune MDM, conditional access, and automated data encryption.",
      results: [
        "100% data migrated across 85 mailboxes without an hour of business downtime",
        "Phishing incidents reduced to zero with Safe Links and Safe Attachments",
        "Full compliance achieved for sensitive client tax document handling"
      ]
    }
  },

  "software-solutions": {
    id: "software-solutions",
    slug: "software-solutions",
    title: "Enterprise Software, CRM, ERP & POS Solutions",
    shortTitle: "Enterprise Software",
    badge: "Business Systems & ERP",
    tagline: "Connecting your business processes through unified CRM, ERP, and Point-of-Sale systems.",
    description:
      "Break down operational silos and connect sales, inventory, and finance. Cortex Grid configures, integrates, and customizes enterprise CRM (Salesforce, HubSpot, Zoho), ERP architectures, and modern cloud POS systems with customized bi-directional synchronization.",
    iconName: "Layers",
    heroHighlight: "Unified single-source-of-truth architectures connecting sales, accounting, and inventory.",
    keyPillars: [
      {
        title: "CRM Deployment & Optimization",
        description:
          "End-to-end setup and customization of Salesforce, HubSpot, or Zoho CRM to streamline lead pipelines and automate sales follow-ups.",
        features: [
          "Lead scoring, automated qualification funnels & round-robin routing",
          "Custom pipeline stages, deal velocity metrics, and custom field mapping",
          "Automated email sequences, quoting workflows, and contract signoffs",
          "Executive revenue forecasting & attribution dashboards"
        ],
        iconName: "Users"
      },
      {
        title: "ERP (Enterprise Resource Planning)",
        description:
          "Consolidate financial accounting, procurement, supply chain, and warehouse operations into a centralized cloud ERP system.",
        features: [
          "Inventory tracking across multiple physical and virtual warehouses",
          "Automated purchase orders, supplier management, and billing reconciliation",
          "General ledger, accounts payable/receivable, and cash flow forecasting",
          "Role-based access control and strict audit trail logging"
        ],
        iconName: "Building2"
      },
      {
        title: "Cloud POS & Hardware Integrations",
        description:
          "Deploy reliable, cloud-synchronized Point-of-Sale (POS) architectures for retail, hospitality, and service franchises.",
        features: [
          "Hardware provisioning (barcode scanners, receipt printers, customer displays)",
          "Offline-resilient transaction processing with automatic cloud sync",
          "Real-time inventory deduction across online and physical storefronts",
          "Integrated payment gateway processing with contactless EMV/NFC"
        ],
        iconName: "CreditCard"
      },
      {
        title: "Custom Middleware & API Integrations",
        description:
          "Eliminate double-data-entry with secure, bi-directional webhook and API synchronization connecting your internal software stack.",
        features: [
          "Custom middleware connectors built on Node.js / Python / Azure Functions",
          "Automated error retries, payload logging, and webhook event streaming",
          "Legacy database connectors (SQL Server, Oracle, DB2)",
          "Data transformation and sanitization pipelines"
        ],
        iconName: "Cpu"
      }
    ],
    benefits: [
      {
        metric: "72%",
        label: "Data Entry Reduction",
        description: "Automated sync between CRM, POS, and ERP removes manual spreadsheets."
      },
      {
        metric: "3.2x",
        label: "Faster Order Fulfillment",
        description: "Real-time inventory visibility triggers immediate pick and pack workflows."
      },
      {
        metric: "100%",
        label: "Real-Time Revenue Visibility",
        description: "Consolidated executive dashboards reflecting live daily cash flow."
      },
      {
        metric: "99.98%",
        label: "POS Synchronization Uptime",
        description: "Offline caching prevents lost retail sales during network drops."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Business Process & Data Flow Mapping",
        description: "Interviewing department heads to map customer lifecycles, inventory movement, and financial reporting needs.",
        deliverable: "System Interaction Architecture & Data Flow Diagram"
      },
      {
        step: "02",
        title: "System Configuration & Schema Setup",
        description: "Configuring CRM/ERP modules, custom entities, user permissions, and transaction workflows in staging.",
        deliverable: "Configured Sandbox Environment & Data Migration Scripts"
      },
      {
        step: "03",
        title: "Integration & User Acceptance Testing",
        description: "Connecting middleware APIs, running end-to-end transaction tests, and training team power users.",
        deliverable: "UAT Sign-off & Power-User Training Playbook"
      },
      {
        step: "04",
        title: "Go-Live & Post-Launch Support",
        description: "Executing live cutover, monitoring data synchronization queues, and providing immediate desk-side hypercare.",
        deliverable: "Live Enterprise Operations & SLA Support Plan"
      }
    ],
    techStack: [
      { name: "Salesforce / HubSpot / Zoho", category: "CRM" },
      { name: "NetSuite / Odoo / SAP", category: "ERP" },
      { name: "Shopify POS / Square / Lightspeed", category: "Point of Sale" },
      { name: "Zapier / Make / n8n", category: "Low-Code Integration" },
      { name: "Node.js & Python Services", category: "Custom Middleware" },
      { name: "PostgreSQL & Redis", category: "Queue & Sync Caching" }
    ],
    faqs: [
      {
        question: "Can you connect our custom website to our CRM and ERP?",
        answer: "Yes. We build custom API connectors and secure webhooks so that when a lead or order is submitted on your website, it immediately registers in your CRM, deducts inventory in your ERP, and notifies your sales team in real time."
      },
      {
        question: "How do you handle legacy data migration from old spreadsheets or databases?",
        answer: "We perform rigorous data cleaning, deduplication, and schema normalization before importing your customer and transaction history into the new system, ensuring zero corrupted records."
      },
      {
        question: "What happens if our retail POS loses Internet connection?",
        answer: "We select and architect POS systems with robust offline-mode caching. Staff can continue ringing sales, printing receipts, and scanning items; the moment connectivity resumes, transactions sync back to the cloud."
      }
    ],
    caseStudy: {
      client: "Multi-Location Specialty Retail Chain",
      industry: "Retail & E-Commerce",
      challenge: "Physical stores and online website had disconnected inventory, causing frequent stock-outs and manual reconciliation headaches.",
      solution: "Unified their 6 retail outlets with cloud POS synchronized directly into an Odoo ERP and Shopify backend.",
      results: [
        "Eliminated 25+ hours of weekly manual inventory reconciliation",
        "Out-of-stock cancellations fell by 89%",
        "Same-day buy-online-pickup-in-store (BOPIS) launched across all locations"
      ]
    }
  },

  "professional-services": {
    id: "professional-services",
    slug: "professional-services",
    title: "Professional IT Services, Advisory & Support",
    shortTitle: "Professional IT",
    badge: "Managed Services & Advisory",
    tagline: "Proactive 24/7 helpdesk, strategic vCIO advisory, and comprehensive infrastructure security audits.",
    description:
      "Modern businesses cannot afford IT friction or unmanaged downtime. Cortex Grid serves as your dedicated IT command center: providing 24/7/365 helpdesk support, strategic technology roadmaps, device patch management, and cyber resilience audits.",
    iconName: "Headphones",
    heroHighlight: "Average 8-minute helpdesk ticket response time with 24/7 proactive system telemetry.",
    keyPillars: [
      {
        title: "24/7 Managed IT Helpdesk & Support",
        description:
          "Fast, friendly, and knowledgeable tier 1–3 technical support for your entire team across Windows, macOS, Linux, and mobile devices.",
        features: [
          "Instant remote desktop assistance and troubleshooting",
          "Automated patch management and zero-day vulnerability remediation",
          "New employee onboarding and hardware provisioning",
          "Hardware asset lifecycle tracking and replacement schedules"
        ],
        iconName: "MonitorCheck"
      },
      {
        title: "Virtual CIO (vCIO) & Strategic Advisory",
        description:
          "Executive technology leadership without the overhead of a full-time C-suite hire. We align your IT roadmap with your business targets.",
        features: [
          "Quarterly technology reviews (QBRs) and IT budget forecasting",
          "Vendor management and software contract negotiations",
          "Disaster recovery & Business Continuity Planning (BCP)",
          "Cyber insurance qualification audits and attestation"
        ],
        iconName: "Briefcase"
      },
      {
        title: "Infrastructure Audits & Cybersecurity",
        description:
          "Comprehensive assessments of your network firewalls, switches, server racks, and endpoint hygiene against modern security frameworks.",
        features: [
          "Vulnerability scanning and penetration test remediation",
          "Network segmentation (VLANs, guest isolation, secure Wi-Fi)",
          "Endpoint Detection and Response (EDR) rollout",
          "SOC 2, ISO 27001, and HIPAA compliance readiness reviews"
        ],
        iconName: "ShieldCheck"
      },
      {
        title: "Custom IT Infrastructure Deployments",
        description:
          "Physical and virtual infrastructure engineering tailored to office moves, data center overhauls, and secure remote-work setups.",
        features: [
          "Structured network cabling, rack installation, and clean patch bays",
          "Enterprise Wi-Fi deployment (UniFi / Meraki) with zero-dead-zone surveys",
          "Server hardware clustering, UPS battery backups, and thermal monitoring",
          "Site-to-site VPN mesh connecting remote branch offices"
        ],
        iconName: "Wrench"
      }
    ],
    benefits: [
      {
        metric: "8 min",
        label: "Avg. Helpdesk Response",
        description: "Rapid resolution by certified engineers to keep your workforce productive."
      },
      {
        metric: "99.98%",
        label: "Network Uptime SLA",
        description: "Proactive monitoring catches hardware warnings before causing outages."
      },
      {
        metric: "100%",
        label: "Patch Compliance",
        description: "Automated patch schedules protect endpoints from zero-day vulnerabilities."
      },
      {
        metric: "30%+",
        label: "Hardware Life Extension",
        description: "Scheduled preventive maintenance and monitoring prevents premature failures."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Comprehensive IT Infrastructure Audit",
        description: "Deploying lightweight discovery agents to map all networked devices, software licenses, and security vulnerabilities.",
        deliverable: "IT Health Scorecard & Risk Mitigation Plan"
      },
      {
        step: "02",
        title: "Onboarding & Standardization",
        description: "Standardizing endpoint security (EDR), configuring automated backup verification, and establishing helpdesk ticketing channels.",
        deliverable: "Standard Operating Environment & Helpdesk Portal Access"
      },
      {
        step: "03",
        title: "Proactive Monitoring & Maintenance",
        description: "24/7 telemetry monitoring CPU, memory, drive health, network latency, and automated overnight patch distribution.",
        deliverable: "24/7 Real-Time Telemetry & Monthly Executive Reports"
      },
      {
        step: "04",
        title: "Quarterly Strategic Technology Reviews",
        description: "Meeting quarterly with leadership to review helpdesk metrics, budget for future hardware needs, and update security posture.",
        deliverable: "Strategic Technology Roadmap & Annual IT Budget"
      }
    ],
    techStack: [
      { name: "NinjaOne / Datto RMM", category: "Endpoint Management" },
      { name: "SentinelOne / CrowdStrike", category: "EDR Security" },
      { name: "Ubiquiti UniFi / Cisco Meraki", category: "Networking" },
      { name: "Veeam / Acronis", category: "Disaster Recovery" },
      { name: "1Password / Bitwarden Enterprise", category: "Credential Vault" },
      { name: "Jira Service Management", category: "Helpdesk & Ticketing" }
    ],
    faqs: [
      {
        question: "How does your 24/7 helpdesk support our employees?",
        answer: "Employees can open a ticket via a dedicated portal, quick email, or direct phone call. Our certified support technicians diagnose and resolve issues through secure remote management software, often resolving incidents in under 15 minutes."
      },
      {
        question: "What is a vCIO and why do we need one?",
        answer: "A Virtual Chief Information Officer (vCIO) provides high-level strategic direction—helping you budget for technology, avoid costly IT mistakes, pass compliance audits, and evaluate new software—at a fraction of the cost of hiring a full-time executive."
      },
      {
        question: "Do you offer onsite support or is everything remote?",
        answer: "We provide both. While over 95% of everyday software and account issues can be resolved rapidly through our remote tools, we also provide scheduled and emergency onsite engineering for physical cabling, hardware failures, and office moves."
      }
    ],
    caseStudy: {
      client: "Regional Commercial Law Practice",
      industry: "Legal Services",
      challenge: "Partner attorneys were losing billable hours dealing with sluggish laptops, unpatched software, and slow VPN connections.",
      solution: "Deployed unified RMM endpoint management, high-speed Meraki SD-WAN, and an 8-minute SLA helpdesk service.",
      results: [
        "Helpdesk ticket resolution time dropped by 74%",
        "100% compliance achieved for state bar cybersecurity standards",
        "Recovered an estimated 380+ billable attorney hours annually"
      ]
    }
  }
};
