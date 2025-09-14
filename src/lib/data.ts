import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  User,
  PencilRuler,
  Star,
  Trophy,
} from "lucide-react";

export const PROFILE_DATA = {
  name: "Eric Obakeng Mantswe",
  title: "Web Developer & Tech Innovator",
  about:
    "Motivated Mechatronics and Industrial Instrumentation student with hands-on experience in web development, industrial automation solutions, and tech entrepreneurship. Skilled in building responsive web applications, managing projects, and delivering practical solutions for business and community needs. Highly adaptable with a strong problem-solving mindset and a passion for technology-driven innovation.",
  cvUrl: "#",
};

// SOCIAL LINKS
export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/eric-mantswe-859b39364/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/ericmantswe", icon: Github },
  { name: "Email", url: "mailto:ericmantswe3@gmail.com", icon: Mail },
];

export const SKILLS: Record<string, string[]> = {
  "Web Development": ["HTML", "CSS", "JavaScript", "Firebase", "React", "Responsive Design", "TypeScript"],
  "Software & Design": ["Microsoft Office Suite", "SolidWorks", "Fusion 360", "Blender"],
  "Programming & Other": ["C", "C++", "Database management", "Project planning", "Problem-solving"],
  Languages: ["English (Fluent)", "Setswana (Fluent)", "Chinese (Beginner)"],
};

export const WORK_EXPERIENCE = [
  {
    company: "RideLink (Version 1 & 2)",
    role: "Founder & Developer",
    period: "2024 - Present",
    description: [
      "Version 1: Built using HTML, CSS, JavaScript, and Firebase.",
      "Version 2: Upgraded to TypeScript and React for improved scalability and performance.",
      "Designed and implemented a transportation platform connecting students and residents with trusted taxi drivers.",
      "Integrated live chat, driver ratings, and ride request functionalities with secure authentication.",
    ],
  },
  {
    company: "Center Base Food Services",
    role: "Web Developer",
    period: "2023 - Present",
    description: [
      "Developed a website for Center Base Food Services to streamline customer orders and business operations.",
      "Implemented responsive design and interactive features to enhance user experience.",
    ],
  },
  {
    company: "Xaloo Technologies",
    role: "Web Developer",
    period: "2023 - Present",
    description: [
      "Version 1: Designed and implemented the company website using HTML, CSS, and JavaScript.",
      "Version 2: Rebuilt the website using TypeScript and React to improve performance, scalability, and maintainability.",
      "Focused on responsive design, a clean layout, and enhanced user experience.",
    ],
  },
];

export const EDUCATION = [
  {
    institution: "Botswana International University of Science and Technology (BIUST)",
    degree: "Mechatronics and Industrial Instrumentation",
    period: "Expected Graduation: 2028",
  },
];

type ProjectVersion = {
  name: string;
  liveUrl: string;
  repoUrl: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  versions?: ProjectVersion[];
};

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "RideLink",
    description:
      "This project has two versions. Version 1 was built with HTML, CSS, and JavaScript. Version 2 was upgraded to use Firebase, React, and TypeScript.",
    imageUrl: "https://i.postimg.cc/JzPvSTX2/RideLink.png",
    imageHint: "ride sharing app",
    tags: ["JavaScript", "Firebase", "HTML/CSS", "React", "TypeScript"],
    versions: [
      {
        name: "Version 1",
        liveUrl: "https://ericmantswe.github.io/Ride-Link/index.html",
        repoUrl: "https://github.com/ericmantswe",
      },
      { name: "Version 2", liveUrl: "#", repoUrl: "https://github.com/ericmantswe" },
    ],
  },
  {
    id: "project-2",
    title: "Center Base Food Services Website",
    description: "A responsive website to streamline customer orders and business operations for a food service company.",
    imageUrl: "https://i.postimg.cc/pXysp25q/Centerbase.png",
    imageHint: "restaurant order",
    liveUrl: "https://studio--centerbase-food-services.us-central1.hosted.app/",
    repoUrl: "https://github.com/ericmantswe",
    tags: ["JavaScript", "Firebase", "HTML/CSS", "React", "TypeScript"],
  },
  {
    id: "project-3",
    title: "Xaloo Technologies Website",
    description:
      "Company website with two versions. V1 was built with HTML, CSS, and Javascript. V2 was upgraded to React and TypeScript for better performance.",
    imageUrl: "https://i.postimg.cc/dVNvGQ53/Xaloo.png",
    imageHint: "tech company",
    tags: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    versions: [
      {
        name: "Version 1",
        liveUrl: "https://ericmantswe.github.io/Xaloo-tech/index.html",
        repoUrl: "https://github.com/ericmantswe",
      },
      { name: "Version 2", liveUrl: "https://xaloo-firebase.vercel.app/", repoUrl: "https://github.com/ericmantswe" },
    ],
  },
];

export const ACHIEVEMENTS: { title: string; description: string; icon: LucideIcon }[] = [];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const SECTION_MAP: Record<string, { id: string; icon: LucideIcon; title: string }> = {
  about: { id: "about", icon: User, title: "About Me" },
  experience: { id: "experience", icon: Briefcase, title: "Projects & Experience" },
  projects: { id: "projects", icon: Code, title: "Portfolio" },
  skills: { id: "skills", icon: PencilRuler, title: "Technical Skills" },
  education: { id: "education", icon: GraduationCap, title: "Education" },
  achievements: { id: "achievements", icon: Award, title: "Achievements" },
  contact: { id: "contact", icon: Mail, title: "Get in Touch" },
};
