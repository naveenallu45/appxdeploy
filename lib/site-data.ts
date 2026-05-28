import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  BadgeCheck,
  BarChart3,
  Boxes,
  CloudCog,
  Code2,
  Cpu,
  Gauge,
  Gem,
  GitBranch,
  Globe2,
  Layers3,
  LineChart,
  Megaphone,
  MessageCircle,
  Palette,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
};

export type Project = {
  id: number;
  category: string;
  headline: string;
  description: string;
  techStack: string[];
  accent: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    title: "Website Development",
    description: "Conversion-focused websites built with modern stacks, fast performance, and polished CMS-ready foundations.",
    icon: Globe2,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Mobile App Development",
    description: "Native-feeling mobile experiences for iOS and Android with scalable APIs and clean product flows.",
    icon: Smartphone,
    gradient: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO, content structure, Core Web Vitals, and growth-friendly metadata for better discovery.",
    icon: Search,
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Google Ads Management",
    description: "High-intent campaigns with landing page alignment, keyword discipline, and measurable ROI reporting.",
    icon: Target,
    gradient: "from-amber-300 to-orange-500",
  },
  {
    title: "Meta Ads Campaigns",
    description: "Creative-led campaigns across Facebook and Instagram for awareness, acquisition, and retargeting.",
    icon: Megaphone,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "Cloud Deployment Services",
    description: "Secure, automated deployments on cloud infrastructure with observability and cost-aware architecture.",
    icon: CloudCog,
    gradient: "from-sky-400 to-indigo-500",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful product interfaces, design systems, prototypes, and user journeys crafted for clarity.",
    icon: Palette,
    gradient: "from-purple-400 to-blue-500",
  },
  {
    title: "E-commerce Development",
    description: "Premium storefronts, checkout flows, payment integrations, dashboards, and growth tooling.",
    icon: ShoppingBag,
    gradient: "from-lime-300 to-emerald-500",
  },
  {
    title: "Custom Software Solutions",
    description: "Tailored internal tools, SaaS platforms, automations, and enterprise-grade workflow systems.",
    icon: Cpu,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    title: "API Development",
    description: "Reliable APIs, integrations, auth flows, documentation, and versioned contracts for product teams.",
    icon: Code2,
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    title: "DevOps & CI/CD",
    description: "Pipeline automation, environment strategy, container workflows, quality gates, and release systems.",
    icon: GitBranch,
    gradient: "from-violet-400 to-sky-500",
  },
  {
    title: "Maintenance & Support",
    description: "Reliable support, performance tuning, bug fixes, security patches, and long-term product care.",
    icon: Wrench,
    gradient: "from-slate-300 to-blue-500",
  },
];

export function serviceSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => serviceSlug(service.title) === slug);
}

export const stats = [
  { label: "Projects", value: 120, suffix: "+", icon: Rocket },
  { label: "Clients", value: 100, suffix: "+", icon: BadgeCheck },
  { label: "Years Experience", value: 5, suffix: "+", icon: Gem },
  { label: "Launch Reliability", value: 99, suffix: "%", icon: ShieldCheck },
];

export const testimonials = [
  {
    quote:
      "AppxDeploy brought the strategy, engineering discipline, and visual polish we needed to ship with confidence.",
    name: "Founder",
    role: "B2B SaaS Startup",
  },
  {
    quote:
      "Their team moved quickly without sacrificing quality. The final product felt premium from the first demo.",
    name: "Operations Lead",
    role: "Growth Company",
  },
  {
    quote:
      "From cloud deployment to campaign tracking, AppxDeploy handled the details that made our launch smooth.",
    name: "Product Director",
    role: "Digital Brand",
  },
];

export const faqs = [
  {
    question: "Can AppxDeploy handle design, development, and cloud deployment together?",
    answer:
      "Yes. We work across product strategy, UI/UX, web and mobile development, DevOps, SEO, and launch support so teams can move with one accountable partner.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. We help founders shape MVPs, validate scope, build fast, and set up infrastructure that can scale after launch.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "We begin with a discovery call, define goals and success metrics, map the technical approach, then move into a clear delivery plan with milestones.",
  },
  {
    question: "Can you support an existing product?",
    answer:
      "Yes. We can audit an existing app, improve performance, modernize UX, fix reliability issues, and continue maintenance after release.",
  },
];

export const projectCategories = ["All", "Web Platforms", "Mobile Apps", "Cloud & DevOps", "Growth Systems"];

export const projects: Project[] = [
  {
    id: 1,
    category: "Web Platforms",
    headline: "Premium SaaS interface preview",
    description: "A polished dashboard concept with analytics, billing, role-based access, and launch-ready design systems.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    accent: "from-cyan-400 via-blue-500 to-violet-500",
  },
  {
    id: 2,
    category: "Mobile Apps",
    headline: "Cross-platform product preview",
    description: "A sleek mobile experience concept for onboarding, subscriptions, notifications, and realtime workflows.",
    techStack: ["React Native", "Node.js", "Postgres", "Push"],
    accent: "from-fuchsia-400 via-purple-500 to-blue-500",
  },
  {
    id: 3,
    category: "Cloud & DevOps",
    headline: "Cloud operations preview",
    description: "Infrastructure automation, CI/CD, observability, and secure deployment flows for scaling product teams.",
    techStack: ["AWS", "Docker", "GitHub Actions", "Terraform"],
    accent: "from-sky-400 via-indigo-500 to-purple-500",
  },
  {
    id: 4,
    category: "Growth Systems",
    headline: "Performance marketing preview",
    description: "Landing pages, SEO foundations, campaign tracking, and analytics loops designed for measurable growth.",
    techStack: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
    accent: "from-emerald-400 via-cyan-500 to-blue-500",
  },
  {
    id: 5,
    category: "Web Platforms",
    headline: "Commerce experience preview",
    description: "A modern storefront direction with refined product pages, checkout optimization, and customer dashboards.",
    techStack: ["Commerce", "CMS", "Payments", "CRM"],
    accent: "from-amber-300 via-orange-500 to-rose-500",
  },
  {
    id: 6,
    category: "Cloud & DevOps",
    headline: "API ecosystem preview",
    description: "Secure API layers, partner integrations, monitoring, documentation, and scalable backend architecture.",
    techStack: ["REST", "GraphQL", "Auth", "Monitoring"],
    accent: "from-blue-400 via-cyan-500 to-teal-400",
  },
];

export const team = [
  { name: "Product Strategy", role: "Discovery, roadmaps, and delivery leadership", icon: LineChart },
  { name: "Design Studio", role: "Interfaces, brand systems, and experience design", icon: Sparkles },
  { name: "Engineering", role: "Full-stack apps, APIs, cloud, and automation", icon: Boxes },
];

export const timeline = [
  { year: "2019", title: "Started with web launches", description: "Built fast, polished websites for founders and small businesses." },
  { year: "2021", title: "Expanded into products", description: "Added mobile, SaaS dashboards, custom software, and integrations." },
  { year: "2023", title: "Scaled cloud delivery", description: "Formalized DevOps, CI/CD, observability, and support workflows." },
  { year: "Now", title: "Growth partner model", description: "Combining product engineering, SEO, ads, and launch operations." },
];

export const valueProps = [
  { title: "Premium execution", description: "Every interface is shaped with startup-grade detail, speed, and launch readiness.", icon: Sparkles },
  { title: "Full-stack delivery", description: "Strategy, design, engineering, cloud, and marketing systems under one roof.", icon: Layers3 },
  { title: "Performance first", description: "We optimize for fast load times, strong UX, reliable releases, and measurable growth.", icon: Gauge },
  { title: "Clear communication", description: "Transparent milestones, practical recommendations, and no black-box delivery.", icon: MessageCircle },
];

export const offices = [
  {
    city: "Hyderabad Office",
    address: ["T-Hub, Floor 2,", "Raidurgam, Hyderabad, Telangana"],
  },
  {
    city: "Bengaluru Office",
    address: ["WeWork Galaxy,", "Residency Road, Bengaluru, Karnataka"],
  },
  {
    city: "Chennai Office",
    address: ["IIT Madras Research Park,", "Taramani, Chennai, Tamil Nadu"],
  },
  {
    city: "Remote Worldwide",
    address: ["Remote delivery for clients", "across India and global markets"],
  },
];

export const serviceOptions = services.map((service) => service.title);

export const processSteps = [
  { title: "Discover", description: "We clarify goals, users, constraints, and the fastest path to value.", icon: Search },
  { title: "Design", description: "We shape flows, visual systems, and interactive prototypes before build.", icon: AppWindow },
  { title: "Build", description: "We ship clean, typed, reusable software with cloud-ready foundations.", icon: ServerCog },
  { title: "Scale", description: "We tune performance, growth channels, CI/CD, and long-term support.", icon: BarChart3 },
];
