export const content = {
  // Logo
  logoText: "The Weekly Till",

  // Badge
  badgeText: "3,400 local business owners read this every Tuesday",

// Headline — line 1 is normal, line 2 is italic terracotta
headlineStart: "Fix the workflow draining your time.",
headlineAccent: "Your first plan arrives immediately.",

// Subheadline
subheadline:
  "Choose your business type and the task costing the most hours. We will send one practical setup you can use right away. After that, you will get one short Tuesday email with ideas for the same area.",

// Button
buttonText: "Send my automation blueprint",
buttonLoadingText: "Sending...",

// Success page
successTitle: "Your blueprint is on the way!",
successMessage:
  "Check your inbox.",

// Footer
footerText: "© 2026 The Weekly Till. Built for owners who want their time back.",

  // Fine print below button
  privacyNote: "Free. Sent every Tuesday. Unsubscribe anytime.",

  // Dropdown placeholder strings (used for validation)
  businessTypePlaceholder: "Select type of business",
  painPointPlaceholder: "Select bottleneck",
  sourcePlaceholder: "How did you hear about us?",
};

export const testimonials = [
  {
    quote:
      "I saved $340 last month just from the scheduling tip in issue #12.",
    name: "Rosa M.",
    role: "Salon owner",
    city: "Austin TX",
  },
  {
    quote:
      "Finally a newsletter that doesn't assume I have an IT department.",
    name: "James K.",
    role: "Restaurant owner",
    city: "Chicago IL",
  },
  {
    quote:
      "Forwarded the hiring script to my manager. We filled the position in 4 days.",
    name: "Priya S.",
    role: "Clinic admin",
    city: "Miami FL",
  },
];

// ============================================
// DROPDOWN OPTIONS
// ============================================
export const businessTypes = [
  "Select type of business",
  // Food & Drink
  "Restaurant",
  "Café",
  "Bar",
  "Bakery",
  "Food Truck",
  "QSR (Quick Service Restaurant)",
  // Beauty & Wellness
  "Hair Salon",
  "Barbershop",
  "Spa",
  "Nail Studio",
  "Medspa",
  // Healthcare
  "Dental Clinic",
  "GP (General Practice)",
  "Physio",
  "Specialist Clinic",
  "Wellness Clinic",
  // Retail
  "Boutique",
  "Gift Shop",
  "Repair Shop",
  "Pharmacy",
  "Storefront Retail",
  // Other / Professional Services
  "Consultancy",
  "Workshop",
  "Service Business",
  "Professional Practice",
  "Other"
];

export const painPoints = [
  "Select bottleneck",
  "Staff scheduling",
  "Cash flow gaps",
  "Hiring",
  "Data entry",
  "Customer follow-ups",
  "Inventory tracking",
  "Client reminders",
  "Payroll prep",
];

export const referralSources = [
  "Select an option",
  "Google Search",
  "Instagram",
  "LinkedIn",
  "Friend or colleague",
  "YouTube",
  "Other",
];

// ============================================
// WEBHOOK PAYLOAD
// ============================================
export const createWebhookPayload = (data: {
  email: string;
  phone: string;
  business_type: string;
  pain_point: string;
  source: string;
}) => {
  return {
    email: data.email,
    phone: data.phone,
    business_type: data.business_type,
    pain_point: data.pain_point,
    source: data.source,
    timestamp: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
};
