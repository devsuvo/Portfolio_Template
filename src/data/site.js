// All website content lives here — edit text, links and images in one place.

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const brand = {
  name: "Suvo Dev",
  tagline: "Digital agency for ambitious brands",
  description:
    "Suvo Dev is a digital agency that designs, builds and grows brands through UI/UX, web development, brand strategy and marketing that actually converts.",
  email: "hello@suvodev.com",
  phone: "+880 1700-000000",
  address: "Dhaka, Bangladesh",
};

/* ---------------- Navigation ---------------- */
export const navLinks = [
  { label: "About us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
];

export const megaMenu = {
  columnOne: [
    { label: "Login", desc: "Access your account", href: "/login", icon: "login" },
    { label: "Sign up", desc: "Create a new account", href: "/signup", icon: "user" },
    { label: "Team", desc: "Meet the experts", href: "/#team", icon: "team" },
    { label: "Pricing", desc: "Plans & packages", href: "/pricing", icon: "tag" },
    { label: "FAQ", desc: "Common questions", href: "/#faq", icon: "help" },
  ],
  columnTwo: [
    { label: "Process", desc: "Discovery to launch", href: "/#process", icon: "flow" },
    { label: "Features", desc: "What we deliver", href: "/features", icon: "spark" },
    { label: "Integration", desc: "Tools & tech partners", href: "/integration", icon: "plug" },
    { label: "Security", desc: "Secure project delivery", href: "/security", icon: "shield" },
    { label: "Privacy Policy", desc: "How we handle data", href: "/privacy-policy", icon: "lock" },
    { label: "Terms & Conditions", desc: "Service engagement terms", href: "/terms-conditions", icon: "doc" },
  ],
  featured: {
    title: "Featured Case Study",
    desc: "See how Suvo Dev helps brands grow with design, development and digital strategy.",
    image: unsplash("1552664730-d307ca884978", 800),
    href: "/#projects",
  },
};

/* ---------------- Hero ---------------- */
export const hero = {
  title: "Design, build and scale—your brand’s digital home",
  text: "No fluff and no unnecessary complexity. Just thoughtful design and solid engineering focused on one goal—helping your business grow faster and smarter.",
  primary: { label: "Get Started", href: "/contact" },
  secondary: { label: "Learn more", href: "/#services" },
  avatars: [
    unsplash("1507003211169-0a1dd7228f2d", 200),
    unsplash("1494790108377-be9c29b29330", 200),
    unsplash("1500648767791-00dcc994a43e", 200),
  ],
  teamsCount: 2400,
  stats: [
    { value: 98, suffix: "%", label: "Client satisfaction rate" },
    { value: 350, suffix: "+", label: "Projects launched worldwide" },
  ],
  wheel: [
    { title: "Brand Identity Studio", image: unsplash("1626785774573-4b799315345d", 700) },
    { title: "Product Design Lab", image: unsplash("1581291518857-4e27b48ff24e", 700) },
    { title: "Digital Experience", image: unsplash("1618005182384-a83a8bd57fbe", 700) },
    { title: "Growth Marketing", image: unsplash("1460925895917-afdab827c52f", 700) },
    { title: "Motion & Visual", image: unsplash("1561070791-2526d30994b5", 700) },
    { title: "Web Platform Build", image: unsplash("1498050108023-c5249f4df085", 700) },
    { title: "Creative Strategy", image: unsplash("1531403009284-440f080d1e12", 700) },
    { title: "Launch & Scale", image: unsplash("1553877522-43269d4ea984", 700) },
    { title: "UI Systems Studio", image: unsplash("1558655146-9f40138edfeb", 700) },
    { title: "Content Campaigns", image: unsplash("1557672172-298e090bd0f1", 700) },
    { title: "Ecommerce Builds", image: unsplash("1563986768609-322da13575f3", 700) },
    { title: "SaaS Product Launch", image: unsplash("1551288049-bebda4e38f71", 700) },
    { title: "Performance Ads", image: unsplash("1557838923-2985c318be48", 700) },
    { title: "Conversion Design", image: unsplash("1618005198919-d3d4b5a92ead", 700) },
  ],
};

// Fictional partner names, rendered as simple wordmarks
export const partners = [
  { name: "Lumora", shape: "circle" },
  { name: "Vertex", shape: "triangle" },
  { name: "Northwind", shape: "wave" },
  { name: "Arcwave", shape: "arc" },
  { name: "Coreflow", shape: "square" },
  { name: "Pixelnest", shape: "grid" },
  { name: "Brightly", shape: "star" },
  { name: "Quantix", shape: "diamond" },
];

/* ---------------- About ---------------- */
export const about = {
  badge: "About us",
  title: "From idea to impact—we build what your business needs to grow",
  text: "From the first sketch to launch day, we create digital products that solve real problems, delight users and help brands grow faster with confidence.",
  button: { label: "Learn more", href: "/about" },
  stats: [
    { value: 120, suffix: "+", label: "Trusted partners" },
    { value: 8, suffix: "+", label: "Years of experience" },
    { value: 25, suffix: "+", label: "Awards won" },
  ],
  image: unsplash("1522071820081-009f0129c71c", 900),
  rating: "Rated 4.9/5.0",
};

/* ---------------- Services ---------------- */
export const services = {
  badge: "Services",
  title: "Smart solutions for growing brands",
  text: "From design to development, every service we offer is built to simplify your journey and accelerate your growth with clarity and precision.",
  button: { label: "Get started", href: "/contact" },
  items: [
    {
      title: "UI/UX Design",
      short: "Intuitive interfaces that turn curious visitors into loyal users.",
      long: "Research-led experiences that feel effortless, look polished and convert with purpose.",
      points: ["User research & wireframes", "Interactive prototyping", "Design systems", "Usability testing", "Mobile app design"],
      image: unsplash("1581291518857-4e27b48ff24e", 700),
    },
    {
      title: "Web Development",
      short: "Fast, scalable builds engineered for real business growth.",
      long: "Clean architecture and modern stacks that keep your product reliable, secure and ready to scale.",
      points: ["Custom web applications", "CMS & eCommerce", "API integrations", "Performance optimization", "Cloud deployment"],
      image: unsplash("1555066931-4365d14bab8c", 700),
    },
    {
      title: "Brand Strategy",
      short: "Distinctive identity systems that make your brand unforgettable.",
      long: "Positioning, messaging and visual language that help your brand stand out and stay consistent.",
      points: ["Brand positioning", "Visual identity", "Tone of voice", "Brand guidelines", "Logo systems"],
      image: unsplash("1626785774573-4b799315345d", 700),
    },
    {
      title: "Digital Marketing",
      short: "Data-backed campaigns that attract and keep the right audience.",
      long: "Strategy and execution across every channel to grow visibility, engagement and measurable revenue.",
      points: ["SEO & content", "Paid media", "Social campaigns", "Analytics & reporting", "Email marketing"],
      image: unsplash("1432888498266-38ffec3eaf0a", 700),
    },
  ],
};

/* ---------------- Process ---------------- */
export const workProcess = {
  badge: "Process",
  title: "From concept to conversion—a process built for real results",
  text: "We don’t just hand over a finished product. We craft an experience that connects with people, performs flawlessly and drives measurable growth for your business.",
  button: { label: "Get started", href: "/contact" },
  steps: [
    {
      label: "Clarity before creativity",
      title: "Deep Discovery & Strategic Planning",
      number: ".01",
      image: unsplash("1542744173-8e7e53415bb0", 1000),
    },
    {
      label: "Project kick-off",
      title: "User-Centered Design & Development",
      number: ".02",
      image: unsplash("1559136555-9303baea8ebd", 1000),
    },
    {
      label: "Project launch",
      title: "Scalable Launch & Ongoing Optimization",
      number: ".03",
      image: unsplash("1517245386807-bb43f82c33c4", 1000),
    },
  ],
};

/* ---------------- Projects ---------------- */
export const projects = {
  badge: "Projects",
  title: "Where ideas become experiences",
  text: "Every project here was built with one goal in mind—performance. From concept to launch, we deliver work that drives engagement, conversions and growth.",
  button: { label: "View All Projects", href: "/projects" },
  items: [
    { title: "FinovaX Pro", desc: "Smart financial intelligence platform", image: unsplash("1563013544-824ae1b704d3", 900) },
    { title: "Orbit Commerce", desc: "Scalable e-commerce experience", image: unsplash("1563986768609-322da13575f3", 900) },
    { title: "Lumora Health", desc: "Patient-first care platform", image: unsplash("1576091160550-2173dba999ef", 900) },
    { title: "Nexora CRM", desc: "Modern customer relationship suite", image: unsplash("1551288049-bebda4e38f71", 900) },
    { title: "Verdant Travel", desc: "Immersive booking & discovery app", image: unsplash("1476514525535-07fb3b4ae5f1", 900) },
    { title: "Pulse Media", desc: "Content streaming & engagement hub", image: unsplash("1550745165-9bc0b252726f", 900) },
  ],
};

/* ---------------- Clients / results ---------------- */
export const clients = {
  badge: "Trusted by clients",
  title: "Trusted by forward-thinking companies",
  text: "From early-stage startups to growing enterprises, our clients trust Suvo Dev to deliver work that creates real impact—not just good looks.",
  button: { label: "View All Reviews", href: "/#testimonials" },
  // type "stat" = tall card with a number, type "logo" = short logo card
  tiles: [
    { type: "stat", brand: "Lumora", shape: "circle", value: 3, suffix: "x", label: "ROI improvement" },
    { type: "logo", brand: "Vertex", shape: "triangle" },
    { type: "logo", brand: "Northwind", shape: "wave" },
    { type: "stat", brand: "Arcwave", shape: "arc", value: 42, suffix: "%", label: "Cost reduction" },
    { type: "stat", brand: "Coreflow", shape: "square", value: 2, suffix: "M", label: "Annual savings" },
    { type: "logo", brand: "Pixelnest", shape: "grid" },
    { type: "logo", brand: "Brightly", shape: "star" },
    { type: "stat", brand: "Quantix", shape: "diamond", value: 65, suffix: "%", label: "Improved scalability" },
  ],
};

/* ---------------- Team ---------------- */
export const team = {
  badge: "Squad",
  title: "The people who make it happen",
  text: "Every member of our team brings deep expertise and a shared focus—building solutions that are not only beautiful but built to perform.",
  button: { label: "View All Members", href: "/team" },
  members: [
    { name: "Suvo Dev", role: "Founder & Creative Director", image: unsplash("1506794778202-cad84cf45f1d", 700) },
    { name: "Nadia Rahman", role: "Brand Strategist", image: unsplash("1573496359142-b8d87734a5a2", 700) },
    { name: "Arif Hossain", role: "Product Designer", image: unsplash("1539571696357-5a69c17a67c6", 700) },
    { name: "Tanvir Ahmed", role: "Lead Developer", image: unsplash("1519085360753-af0119f7cbe7", 700) },
    { name: "Sadia Islam", role: "Marketing Director", image: unsplash("1580489944761-15a19d654956", 700) },
  ],
};

/* ---------------- Fun facts ---------------- */
export const funFacts = {
  badge: "Fun facts",
  title: "Driven by results, backed by numbers",
  text: "Every number here is more than data—it reflects real work, real clients and real outcomes, from successful launches to measurable growth and happy partners.",
  button: { label: "View All Projects", href: "/projects" },
  items: [
    { value: 350, suffix: "+", label: "Projects successfully delivered" },
    { value: 98, suffix: "%", label: "Client satisfaction rate", image: unsplash("1519389950473-47ba0277781c", 800), dark: true },
    { value: 120, suffix: "+", label: "Global brands served" },
    { value: 8, suffix: "+ Years", label: "Industry experience", image: unsplash("1579546929518-9e396f3cc809", 800) },
  ],
};

/* ---------------- Testimonials ---------------- */
export const testimonials = {
  badge: "Trusted client",
  title: "What our clients say about us",
  text: "Honest words from founders and teams we’ve partnered with. Their success stories are the best proof of how we work.",
  button: { label: "View All Testimonials", href: "/testimonials" },
  reviews: [
    { name: "Rafiq Chowdhury", role: "CEO, FinovaX", avatar: unsplash("1472099645785-5658abf4ff4e", 200), quote: "Suvo Dev rebuilt our product dashboard from scratch. Load times dropped by half and our users finally love the experience." },
    { name: "Emily Carter", role: "Marketing Lead, Orbit", avatar: unsplash("1438761681033-6461ffad8d80", 200), quote: "Their team understood our brand within days. The new website looks premium and our conversion rate jumped 38%." },
    { name: "Daniel Brooks", role: "Founder, Pulse Media", avatar: unsplash("1527980965255-d3b416303d12", 200), quote: "Clear communication, sharp design and on-time delivery. Working with Suvo Dev felt like having an in-house team." },
    { name: "Ayesha Khan", role: "Product Manager, Lumora", avatar: unsplash("1544005313-94ddf0286df2", 200), quote: "From research to launch, every step was thoughtful. Our patients now book appointments in under a minute." },
    { name: "Michael Lee", role: "CTO, Nexora", avatar: unsplash("1599566150163-29194dcaad36", 200), quote: "Clean code, solid architecture and great documentation. Scaling our CRM has never been easier." },
    { name: "Sophia Turner", role: "Director, Verdant Travel", avatar: unsplash("1534528741775-53994a69daeb", 200), quote: "They turned a complicated booking flow into something simple and beautiful. Our customers noticed immediately." },
  ],
  highlight: {
    avatars: [
      unsplash("1517841905240-472988babdf9", 120),
      unsplash("1560250097-0b93528c311a", 120),
      unsplash("1531123897727-8f129e1688ce", 120),
    ],
    count: "+243",
    caption: "Loved by 20k+ users",
    rating: "4.9",
    quotes: [
      "Suvo Dev delivered beyond what we imagined. The design is stunning and the site is lightning fast.",
      "Professional, creative and always available. We’ve already started our second project together.",
    ],
  },
};

/* ---------------- FAQ ---------------- */
export const faq = {
  badge: "FAQ",
  title: "Clarity before you start",
  text: "Explore key details about our services, process and approach—so you know exactly what to expect when working with Suvo Dev.",
  button: { label: "Explore FAQ", href: "/faq" },
  items: [
    { q: "Do I need any coding skills to get started?", a: "Not at all. We handle everything technical and hand over an easy-to-use dashboard, so you can update your content without writing a single line of code." },
    { q: "How long does a typical project take?", a: "Most projects take 4–8 weeks depending on scope, content readiness and the number of revision rounds. We share a clear timeline before we start." },
    { q: "Can the design fully match my brand?", a: "Yes. Colors, typography, layouts and components are all tailored to your brand so the final product feels uniquely yours." },
    { q: "Will my website be optimized for SEO and performance?", a: "Absolutely. We build with clean structure, fast load times and SEO-friendly markup from day one." },
    { q: "What support do you provide after launch?", a: "Our post-launch support covers updates, small fixes and guidance so your site stays smooth, secure and up to date." },
  ],
};

/* ---------------- CTA ---------------- */
export const cta = {
  badge: "Let’s talk",
  title: "Ready to build something that grows with your brand?",
  text: "Tell us about your goals—we’ll map out the design, development and marketing path that takes you from vision to measurable results.",
  button: { label: "Contact Us", href: "/contact" },
};

/* ---------------- Footer ---------------- */
export const footer = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/#about" },
        { label: "Team", href: "/#team" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "/#faq" },
        { label: "Process", href: "/#process" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal Policies",
      links: [
        { label: "Terms & Conditions", href: "/terms-conditions" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com", icon: "youtube" },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
    { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
    { label: "Behance", href: "https://www.behance.net", icon: "behance" },
  ],
};

/* ---------------- Inner pages (simple placeholder pages) ---------------- */
export const innerPages = {
  about: { title: "About Suvo Dev", text: "We are a small, focused team of designers, developers and strategists helping brands grow online." },
  blog: { title: "Insights & ideas", text: "Articles on design, development and growth from the Suvo Dev team. New posts are coming soon." },
  projects: { title: "Our projects", text: "A closer look at the products, platforms and brands we’ve helped launch and scale." },
  team: { title: "Meet the team", text: "The designers, developers and strategists behind every Suvo Dev project." },
  testimonials: { title: "Client stories", text: "Real feedback from the founders and teams we’ve partnered with." },
  faq: { title: "Frequently asked questions", text: "Everything you need to know before starting a project with us." },
  pricing: { title: "Plans & packages", text: "Flexible engagement models for startups, growing teams and enterprises. Contact us for a custom quote." },
  features: { title: "What we deliver", text: "Design systems, fast websites, scalable apps and growth campaigns—everything under one roof." },
  integration: { title: "Tools & tech partners", text: "We work with the modern stack: Next.js, React, Figma, Shopify, Webflow, Stripe and more." },
  security: { title: "Secure project delivery", text: "Best-practice security, private repositories and protected client data on every project." },
  "privacy-policy": { title: "Privacy Policy", text: "We only collect the information needed to deliver our services and never sell your data." },
  "terms-conditions": { title: "Terms & Conditions", text: "The terms that guide every engagement between Suvo Dev and our clients." },
  login: { title: "Welcome back", text: "Client portal access is coming soon. Meanwhile, reach us anytime by email." },
  signup: { title: "Create your account", text: "Client portal sign-ups are coming soon. Contact us to get started on your project today." },
};
