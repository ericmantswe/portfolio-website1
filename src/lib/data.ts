import type { Icon } from 'lucide-react';
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap, Award, User, PencilRuler } from 'lucide-react';

export const PROFILE_DATA = {
  name: "Jensen Omega",
  title: "Software Developer",
  about: "I am a design-minded software developer focused on building beautiful interfaces and experiences on the web, working with brands and industry leaders.",
  cvUrl: "/jensen-omega-cv.pdf",
};

export const SOCIAL_LINKS: { name: string; url: string; icon: Icon }[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com", icon: Linkedin },
  { name: "GitHub", url: "https://github.com", icon: Github },
  { name: "Email", url: "mailto:jensen.omega@example.com", icon: Mail },
];

export const SKILLS: Record<string, string[]> = {
  "Languages & Frontend": ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  "Backend & Databases": ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Firebase"],
  "Tools & Platforms": ["Docker", "Git & GitHub", "Vercel", "AWS", "CI/CD"],
};

export const WORK_EXPERIENCE = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Software Engineer",
    period: "Jun 2020 - Present",
    description: [
      "Led the development of a high-traffic e-commerce platform, improving performance by 30% and conversion rates by 15%.",
      "Architected and implemented a new microservices-based backend using Node.js and Docker, enhancing scalability and maintainability.",
      "Mentored a team of 4 junior developers, fostering their growth through code reviews and pair programming sessions.",
    ],
  },
  {
    company: "Web Innovators",
    role: "Software Engineer",
    period: "Jul 2018 - May 2020",
    description: [
      "Developed and maintained client-facing features for a SaaS application using React and Node.js.",
      "Collaborated with designers and product managers to translate wireframes into high-quality, responsive user interfaces.",
      "Wrote comprehensive unit and integration tests, increasing code coverage to over 90%.",
    ],
  },
];

export const EDUCATION = [
  {
    institution: "University of Technology",
    degree: "M.S. in Computer Science",
    period: "2016 - 2018",
  },
  {
    institution: "State University",
    degree: "B.S. in Software Engineering",
    period: "2012 - 2016",
  },
];

export const PROJECTS = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce website with a modern design, payment integration, and an admin dashboard.",
    imageUrl: "https://picsum.photos/seed/1/600/400",
    imageHint: "online store",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and user authentication.",
    imageUrl: "https://picsum.photos/seed/2/600/400",
    imageHint: "to-do list",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    id: "project-3",
    title: "Data Visualization Dashboard",
    description: "A dynamic dashboard for visualizing complex datasets, featuring interactive charts and filtering options.",
    imageUrl: "https://picsum.photos/seed/3/600/400",
    imageHint: "analytics charts",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "D3.js", "Node.js"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Hackathon Winner - 1st Place",
    description: "Won the 2021 Global Tech Hackathon for developing an innovative accessibility tool for web applications.",
    icon: Award,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Demonstrated foundational knowledge of AWS cloud services and infrastructure.",
    icon: Award,
  },
  {
    title: "Published Technical Writer",
    description: "Authored several articles on modern web development for a popular online tech publication.",
    icon: Award,
  },
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const SECTION_MAP: Record<string, { id: string; icon: Icon; title: string }> = {
  about: { id: 'about', icon: User, title: 'About Me' },
  experience: { id: 'experience', icon: Briefcase, title: 'Work Experience' },
  projects: { id: 'projects', icon: Code, title: 'Projects' },
  skills: { id: 'skills', icon: PencilRuler, title: 'Skills' },
  education: { id: 'education', icon: GraduationCap, title: 'Education' },
  achievements: { id: 'achievements', icon: Award, title: 'Achievements' },
  contact: { id: 'contact', icon: Mail, title: 'Get in Touch' },
};
