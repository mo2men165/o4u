export type ServiceStat = {
  value: string;
  label: string;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: string;
};

export type ServiceFeature = {
  icon: string;
  title: string;
  description: string;
};

export type ServicePageData = {
  id: string;
  title: string;
  tagline: string;
  heroDescription: string;
  heroImage: string;
  icon: string;
  badge: string;
  stats: ServiceStat[];
  overview: {
    headline: string;
    body: string;
    highlights: string[];
  };
  process: ServiceProcessStep[];
  features: ServiceFeature[];
};

export const SERVICE_PAGE_DATA: Record<string, ServicePageData> = {
  "customer-service": {
    id: "customer-service",
    title: "Customer Service",
    tagline: "Turn every interaction into loyalty.",
    heroDescription:
      "Multilingual, omnichannel teams that become a seamless extension of your brand — handling every customer inquiry with empathy, expertise, and measurable efficiency.",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80",
    icon: "Headphones",
    badge: "Omnichannel Support",
    stats: [
      { value: "98%", label: "CSAT Score" },
      { value: "24/7", label: "Coverage" },
      { value: "<30s", label: "Avg Response" },
      { value: "12+", label: "Languages" },
    ],
    overview: {
      headline: "Customer service that turns buyers into brand advocates",
      body: "Our dedicated agents don't just answer questions — they represent your brand, resolve issues on the first contact, and leave customers feeling genuinely valued. From inbound inquiries to proactive retention outreach, we build the customer experience that earns five-star reviews and repeat business.",
      highlights: [
        "Phone, Email, Live Chat & Social",
        "Dedicated Brand-Trained Agents",
        "Real-Time KPI Dashboards",
        "Seamless CRM Integration",
      ],
    },
    process: [
      {
        step: "01",
        title: "Brand Immersion",
        description:
          "We learn your brand, products, tone of voice, and escalation protocols before a single call is made.",
        icon: "BookOpen",
      },
      {
        step: "02",
        title: "Agent Selection",
        description:
          "We handpick agents based on language proficiency, domain expertise, and cultural alignment with your target markets.",
        icon: "UserCheck",
      },
      {
        step: "03",
        title: "Training & Certification",
        description:
          "Rigorous product training, scenario simulations, and quality benchmarks ensure every agent is day-one ready.",
        icon: "GraduationCap",
      },
      {
        step: "04",
        title: "Go-Live & Optimize",
        description:
          "We launch with real-time monitoring, weekly QA reviews, and continuous coaching to compound performance.",
        icon: "TrendingUp",
      },
    ],
    features: [
      {
        icon: "Globe",
        title: "12+ Languages",
        description:
          "Native-level fluency in English, Arabic, French, German, Spanish, and more — tailored to your target markets.",
      },
      {
        icon: "MessageSquare",
        title: "True Omnichannel",
        description:
          "Phone, email, live chat, WhatsApp, and social media — unified under one experienced, brand-trained team.",
      },
      {
        icon: "ShieldCheck",
        title: "Daily QA Monitoring",
        description:
          "100% of interactions scored against your quality framework. Issues caught and corrected before they escalate.",
      },
      {
        icon: "BarChart2",
        title: "Live Dashboards",
        description:
          "Real-time CSAT, FCR, AHT, and escalation metrics at your fingertips through custom reporting portals.",
      },
      {
        icon: "Zap",
        title: "14-Day Launch",
        description:
          "From signed contract to fully trained, operational team in as little as two weeks — no ramp-up delays.",
      },
      {
        icon: "Heart",
        title: "Empathy Coaching",
        description:
          "Proprietary training that transforms difficult calls into loyalty-building moments your customers remember.",
      },
    ],
  },

  "lead-generation": {
    id: "lead-generation",
    title: "Lead Generation",
    tagline: "A pipeline that never runs dry.",
    heroDescription:
      "Outreach specialists who identify, engage, and qualify high-value prospects — delivering a consistent stream of sales-ready leads directly into your CRM.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    icon: "Target",
    badge: "B2B & B2C Outreach",
    stats: [
      { value: "3×", label: "Pipeline Growth" },
      { value: "87%", label: "Qualification Rate" },
      { value: "14d", label: "Launch Time" },
      { value: "50+", label: "Tools Integrated" },
    ],
    overview: {
      headline: "A dedicated sales development engine working for you 24/7",
      body: "We build and operate your entire outbound prospecting function — from ideal customer profiling and data sourcing to multi-touch outreach and qualification. Our SDRs don't spray and pray; they use data, personalization, and proven sequences to generate leads that actually convert.",
      highlights: [
        "ICP Definition & Data Sourcing",
        "Multi-Channel Outreach",
        "CRM-Native Lead Delivery",
        "Daily Performance Reporting",
      ],
    },
    process: [
      {
        step: "01",
        title: "Define Your ICP",
        description:
          "We collaborate to build precise ideal customer profiles that target the accounts most likely to convert and retain.",
        icon: "Target",
      },
      {
        step: "02",
        title: "Source & Verify",
        description:
          "Our researchers identify and verify prospect data from multiple premium databases to ensure zero wasted touches.",
        icon: "Database",
      },
      {
        step: "03",
        title: "Launch Campaigns",
        description:
          "Multi-channel sequences across phone, email, and LinkedIn launch with A/B tested messaging from day one.",
        icon: "Send",
      },
      {
        step: "04",
        title: "Deliver & Optimize",
        description:
          "Qualified leads flow into your CRM with full notes. We continuously refine based on conversion data.",
        icon: "TrendingUp",
      },
    ],
    features: [
      {
        icon: "Users",
        title: "ICP-Built Targeting",
        description:
          "Every prospect list built around your specific ideal customer profile — industry, size, title, and buying signals.",
      },
      {
        icon: "Phone",
        title: "Cold Calling Experts",
        description:
          "Native English-speaking SDRs with proven scripts, objection handling, and multi-call follow-up sequences.",
      },
      {
        icon: "Mail",
        title: "Email Sequences",
        description:
          "Personalized, multi-step email campaigns with A/B testing, optimal send times, and reply management.",
      },
      {
        icon: "BarChart2",
        title: "Daily Reporting",
        description:
          "Transparent KPI dashboards showing dials made, emails sent, connection rates, and qualified leads delivered.",
      },
      {
        icon: "RefreshCw",
        title: "Continuous Optimization",
        description:
          "Weekly reviews to refine targeting, messaging, and sequencing based on what's converting — and what's not.",
      },
      {
        icon: "ShieldCheck",
        title: "Compliance-First",
        description:
          "GDPR and CAN-SPAM compliant outreach with full opt-out management to protect your sender reputation.",
      },
    ],
  },

  "telesales-upselling": {
    id: "telesales-upselling",
    title: "Telesales & Upselling",
    tagline: "Revenue growth from every conversation.",
    heroDescription:
      "Elite sales agents who close deals, expand existing accounts, and turn your customer base into your biggest growth engine — with measurable, performance-driven results.",
    heroImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80",
    icon: "TrendingUp",
    badge: "Revenue Growth",
    stats: [
      { value: "40%", label: "Avg Revenue Lift" },
      { value: "93%", label: "Call Completion Rate" },
      { value: "5×", label: "ROI Delivered" },
      { value: "360°", label: "Sales Training" },
    ],
    overview: {
      headline: "A high-performance sales floor, fully managed for you",
      body: "Our telesales teams combine deep product knowledge with refined persuasion skills — not pushy tactics, but consultative selling that finds the right fit between your offerings and your customer's needs. Whether you're converting leads, retaining churning customers, or expanding existing accounts, our agents deliver revenue with integrity.",
      highlights: [
        "Outbound & Inbound Sales",
        "BANT Qualification Framework",
        "Upsell & Cross-Sell Programs",
        "Real-Time Sales Coaching",
      ],
    },
    process: [
      {
        step: "01",
        title: "Sales Playbook",
        description:
          "We co-create a playbook covering your product benefits, USPs, objection responses, and closing techniques.",
        icon: "BookOpen",
      },
      {
        step: "02",
        title: "Team Assembly",
        description:
          "We select agents with proven telesales track records and train them intensively on your specific offering.",
        icon: "Users",
      },
      {
        step: "03",
        title: "Launch & Coach",
        description:
          "Live campaign launch with daily call reviews, live coaching sessions, and real-time performance leaderboards.",
        icon: "Mic",
      },
      {
        step: "04",
        title: "Optimize & Scale",
        description:
          "Weekly revenue analysis reveals what's working. We double down on winning strategies and scale your team.",
        icon: "TrendingUp",
      },
    ],
    features: [
      {
        icon: "Target",
        title: "BANT Qualified",
        description:
          "Every prospect evaluated on Budget, Authority, Need, and Timeline before entering your sales pipeline.",
      },
      {
        icon: "Mic",
        title: "Live Coaching",
        description:
          "On-floor supervisors provide real-time coaching and call monitoring to keep conversion rates consistently high.",
      },
      {
        icon: "BarChart2",
        title: "Revenue Analytics",
        description:
          "Daily revenue attribution reports showing exactly which campaigns, agents, and scripts are driving results.",
      },
      {
        icon: "RefreshCw",
        title: "Upsell Sequences",
        description:
          "Systematic cross-sell and upsell sequences triggered by customer behavior, purchase history, and lifecycle stage.",
      },
      {
        icon: "Shield",
        title: "Customer Retention",
        description:
          "Specialized win-back and save-desk programs that recover churning customers and reduce cancellation rates.",
      },
      {
        icon: "Users",
        title: "Blended Teams",
        description:
          "Inbound and outbound agents managed as a single team for maximum coverage and revenue opportunity capture.",
      },
    ],
  },

  "data-entry": {
    id: "data-entry",
    title: "Data Entry",
    tagline: "Precision processing at enterprise scale.",
    heroDescription:
      "Highly accurate, secure, and fast data processing that frees your team from repetitive tasks — delivered with the quality controls and throughput your operations demand.",
    heroImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
    icon: "Database",
    badge: "High-Volume Processing",
    stats: [
      { value: "99.9%", label: "Accuracy Rate" },
      { value: "5×", label: "Faster Than In-House" },
      { value: "24h", label: "Standard Turnaround" },
      { value: "ISO", label: "Security Standards" },
    ],
    overview: {
      headline: "Your data, processed with machine precision and human judgment",
      body: "From one-time migration projects to ongoing high-volume processing, our data entry specialists deliver exceptional accuracy at scale. We handle structured and unstructured data across multiple formats, with dual-verification and QA processes that virtually eliminate errors before delivery.",
      highlights: [
        "Structured & Unstructured Formats",
        "Multi-Level QA Verification",
        "Secure Data Transfer Protocols",
        "Custom Workflow Integration",
      ],
    },
    process: [
      {
        step: "01",
        title: "Data Audit",
        description:
          "We review your data formats, volume, quality requirements, and delivery specs before any processing begins.",
        icon: "Search",
      },
      {
        step: "02",
        title: "Format Setup",
        description:
          "We configure templates, input forms, and output schemas to match your exact system requirements perfectly.",
        icon: "Settings",
      },
      {
        step: "03",
        title: "Processing",
        description:
          "Dedicated specialists process your data in secure, monitored environments with real-time progress tracking.",
        icon: "Database",
      },
      {
        step: "04",
        title: "QA & Delivery",
        description:
          "Dual-verification review catches any discrepancies before clean, validated data is delivered to your systems.",
        icon: "CheckCircle",
      },
    ],
    features: [
      {
        icon: "FileText",
        title: "Multi-Format Support",
        description:
          "Excel, CSV, PDF, images, handwritten forms, XML, JSON — we process any format your operation requires.",
      },
      {
        icon: "Eye",
        title: "OCR Integration",
        description:
          "Optical character recognition combined with human verification for scanned documents and handwritten data.",
      },
      {
        icon: "ShieldCheck",
        title: "Dual Verification",
        description:
          "Every entry validated by a second operator against strict quality benchmarks before final delivery.",
      },
      {
        icon: "Lock",
        title: "Secure Handling",
        description:
          "ISO-compliant security protocols, NDA-covered teams, encrypted transfers, and access-controlled environments.",
      },
      {
        icon: "Zap",
        title: "Batch Processing",
        description:
          "Optimized batch workflows enable us to process millions of records quickly without sacrificing accuracy.",
      },
      {
        icon: "Cloud",
        title: "Cloud Delivery",
        description:
          "Secure cloud-based delivery to your storage or systems of record — no email attachments, no data exposure.",
      },
    ],
  },

  "market-research": {
    id: "market-research",
    title: "Market Research Surveys",
    tagline: "Insights that move the needle.",
    heroDescription:
      "Professionally conducted surveys that capture real customer sentiment, market trends, and competitive intelligence — transforming raw responses into actionable strategic decisions.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
    icon: "BarChart3",
    badge: "Strategic Intelligence",
    stats: [
      { value: "10K+", label: "Surveys/Month" },
      { value: "15+", label: "Languages" },
      { value: "48h", label: "Results Delivery" },
      { value: "99%", label: "Response Quality" },
    ],
    overview: {
      headline: "The voice of your market, decoded and delivered",
      body: "We design, execute, and analyze market research surveys that give you an unfiltered view of your customers, competitors, and market opportunities. Our experienced survey specialists ensure high response rates, minimal bias, and insights you can act on — not just read about.",
      highlights: [
        "Custom Survey Design & Scripting",
        "CATI, CAWI & CAPI Methodologies",
        "Multi-Language Fieldwork",
        "Actionable Insight Reports",
      ],
    },
    process: [
      {
        step: "01",
        title: "Research Design",
        description:
          "We define objectives, draft questionnaires, and select the right methodology for your research goals.",
        icon: "PenTool",
      },
      {
        step: "02",
        title: "Sample Sourcing",
        description:
          "We recruit the right respondents — from consumer panels to B2B decision-makers — for representative results.",
        icon: "Users",
      },
      {
        step: "03",
        title: "Field Execution",
        description:
          "Trained specialists conduct interviews across phone, online, and in-person channels with consistent quality.",
        icon: "Phone",
      },
      {
        step: "04",
        title: "Analysis & Reporting",
        description:
          "Raw data is cleaned, coded, analyzed, and delivered as visual insight reports with clear recommendations.",
        icon: "BarChart2",
      },
    ],
    features: [
      {
        icon: "PenTool",
        title: "Custom Questionnaires",
        description:
          "Research-backed questionnaire design that minimizes bias and maximizes completion rates and data quality.",
      },
      {
        icon: "Globe",
        title: "15+ Languages",
        description:
          "Native-speaking interviewers and translators across all major global markets for authentic local research.",
      },
      {
        icon: "Monitor",
        title: "CATI / CAWI / CAPI",
        description:
          "Full methodology flexibility — computer-assisted telephone, web, or in-person interviewing based on your needs.",
      },
      {
        icon: "TrendingUp",
        title: "NPS & CSAT Tracking",
        description:
          "Recurring measurement programs that track brand health, satisfaction, and loyalty metrics over time.",
      },
      {
        icon: "BarChart2",
        title: "Competitive Benchmarking",
        description:
          "Systematic competitor analysis that reveals market positioning opportunities and early threat signals.",
      },
      {
        icon: "Layers",
        title: "Advanced Analytics",
        description:
          "Segmentation, cross-tabulation, and regression modeling to extract deeper strategic insights from your data.",
      },
    ],
  },

  "email-chat-support": {
    id: "email-chat-support",
    title: "Email & Chat Support",
    tagline: "Fast, human, always on-brand.",
    heroDescription:
      "Professional written support across live chat and email that resolves customer issues quickly, maintains your brand voice consistently, and drives measurable satisfaction scores.",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80",
    icon: "MessageSquare",
    badge: "Digital-First Support",
    stats: [
      { value: "<60s", label: "Chat Response" },
      { value: "96%", label: "First-Contact Resolution" },
      { value: "24/7", label: "Coverage" },
      { value: "4.9/5", label: "Avg Rating" },
    ],
    overview: {
      headline: "Written support that feels as personal as a phone call",
      body: "Customers today expect fast, helpful responses across every digital channel — and they expect it to sound like your brand. Our email and chat specialists are trained not just on your products, but on your tone, values, and communication style, delivering consistently excellent support that builds trust and loyalty.",
      highlights: [
        "Live Chat & Async Email",
        "Social Media DM Support",
        "Brand Voice Training",
        "Escalation Management",
      ],
    },
    process: [
      {
        step: "01",
        title: "Channel Setup",
        description:
          "We integrate with your chat platform, helpdesk, and email system — Zendesk, Freshdesk, Intercom, and more.",
        icon: "Settings",
      },
      {
        step: "02",
        title: "Template Library",
        description:
          "We build a branded response library calibrated to your tone, products, and most common customer scenarios.",
        icon: "FileText",
      },
      {
        step: "03",
        title: "Team Deployment",
        description:
          "Trained agents go live with real-time supervision, CSAT tracking, and response time monitoring from day one.",
        icon: "Users",
      },
      {
        step: "04",
        title: "Ongoing Optimization",
        description:
          "Monthly analysis of top issues, template updates, and SLA compliance reviews keep quality at its peak.",
        icon: "TrendingUp",
      },
    ],
    features: [
      {
        icon: "MessageCircle",
        title: "Live Chat Mastery",
        description:
          "Sub-60-second first response on live chat with proactive conversation management to resolve issues fast.",
      },
      {
        icon: "Mail",
        title: "Email Ticket Management",
        description:
          "SLA-driven email handling with priority routing, escalation triggers, and consistent under-24-hour resolution.",
      },
      {
        icon: "Share2",
        title: "Social DM Support",
        description:
          "Instagram, Facebook, and Twitter/X DM management that keeps your social channels responsive and your reputation intact.",
      },
      {
        icon: "Cpu",
        title: "AI-Assisted Drafting",
        description:
          "AI co-pilot tools help agents draft accurate, on-brand responses faster without replacing human judgment.",
      },
      {
        icon: "Heart",
        title: "Tone Calibration",
        description:
          "Brand voice workshops ensure every message sounds authentically like you — not a generic support center.",
      },
      {
        icon: "ArrowUpRight",
        title: "Smart Escalation",
        description:
          "Context-aware escalation rules route complex or sensitive cases to senior specialists before they become problems.",
      },
    ],
  },

  "recruitment-support": {
    id: "recruitment-support",
    title: "Recruitment Process Support",
    tagline: "Right people, faster — every time.",
    heroDescription:
      "End-to-end recruitment support that reduces time-to-hire, improves candidate quality, and frees your HR team to focus on strategy rather than administrative heavy lifting.",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
    icon: "Users",
    badge: "HR Outsourcing",
    stats: [
      { value: "70%", label: "Faster Time-to-Hire" },
      { value: "500+", label: "Screened Per Month" },
      { value: "95%", label: "Hiring Mgr Satisfaction" },
      { value: "14d", label: "SLA Commitment" },
    ],
    overview: {
      headline: "A dedicated recruitment engine that scales with your hiring volume",
      body: "Recruitment administration is time-consuming, repetitive, and resource-intensive — exactly the type of work our specialists excel at. From sourcing and initial screening to interview coordination and offer management, we handle the full operational layer of your hiring process so your HR team can focus on culture, strategy, and decision-making.",
      highlights: [
        "Resume Screening & Shortlisting",
        "Interview Scheduling & Coordination",
        "ATS Management & Maintenance",
        "Candidate Communication Hub",
      ],
    },
    process: [
      {
        step: "01",
        title: "Job Brief Review",
        description:
          "We review your job descriptions, culture fit criteria, and hiring manager preferences to calibrate screening precisely.",
        icon: "FileText",
      },
      {
        step: "02",
        title: "Source & Screen",
        description:
          "Multi-platform sourcing followed by systematic resume screening against your criteria — only qualified shortlists delivered.",
        icon: "Search",
      },
      {
        step: "03",
        title: "Coordinate Interviews",
        description:
          "Full interview scheduling — calendar management, candidate prep briefings, reminders, and rescheduling handled.",
        icon: "Calendar",
      },
      {
        step: "04",
        title: "Offer & Onboard",
        description:
          "Reference checking, offer letter coordination, pre-boarding paperwork, and first-day logistics seamlessly managed.",
        icon: "CheckCircle",
      },
    ],
    features: [
      {
        icon: "Search",
        title: "Multi-Platform Sourcing",
        description:
          "LinkedIn, Indeed, Glassdoor, Bayt, and niche job boards — comprehensive sourcing across your target talent pools.",
      },
      {
        icon: "FileText",
        title: "Structured Screening",
        description:
          "Consistent, objective screening rubrics that evaluate candidates against your specific requirements at scale.",
      },
      {
        icon: "Calendar",
        title: "Interview Logistics",
        description:
          "End-to-end scheduling coordination — calendar sync, video links, confirmations, reminders, and post-interview notes.",
      },
      {
        icon: "Monitor",
        title: "ATS Management",
        description:
          "We work within your existing ATS (Workday, Greenhouse, Lever, or others) to maintain clean, current pipeline data.",
      },
      {
        icon: "MessageSquare",
        title: "Candidate Experience",
        description:
          "Timely, professional communication at every stage that reflects well on your employer brand and reduces drop-off.",
      },
      {
        icon: "ClipboardList",
        title: "Onboarding Coordination",
        description:
          "Pre-boarding document collection, background check facilitation, and first-day setup coordination handled end-to-end.",
      },
    ],
  },

  "appointment-setting": {
    id: "appointment-setting",
    title: "Appointment Setting",
    tagline: "Your calendar, consistently full.",
    heroDescription:
      "Specialists who identify, qualify, and schedule high-value appointments with decision-makers — so your sales team shows up to meetings that are ready to convert.",
    heroImage:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1920&q=80",
    icon: "Calendar",
    badge: "Sales Pipeline",
    stats: [
      { value: "3×", label: "More Appointments" },
      { value: "85%", label: "Show Rate" },
      { value: "60d", label: "To Positive ROI" },
      { value: "95%", label: "Prospect Satisfaction" },
    ],
    overview: {
      headline: "Pre-qualified meetings that actually convert",
      body: "We don't just book time slots — we deliver motivated, qualified prospects who understand your value proposition and have agreed to a meaningful conversation. Our appointment setters research each prospect, tailor the outreach, and invest in the relationship before the meeting is ever booked.",
      highlights: [
        "B2B & B2C Setting",
        "Multi-Touch Outreach Sequences",
        "Calendar Integration & Sync",
        "No-Show Prevention Protocols",
      ],
    },
    process: [
      {
        step: "01",
        title: "ICP Profiling",
        description:
          "We define your ideal prospect profile in detail — company size, role, industry, pain points, and buying signals.",
        icon: "Target",
      },
      {
        step: "02",
        title: "Prospect Research",
        description:
          "Our researchers build verified, targeted prospect lists with decision-maker contact details from multiple sources.",
        icon: "Search",
      },
      {
        step: "03",
        title: "Multi-Touch Outreach",
        description:
          "Personalized phone and email sequences build familiarity and trust before the meeting request is ever made.",
        icon: "Phone",
      },
      {
        step: "04",
        title: "Schedule & Confirm",
        description:
          "Appointments booked into your sales team's calendar with confirmations, reminders, and no-show follow-ups.",
        icon: "Calendar",
      },
    ],
    features: [
      {
        icon: "Target",
        title: "Decision-Maker Access",
        description:
          "We specialize in reaching C-suite, VP, and Director-level contacts with messaging that earns a genuine response.",
      },
      {
        icon: "Calendar",
        title: "Calendar Integration",
        description:
          "Direct booking into Google Calendar, Outlook, Calendly, or your CRM — zero back-and-forth friction.",
      },
      {
        icon: "Phone",
        title: "Multi-Touch Sequences",
        description:
          "Phone calls, voicemails, and email follow-ups in a coordinated sequence that converts resistant prospects.",
      },
      {
        icon: "Bell",
        title: "No-Show Prevention",
        description:
          "24-hour reminders, day-of confirmations, and rapid reschedule protocols keep your show rate above 85%.",
      },
      {
        icon: "Database",
        title: "CRM Sync",
        description:
          "All prospect data, call notes, and meeting details pushed directly to your CRM with every appointment booked.",
      },
      {
        icon: "Users",
        title: "Warm Handoff Option",
        description:
          "Live transfer appointments where our setter introduces the prospect to your sales rep for instant rapport.",
      },
    ],
  },

  "back-office-support": {
    id: "back-office-support",
    title: "Back Office Support",
    tagline: "Operations so smooth you forget we're there.",
    heroDescription:
      "Comprehensive back-office outsourcing that handles the essential administrative work keeping your business running — so your team can focus entirely on growth.",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    icon: "Briefcase",
    badge: "Operations Support",
    stats: [
      { value: "60%", label: "Cost Savings" },
      { value: "99.5%", label: "Processing Accuracy" },
      { value: "2×", label: "Throughput Increase" },
      { value: "24/7", label: "Availability" },
    ],
    overview: {
      headline: "Essential operations handled — so you can focus on what matters",
      body: "Back-office functions are critical to your business but don't need to consume your most talented people's time. Our operations specialists take on document processing, reporting, invoicing, and administrative coordination with the accuracy, speed, and reliability your business demands — at a fraction of the in-house cost.",
      highlights: [
        "Document & Invoice Processing",
        "Reporting & Analytics",
        "Workflow Automation Support",
        "Compliance Documentation",
      ],
    },
    process: [
      {
        step: "01",
        title: "Process Audit",
        description:
          "We map your current back-office workflows, identify inefficiencies, and design optimized processes before we start.",
        icon: "Search",
      },
      {
        step: "02",
        title: "Documentation",
        description:
          "Every process documented with step-by-step SOPs, quality checkpoints, and escalation protocols defined clearly.",
        icon: "FileText",
      },
      {
        step: "03",
        title: "Team Deployment",
        description:
          "Dedicated specialists trained on your specific processes, systems, and standards go live with full supervision.",
        icon: "Users",
      },
      {
        step: "04",
        title: "Continuous Improvement",
        description:
          "Monthly operational reviews identify automation opportunities and process improvements that compound efficiency.",
        icon: "TrendingUp",
      },
    ],
    features: [
      {
        icon: "FileText",
        title: "Document Processing",
        description:
          "High-volume document intake, classification, data extraction, and filing across all your business document types.",
      },
      {
        icon: "DollarSign",
        title: "Invoice Management",
        description:
          "AP/AR invoice processing, validation, coding, and filing with accuracy controls and full audit trails.",
      },
      {
        icon: "BarChart2",
        title: "Reporting & Analytics",
        description:
          "Scheduled report generation and dashboard maintenance that keeps your business intelligence current and accurate.",
      },
      {
        icon: "RefreshCw",
        title: "Data Reconciliation",
        description:
          "Cross-system data reconciliation and validation to catch discrepancies before they become costly errors.",
      },
      {
        icon: "Cpu",
        title: "Workflow Automation",
        description:
          "We identify and implement automation opportunities using RPA tools to reduce manual effort and eliminate errors.",
      },
      {
        icon: "ShieldCheck",
        title: "Compliance Support",
        description:
          "Documentation maintenance, audit preparation support, and regulatory filing assistance to keep you always audit-ready.",
      },
    ],
  },
};
