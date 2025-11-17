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
    description: "Progressive career growth from intern to mid-level software engineer, focusing on backend development, system architecture, and team collaboration.",
    highlights: [
      "Implemented Role-Based Access Control (RBAC) with fine-grained user permissions and dynamic role assignments for secure system operations",
      "Integrated multiple payment gateways including Stripe, Mercado Pago for one-time and recurring payments with webhook handling and secure transaction flow",
      "Built real-time messaging and live community interactions using WebSockets and Redis Pub/Sub",
      "Developed adaptive rate-limiting middleware using Redis to control request frequency based on user roles and endpoints",
      "Integrated Twilio Verify API for OTP-based user authentication and secure phone number verification",
      "Optimized database queries and scaled API endpoints to improve performance and reduce server costs",
      "Designed and implemented RESTful APIs with proper error handling, validation, and documentation",
      "Architected database schemas and managed migrations for complex data models with MySQL",
      "Implemented caching strategies using Redis to reduce database load and improve response times",
      "Collaborated with frontend teams to define API contracts and ensure seamless integration",
      "Conducted code reviews and mentored junior developers on best practices and design patterns"
    ]
  },
  {
    id: 2,
    title: "Competitive Programming Trainer & Mentor",
    company: "IIUC Competitive Programming Society",
    location: "Chittagong, Bangladesh",
    duration: "Dec 2021 – Feb 2024",
    description: "Trained and mentored students in competitive programming and algorithmic problem-solving.",
    highlights: [
      "Trained and mentored students in competitive programming and algorithmic problem-solving",
      "Organized programming contests and workshops to build problem-solving skills"
    ]
  },
  {
    id: 3,
    title: "Teaching Assistant",
    company: "International Islamic University Chittagong",
    location: "Chittagong, Bangladesh",
    duration: "Aug 2022 – Jan 2024",
    description: "Assisted in teaching computer science courses and supporting student learning.",
    highlights: [
      "Assisted in teaching computer science courses and evaluating student assignments",
      "Provided guidance to students on programming concepts and project development"
    ]
  }
];
