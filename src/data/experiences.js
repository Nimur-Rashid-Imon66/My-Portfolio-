/**
 * Professional experience data
 * @type {Array<{id: number, title: string, company: string, location: string, duration: string, description: string, highlights: Array<string>}>}
 */
export const experiences = [
  {
    id: 1,
    title: "Software Engineer (Intern → Jr. SWE → Mid SWE)",
    company: "AppifyLab",
    location: "Sylhet, Bangladesh",
    duration: "Feb 2024 – Present",
    description:
    "Grew from intern to mid-level engineer, focusing on backend development, system design, and team collaboration.",
    highlights: [
      "Designed RESTful APIs with proper validation, error handling, and consistent standards",
      "Optimized database performance by improving queries, designing efficient schemas with MySQL migrations, and implementing Redis caching",
      "Worked on many core platform features, including implementing RBAC with dynamic permissions, integrating Mercado Pago, fixing major issues across modules like courses, community, memberships, chat systems, media libraries, automations, email tools, and multiple payment gateways (Stripe, PayPal, etc.); also added real-time community updates with WebSockets and Redis Pub/Sub, implemented OTP authentication with Twilio, and built adaptive rate-limiting middleware", 
      "Reviewed code and mentored junior developers to maintain best practices",

    ],
  },
  {
    id: 2,
    title: "Competitive Programming Trainer & Mentor",
    company: "IIUC Competitive Programming Society",
    location: "Chittagong, Bangladesh",
    duration: "Dec 2021 – Feb 2024",
    description:
      "Trained students in competitive programming and problem-solving.",
    highlights: [
      "Mentored students in algorithms and contest problem-solving",
      "Organized programming contests and workshops",
    ],
  },
  {
    id: 3,
    title: "Teaching Assistant",
    company: "International Islamic University Chittagong",
    location: "Chittagong, Bangladesh",
    duration: "Aug 2022 – Jan 2024",
    description:
      "Supported teaching and student learning in computer science courses.",
    highlights: [
      "Assisted in teaching and evaluating assignments",
      "Guided students on programming concepts and projects",
    ],
  },
];
