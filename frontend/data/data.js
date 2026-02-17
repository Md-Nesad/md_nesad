import bravery from "@/public/clientPicture/bravery.png";
import edges from "@/public/clientPicture/edges.png";
import sesame from "@/public/clientPicture/sesame.png";
import earrins from "@/public/clientPicture/earrins.png";
import ledger from "@/public/clientPicture/ledger.png";
import california from "@/public/clientPicture/califarnia.png";
import teplo from "@/public/clientPicture/teplo.png";
import harry from "@/public/clientPicture/harry.png";
import alexander from "@/public/persons/Alexander Carter.jpg";
import sophia from "@/public/persons/Sophia Martinez.jpg";
import benjamin from "@/public/persons/Benjamin Thomps.jpg";
import nathan from "@/public/persons/Nathan Roberts.jpg";
import samuel from "@/public/persons/Samuel Lewis.jpg";
import olivia from "@/public/persons/Olivia Scott.jpg";
import daniel from "@/public/persons/Daniel Harris.jpg";
import isabella from "@/public/persons/Isabella Clark.jpg";

export const clients = [
  {
    id: 1,
    logo: bravery,
    name: "Alexander Carter",
    role: "Product Manager",
    avatar: alexander,
  },
  {
    id: 2,
    logo: edges,
    name: "Sophia Martinez",
    role: "Marketing Director",
    avatar: sophia,
  },
  {
    id: 3,
    logo: sesame,
    name: "Benjamin Thomps",
    role: "Ceo & Funder",
    avatar: benjamin,
  },
  {
    id: 4,
    logo: earrins,
    name: "Nathan Roberts",
    role: "Creative Director",
    avatar: nathan,
  },
  {
    id: 5,
    logo: ledger,
    name: "Samuel Lewis",
    role: "Software Engineer",
    avatar: samuel,
  },
  {
    id: 6,
    logo: california,
    name: "Olivia Scott",
    role: "Product Designer",
    avatar: olivia,
  },
  {
    id: 7,
    logo: teplo,
    name: "Daniel Harris",
    role: "Ceo & Funder",
    avatar: daniel,
  },
  {
    id: 8,
    logo: harry,
    name: "Isabella Clark",
    role: "UX Lead",
    avatar: isabella,
  },
];

export const services = [
  {
    title: "UI/UX Design",
    desc: "We create modern, user-centric interfaces with intuitive flows, wireframes, and interactive prototypes, ensuring seamless experiences across web and mobile platforms.",
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end web solutions combining scalable architecture, secure backend systems, and high-performance frontend experiences for production-ready applications.",
  },
  {
    title: "Web & App Development",
    desc: "Custom websites and mobile apps built with modern technologies, optimized for speed, responsiveness, and real-world business impact.",
  },
  {
    title: "Business & Management Systems",
    desc: "Tailored CRM, ERP, MVP, dashboards, and enterprise management systems designed to automate workflows, streamline operations, and enhance productivity.",
  },
  {
    title: "DevOps & CI/CD",
    desc: "Automated deployment pipelines, cloud infrastructure setup, and continuous integration/delivery for fast, reliable, and seamless product releases.",
  },
  {
    title: "Security & Performance Optimization",
    desc: "Robust security measures, code audits, and performance optimization to ensure your applications remain secure, fast, and scalable under all conditions.",
  },
];

export const skills = {
  frontend: [
    { name: "Figma", level: 90 },
    { name: "Tailwindcss", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Flutter & React Native", level: 90 },
    { name: "State Management(Redux, Zustand)", level: 95 },
  ],
  backend: [
    { name: "Node.js & PHP", level: 90 },
    { name: "Express.js & Laravel", level: 95 },
    { name: "MongoDB, MySQL, PostgreSQL & Redis", level: 90 },
    { name: "RESTful APIs & GraphQL", level: 95 },
    { name: "Docker", level: 80 },
    { name: "CI/CD Pipelines", level: 87 },
    { name: "Socket.io", level: 90 },
    { name: "WebRTC", level: 85 },
  ],
};

export const experienceData = {
  education: [
    {
      title: "Frontend Developer",
      company: "Frontend Solutions",
      location: "Remote",
      desc: "Developed responsive and high-performance UIs using React, Next.js, and Tailwind CSS. Focused on pixel-perfect design and smooth user experience.",
    },

    {
      title: "Course Instructor - Frontend Development",
      company: "Pacific Computer Academy",
      location: "On-site",
      desc: "Taught students modern frontend technologies including HTML, CSS, JavaScript,React and Next.js. Developed practical exercises, projects, and assessments to help learners gain hands-on experience.",
    },
  ],
  jobs: [
    {
      title: "WordPress Developer",
      company: "Freelance / Project Based",
      location: "Remote",
      desc: "Customized WordPress themes and plugins according to client needs. Optimized performance and SEO for better reach and user engagement.",
    },
    {
      title: "Project & Commission Based Work",
      company: "Independent",
      location: "Remote",
      desc: "Delivered multiple freelance projects including portfolios, business websites, and eCommerce apps. Managed client communication, project planning, and delivery.",
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Michael Anderson",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Frontend development at Anexa Soft is exceptional. The team transformed our concepts into a seamless digital experience, delivering a polished product ahead of schedule.",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "CEO, StartupHub",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Working with Anexa Soft was a game-changer for our business. The team is professional, creative, and always delivered beyond expectations.",
  },
  {
    id: 3,
    name: "David Johnson",
    role: "Tech Lead, InnovateX",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Anexa Soft were pixel-perfect, fast, and scalable. Highly recommended for anyone looking to elevate their digital products.",
  },
  {
    id: 4,
    name: "Emily Parker",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Anexa Soft brought our vision to life with outstanding responsive and pixel-perfect design. The attention to detail and delivery speed were unmatched.",
  },
];
