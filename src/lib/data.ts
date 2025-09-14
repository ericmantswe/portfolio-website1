import type { Icon } from 'lucide-react';
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap, Award, User, PencilRuler } from 'lucide-react';

export const PROFILE_DATA = {
  name: "Eric Obakeng Mantswe",
  title: "Web Developer & Tech Innovator",
  about: "Motivated Mechatronics and Industrial Instrumentation student with hands-on experience in web development, industrial automation solutions, and tech entrepreneurship. Skilled in building responsive web applications, managing projects, and delivering practical solutions for business and community needs. Highly adaptable with a strong problem-solving mindset and a passion for technology-driven innovation.",
  cvUrl: "#",
};

export const SOCIAL_LINKS: { name: string; url: string; icon: Icon }[] = [
  { name: "LinkedIn", url: "#", icon: Linkedin },
  { name: "GitHub", url: "#", icon: Github },
  { name: "Email", url: "mailto:ericmantswe3@gmail.com", icon: Mail },
];

export const SKILLS: Record<string, string[]> = {
  "Web Development": ["HTML", "CSS", "JavaScript", "Firebase", "React", "Responsive Design"],
  "Software & Design": ["Microsoft Office Suite", "SolidWorks", "Fusion 360", "Blender"],
  "Programming & Other": ["C", "C++", "Database management", "Project planning", "Problem-solving"],
};

export const WORK_EXPERIENCE = [
  {
    company: "RideLink",
    role: "Founder & Developer",
    period: "2024 - Present",
    description: [
      "Designed and implemented a transportation platform connecting students and residents with trusted taxi drivers.",
      "Integrated live chat, driver ratings, and ride request functionalities using Firebase and JavaScript.",
      "Developed user-friendly interfaces and ensured secure authentication for all users.",
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
];

export const EDUCATION = [
  {
    institution: "Botswana International University of Science and Technology (BIUST)",
    degree: "Mechatronics and Industrial Instrumentation",
    period: "Expected Graduation: 2028",
  },
];

export const PROJECTS = [
  {
    id: "project-1",
    title: "RideLink",
    description: "A transportation platform connecting students and residents with trusted taxi drivers, featuring live chat, driver ratings, and ride requests.",
    imageUrl: "https://picsum.photos/seed/1/600/400",
    imageHint: "ride sharing app",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["JavaScript", "Firebase", "HTML/CSS"],
  },
  {
    id: "project-2",
    title: "Center Base Food Services Website",
    description: "A responsive website to streamline customer orders and business operations for a food service company.",
    imageUrl: "https://picsum.photos/seed/2/600/400",
    imageHint: "restaurant order",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export const ACHIEVEMENTS: { title: string; description: string; icon: Icon }[] = [];


export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const SECTION_MAP: Record<string, { id: string; icon: Icon; title: string }> = {
  about: { id: 'about', icon: User, title: 'About Me' },
  experience: { id: 'experience', icon: Briefcase, title: 'Projects & Experience' },
  projects: { id: 'projects', icon: Code, title: 'Portfolio' },
  skills: { id: 'skills', icon: PencilRuler, title: 'Technical Skills' },
  education: { id: 'education', icon: GraduationCap, title: 'Education' },
  achievements: { id: 'achievements', icon: Award, title: 'Achievements' },
  contact: { id: 'contact', icon: Mail, title: 'Get in Touch' },
};
