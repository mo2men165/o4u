export const COMPANY_INFO = {
  name: "O4U",
  shortName: "O4U",
  description:
    "Egypt's premier outsourcing partner — delivering exceptional customer service, sales, and back-office solutions to businesses worldwide.",
  address: "260 Street, Maadi, Cairo, Egypt",
  phone: "+20 127 369 0006",
  email: "info@outsourcing-4-you.com",
  workingHours: "Sun–Thu, 9:00 AM – 6:00 PM (EET)",
  socials: {
    linkedin: "https://www.linkedin.com/company/outsourcing-4-you/",
    facebook: "https://www.facebook.com/Outsourc4you",
    instagram: "https://www.instagram.com/outsourcing4you/",
  },
  whatsapp: "https://wa.me/201273690006",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  serviceLinks: [
    { label: "Customer Service", href: "/services/customer-service" },
    { label: "Lead Generation", href: "/services/lead-generation" },
    { label: "Telesales & Upselling", href: "/services/telesales-upselling" },
    { label: "Email/Chat Support", href: "/services/email-chat-support" },
    { label: "Back Office Support", href: "/services/back-office-support" },
  ],
} as const;

export const SERVICES = [
  {
    id: "customer-service",
    title: "Customer Service",
    description: "We provide prompt, personalized support that elevates customer satisfaction and strengthens brand loyalty. Our trained agents handle inquiries with empathy and efficiency, ensuring every interaction leaves a positive impression.",
    icon: "Headphones",
    benefits: ["24/7 multilingual coverage", "First-call resolution focus", "Omnichannel support", "Customer satisfaction tracking"],
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "Our outreach specialists use proven strategies to identify and engage high-quality prospects for your business. We enhance your sales pipeline through targeted campaigns and data-driven prospecting techniques.",
    icon: "Target",
    benefits: ["Targeted prospect identification", "Multi-channel outreach", "CRM integration", "Qualified lead delivery"],
  },
  {
    id: "telesales-upselling",
    title: "Telesales & Upselling",
    description: "Our skilled sales agents identify cross-selling and upselling opportunities to maximize customer lifetime value. We combine persuasive communication with deep product knowledge to drive revenue growth.",
    icon: "TrendingUp",
    benefits: ["Revenue optimization strategies", "Cross-sell identification", "Customer retention programs", "Performance-based metrics"],
  },
  {
    id: "data-entry",
    title: "Data Entry",
    description: "We deliver accurate, efficient data processing services that keep your operations running smoothly. Our team handles large volumes of data with meticulous attention to detail and strict quality controls.",
    icon: "Database",
    benefits: ["99.9% accuracy guarantee", "High-volume processing", "Multiple format support", "Secure data handling"],
  },
  {
    id: "market-research",
    title: "Market Research Surveys",
    description: "We gather actionable feedback through professionally conducted surveys that measure brand awareness, customer satisfaction, and market trends. Our insights help you make informed product and business decisions.",
    icon: "BarChart3",
    benefits: ["Custom survey design", "Multi-language capability", "Real-time reporting", "Actionable insights"],
  },
  {
    id: "email-chat-support",
    title: "Email/Chat Support",
    description: "Our agents provide fast, professional written communication across email and live chat channels. We ensure consistent brand voice and timely responses that keep customers engaged and satisfied.",
    icon: "MessageSquare",
    benefits: ["Sub-60-second chat response", "Template-driven consistency", "Multi-platform integration", "Sentiment analysis"],
  },
  {
    id: "recruitment-support",
    title: "Recruitment Process Support",
    description: "We streamline your hiring process by handling candidate screening, interview coordination, and administrative recruitment tasks. Our team helps you find the right talent faster and more efficiently.",
    icon: "Users",
    benefits: ["Resume screening & shortlisting", "Interview scheduling", "Candidate communication", "ATS management"],
  },
  {
    id: "appointment-setting",
    title: "Appointment Setting",
    description: "Our specialists source and connect qualified B2B and B2C prospects, scheduling high-value appointments that keep your sales team focused on closing deals rather than chasing leads.",
    icon: "Calendar",
    benefits: ["Qualified prospect sourcing", "Calendar integration", "Confirmation & follow-up", "No-show reduction strategies"],
  },
  {
    id: "back-office-support",
    title: "Back Office Support",
    description: "We handle essential administrative tasks so your team can focus on core business activities. From document processing to reporting, our back-office team keeps your operations efficient and organized.",
    icon: "Briefcase",
    benefits: ["Document management", "Invoice processing", "Report generation", "Administrative coordination"],
  },
] as const;

export const INDUSTRIES = [
  {
    id: "real-estate",
    title: "Real Estate",
    description:
      "Lead qualification, appointment setting, and tenant support for property management firms.",
    icon: "Building2",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Patient scheduling, insurance verification, and compassionate support for medical providers.",
    icon: "Heart",
  },
  {
    id: "e-commerce",
    title: "E-commerce",
    description:
      "Order management, returns handling, and live chat support for online retailers.",
    icon: "ShoppingCart",
  },
  {
    id: "finance",
    title: "Finance",
    description:
      "Account inquiries, fraud detection support, and compliance-ready customer interactions.",
    icon: "DollarSign",
  },
  {
    id: "technology",
    title: "Technology",
    description:
      "Technical helpdesk, SaaS onboarding, and tier-1 support for software companies.",
    icon: "Cpu",
  },
  {
    id: "retail",
    title: "Retail",
    description:
      "In-store support, loyalty program management, and omnichannel customer care.",
    icon: "Store",
  },
] as const;

export const BENEFITS = [
  {
    id: "proven-results",
    title: "Proven Results",
    icon: "Trophy",
  },
  {
    id: "customer-satisfaction",
    title: "Customer Satisfaction",
    icon: "Smile",
  },
  {
    id: "dedicated-agents",
    title: "Dedicated Agents",
    icon: "UserCheck",
  },
  {
    id: "round-the-clock",
    title: "24/7 Availability",
    icon: "Clock",
  },
  {
    id: "quality-assured",
    title: "Quality Assured",
    icon: "Award",
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    icon: "Settings",
  },
  {
    id: "cost-effective",
    title: "Cost Effective",
    icon: "Wallet",
  },
] as const;

export const SERVICE_FAQS = [
  {
    question: "How quickly can you set up a dedicated team for my business?",
    answer:
      "We can typically have a fully trained, dedicated team operational within 2-4 weeks, depending on the complexity of your requirements and team size. Our streamlined onboarding process ensures a smooth transition.",
  },
  {
    question: "What languages do your agents speak?",
    answer:
      "Our agents are fluent in English and Arabic, with many team members also proficient in French, German, and Spanish. We can recruit for additional language requirements based on your needs.",
  },
  {
    question: "How do you ensure quality and performance?",
    answer:
      "We implement rigorous QA processes including call monitoring, regular performance reviews, KPI tracking, and real-time dashboards. Our dedicated quality assurance team conducts daily audits to maintain the highest standards.",
  },
  {
    question: "Can I scale my team up or down as needed?",
    answer:
      "Absolutely. Flexibility is one of our core strengths. You can scale your team size based on seasonal demands, campaign needs, or business growth with as little as two weeks notice.",
  },
  {
    question: "What technology and tools do you use?",
    answer:
      "We work with industry-leading platforms including Zendesk, Salesforce, HubSpot, Freshdesk, and more. We can also integrate with your existing tech stack to ensure seamless operations.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Data security is paramount. We maintain strict compliance with GDPR and international data protection standards. Our facilities feature secure access controls, encrypted communications, and regular security audits.",
  },
  {
    question: "What time zones do you cover?",
    answer:
      "We provide coverage across all major time zones including EST, CST, PST, GMT, and CET. Our flexible scheduling allows us to staff teams around the clock to match your business hours and customer needs.",
  },
  {
    question: "Can we visit your office?",
    answer:
      "We welcome client visits to our Maadi, Cairo facility. Seeing our operations firsthand gives you confidence in our team, technology, and processes. Contact us to schedule a tour at a time that works for you.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We brought O4U on board to handle our client pre-screening and outreach campaigns. Their team has been incredibly responsive and proactive — they adapted to our workflow within days and consistently deliver results that exceed our expectations.",
    name: "Hellen Smith",
    location: "Michigan, USA",
  },
  {
    quote:
      "We've been outsourcing our customer service operations to O4U for over a year now, and the quality of service has been outstanding. Their agents are professional, well-trained, and their pricing is remarkably competitive for the level of talent they provide.",
    name: "Connor Quinn",
    location: "California, USA",
  },
  {
    quote:
      "O4U managed our outbound communication campaigns with a level of professionalism and efficiency that genuinely impressed us. Their team understood our brand voice from day one and executed each campaign with precision and care.",
    name: "Jeff Murgatroyd",
    location: "New York, USA",
  },
] as const;

export const EMPLOYEES = [
  {
    name: "Fatma Maher",
    role: "Head of L&D Department",
    startedAs: "Telesales Agent",
    joinYear: 2020,
    quote:
      "What drives me every day is watching someone click. Seeing a person go from uncertain to confident — that's what L&D is about. O4U gave me the space to build that culture.",
    photo: "/employees/tommy.jpeg",
  },
  {
    name: "Abeer Salah",
    role: "Campaign Manager",
    startedAs: "Telesales Agent",
    joinYear: 2021,
    quote:
      "I genuinely enjoy the strategy side — figuring out why a campaign works, what to fix, what to push harder. O4U lets you own your decisions and learn from them.",
    photo: "/employees/abeer.jpeg",
  },
  {
    name: "Marwan Kassem",
    role: "Operations Manager",
    startedAs: "Telesales Agent",
    joinYear: 2019,
    quote:
      "Operations is never boring. There's always something to improve, a system to tighten, a team to support. I've been doing this for six years and I'm still finding new problems worth solving.",
    photo: "/employees/marwan.jpeg",
  },
  {
    name: "Mo'men Nasser",
    role: "Senior Sales Executive",
    startedAs: "Telesales Agent",
    joinYear: 2021,
    quote:
      "Sales here is competitive in the best way. Everyone's pushing each other to close better, think faster, handle harder objections. I thrive in that environment.",
    photo: "/employees/scott.jpeg",
  },
  {
    name: "Fatma Ghazali",
    role: "Quality Team Leader",
    startedAs: "Telesales Agent",
    joinYear: 2024,
    quote:
      "Quality isn't about catching people out — it's about raising the standard together. O4U understood that from day one, and it's why I was happy to step into this role.",
    photo: "/employees/fatma_ghazali.jpg",
  },
  {
    name: "Maryam Mostafa",
    role: "Head of Closing & Retention",
    startedAs: "Telesales Agent",
    joinYear: 2021,
    quote:
      "Retention is underrated. Closing is exciting, but keeping a client — that's where the real skill is. I built this department around that belief, and the results speak for themselves.",
    photo: "/employees/maryam.jpg",
  },
  {
    name: "Mohamed Mostafa",
    role: "Operations Team Leader",
    startedAs: "Telesales Agent",
    joinYear: 2023,
    quote:
      "My team is what gets me out of bed. When things run smoothly it's because of them, not me. My job is just to remove whatever's in their way.",
    photo: "/employees/mohamed_mostafa.jpg",
  },
  {
    name: "Esraa Saber",
    role: "Academy Supervisor",
    startedAs: "Telesales Agent",
    joinYear: 2022,
    quote:
      "I remember what it felt like on day one — overwhelmed, unsure where to start. Everything I build at the Academy is designed to make that feeling last as short as possible for others.",
    photo: "/employees/esraa.jpeg",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    number: 1,
    title: "Tell Us Your Needs",
    description:
      "Share your requirements and we'll design a tailored outsourcing plan for your business.",
    icon: "Phone",
  },
  {
    number: 2,
    title: "We Build Your Team",
    description:
      "We recruit, vet, and assemble a dedicated team matched to your culture and goals.",
    icon: "UsersRound",
  },
  {
    number: 3,
    title: "Training & Onboarding",
    description:
      "Your team undergoes rigorous training on your products, processes, and standards.",
    icon: "GraduationCap",
  },
  {
    number: 4,
    title: "Ongoing Partnership",
    description:
      "We continuously monitor performance and optimize to exceed your expectations.",
    icon: "HeartHandshake",
  },
] as const;

export const VALUES = [
  {
    title: "Respect",
    description:
      "We value every individual — our clients, our team, and the communities we serve. Mutual respect is the foundation of every relationship we build.",
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty and transparency in every interaction. Our word is our bond, and we hold ourselves accountable to the highest ethical standards.",
  },
  {
    title: "Quality",
    description:
      "We pursue excellence relentlessly. Every deliverable, every process, and every conversation reflects our commitment to world-class standards.",
  },
  {
    title: "Flexibility",
    description:
      "We adapt to your needs, scaling teams and solutions to match your evolving business requirements without missing a beat.",
  },
] as const;

export const WHY_O4U = [
  {
    title: "Strategic Thinking",
    description:
      "We go beyond task execution. Our team takes a consultative approach, aligning outsourcing strategies with your long-term business goals.",
  },
  {
    title: "Accountability",
    description:
      "We own every outcome. From KPI tracking to regular performance reviews, we ensure full visibility and responsibility at every level.",
  },
  {
    title: "Innovation",
    description:
      "We leverage cutting-edge tools, AI-driven workflows, and continuous improvement methodologies to keep you ahead of the competition.",
  },
  {
    title: "Transparent Communication",
    description:
      "No surprises, no hidden agendas. We maintain open channels and proactive reporting so you always know where things stand.",
  },
] as const;

export const PERKS = [
  {
    title: "Career Growth & Promotion Paths",
    description:
      "Clear advancement tracks from agent to management. We promote from within and invest in your long-term development with mentorship and leadership programs.",
    icon: "TrendingUp",
  },
  {
    title: "World-Class Training Programs",
    description:
      "Comprehensive onboarding and continuous skill development. Our training academy covers communication, technology, and industry-specific knowledge.",
    icon: "GraduationCap",
  },
  {
    title: "Team-First Culture",
    description:
      "Join a supportive, collaborative environment where your voice matters. We celebrate wins together and support each other through challenges.",
    icon: "Users",
  },
  {
    title: "Competitive Compensation",
    description:
      "Attractive salary packages with performance bonuses, regular raises, and comprehensive benefits that reward your dedication and hard work.",
    icon: "DollarSign",
  },
  {
    title: "Transportation & Meals",
    description:
      "Complimentary daily transportation to and from work and subsidized meals, because we believe in taking care of the essentials so you can focus on excelling.",
    icon: "Bus",
  },
  {
    title: "Fun Events & Team Activities",
    description:
      "Regular team outings, holiday celebrations, sports tournaments, and social events that keep our culture vibrant and our team connected.",
    icon: "PartyPopper",
  },
] as const;

export const JOB_POSTINGS = [
  {
    id: "cs-agent-en",
    title: "Customer Service Agent — English",
    department: "Customer Service",
    type: "Full-time",
    description:
      "Handle inbound customer inquiries via phone, email, and chat for our international clients. Provide exceptional support while maintaining quality standards and first-call resolution targets. Requires fluent English and strong communication skills.",
    shortDescription: "Provide world-class support for international clients via phone, email, and chat.",
  },
  {
    id: "senior-sales-rep",
    title: "Senior Sales Representative",
    department: "Sales",
    type: "Full-time",
    description:
      "Drive revenue through outbound sales campaigns, upselling, and cross-selling to existing client bases. Mentor junior team members and contribute to sales strategy development. Requires 2+ years of telesales experience.",
    shortDescription: "Lead outbound sales campaigns and mentor junior team members.",
  },
  {
    id: "team-lead-ops",
    title: "Operations Team Lead",
    department: "Operations",
    type: "Full-time",
    description:
      "Oversee daily operations of a 15-20 person team, manage schedules, conduct performance reviews, and ensure KPI targets are met. Collaborate with QA and training departments to maintain service excellence.",
    shortDescription: "Manage a team of 15-20 agents and drive operational excellence.",
  },
  {
    id: "qa-analyst",
    title: "Quality Assurance Analyst",
    department: "Operations",
    type: "Full-time",
    description:
      "Monitor and evaluate agent interactions across all channels. Develop quality scorecards, identify training needs, and provide actionable feedback to improve team performance and customer satisfaction.",
    shortDescription: "Evaluate interactions and drive quality improvement across teams.",
  },
  {
    id: "hr-coordinator",
    title: "HR & Recruitment Coordinator",
    department: "Admin",
    type: "Full-time",
    description:
      "Manage the full recruitment cycle from sourcing to onboarding. Coordinate interviews, maintain employee records, and support HR initiatives including engagement programs and policy implementation.",
    shortDescription: "Drive recruitment and support HR operations across the organization.",
  },
  {
    id: "lead-gen-specialist",
    title: "Lead Generation Specialist",
    department: "Sales",
    type: "Full-time",
    description:
      "Identify and qualify potential business prospects through research and outbound outreach. Build prospect lists, execute calling campaigns, and schedule appointments for the sales team. Requires excellent research skills.",
    shortDescription: "Source and qualify high-value prospects through targeted outreach campaigns.",
  },
] as const;

export const CAREER_FAQS = [
  {
    question: "What does the interview process look like?",
    answer:
      "Our interview process consists of three stages: an initial phone screening, a skills assessment (language and scenario-based), and a final interview with the hiring manager. The entire process typically takes 5-7 business days.",
  },
  {
    question: "Do I need prior call center experience?",
    answer:
      "Not necessarily. While experience is a plus, we welcome enthusiastic candidates who demonstrate strong communication skills and a willingness to learn. Our comprehensive training program prepares you for success regardless of your background.",
  },
  {
    question: "What are the typical working hours?",
    answer:
      "Working hours vary by project and client time zone. Most shifts fall within Sunday to Thursday, 9:00 AM to 6:00 PM EET. Some projects may require evening or weekend availability, which is communicated during the interview process.",
  },
  {
    question: "Is training provided for new hires?",
    answer:
      "Absolutely. Every new hire undergoes a comprehensive paid training program covering communication skills, product knowledge, systems training, and quality standards. Training duration ranges from one to three weeks depending on the project.",
  },
  {
    question: "What languages are required?",
    answer:
      "Fluent English is required for most positions. Arabic proficiency is a plus. Some specialized roles may require French, German, or Spanish. Language requirements are specified in each job listing.",
  },
  {
    question: "What is the dress code?",
    answer:
      "We maintain a smart casual dress code in the office. We want you to feel comfortable and professional. Specific guidelines are provided during onboarding, but think neat and presentable without being overly formal.",
  },
] as const;