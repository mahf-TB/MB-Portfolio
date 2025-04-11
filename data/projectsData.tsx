import { LaravelLogo } from "@/app/_components/icons/LaravelLogo";
import { ReactLogo } from "@/app/_components/icons/ReactLogo";
import {
  Code,
  HomeIcon,
  PercentSquareIcon,
  SignpostIcon,
  StickerIcon,
} from "lucide-react";

interface StackItem {
  Icon: React.ComponentType<{ size?: number }>;
  title: string;
}

interface Project {
  title: string;
  imageLogo?: string;
  Logo: React.ComponentType<{ className?: string }>;
  poste: string;
  description: string;
  url: string;
  stack?: StackItem[];
}

export const SIDE_PROJECTES: Project[] = [
  {
    title: "O_GECA",
    imageLogo: "/images/srspm.jpg",
    Logo: PercentSquareIcon,
    poste: "Fullstack Developer - Internship",
    description:
      "Developed a web application to optimize career progression management, allowing employees to easily track their grade advancements.",
    url: "https://github.com/mahf-TB/VueLaravel-O-GECA",
    stack: [
      {
        Icon: LaravelLogo,
        title: "Laravel 10",
      },
      {
        Icon: LaravelLogo,
        title: "Vue.js",
      },
      {
        Icon: LaravelLogo,
        title: "Oracle Database",
      },
    ],
  },
  {
    title: "Lodge University Residency",
    imageLogo: "/images/LC.png",
    Logo: HomeIcon,
    poste: "Backend Developer - IHM Project",
    description:
      "Built a university residence management system to handle student data and room allocations.",
    url: "https://github.com/mahf-TB/webApp-Cite-universitaire",
    stack: [
      {
        Icon: LaravelLogo,
        title: "Laravel 10",
      },
      {
        Icon: LaravelLogo,
        title: "Vue.js",
      },
      {
        Icon: LaravelLogo,
        title: "MySQL",
      },
      {
        Icon: LaravelLogo,
        title: "PHP",
      },
      {
        Icon: LaravelLogo,
        title: "Visual Paradigm",
      },
    ],
  },
  {
    title: "MSI OnirTech",
    imageLogo: "/images/iconLogo.png",
    Logo: Code,
    poste: "Fullstack Developer - Internship",
    description:
      "Developed an e-learning platform with authentication, dashboards, and course management using a modern stack.",
    url: "https://github.com/mahf-TB/NodeJS-Vue-Projet-Vente",
    stack: [
      {
        Icon: LaravelLogo,
        title: "React",
      },
      {
        Icon: LaravelLogo,
        title: "Next.js",
      },
      {
        Icon: LaravelLogo,
        title: "Node.js",
      },
      {
        Icon: LaravelLogo,
        title: "MongoDB",
      },
      {
        Icon: LaravelLogo,
        title: "Zustand",
      },
      {
        Icon: LaravelLogo,
        title: "Trello",
      },
    ],
  },
  {
    title: "FlyMoney Mobile",
    imageLogo: "/images/flymoney.png",
    Logo: StickerIcon,
    poste: "Fullstack Developer - Personal Project",
    description:
      "Designed and developed a mobile application for managing personal finances, including income/expense tracking, dashboard visualization, and push notifications.",
    url: "https://github.com/mahf-TB", // remplace par l'URL spécifique si dispo
    stack: [
      {
        Icon: LaravelLogo,
        title: "NestJS",
      },
      {
        Icon: LaravelLogo,
        title: "TypeScript",
      },
      {
        Icon: LaravelLogo,
        title: "React Native",
      },
      {
        Icon: LaravelLogo,
        title: "Mobile Development",
      },
    ],
  },
  {
    title: "Fly Money web admin",
    imageLogo: "/images/flymoney.png",
    Logo: StickerIcon,
    poste: "Fullstack Developer - Java Project",
    description:
      "Created a pension management system for retirees, including data security and CRUD operations.",
    url: "https://github.com/mahf-TB?tab=repositories",
    stack: [
      {
        Icon: LaravelLogo,
        title: "Java",
      },
      {
        Icon: LaravelLogo,
        title: "NetBeans",
      },
      {
        Icon: LaravelLogo,
        title: "PostgreSQL",
      },
    ],
  },
  {
    title: "Miavana Website",
    imageLogo: "",
    Logo: SignpostIcon,
    poste: "Frontend Developer - Static Website",
    description:
      "Designed and built a hotel booking landing page using modern frontend standards.",
    url: "https://github.com/mahf-TB/Siteweb-statique",
    stack: [
      {
        Icon: LaravelLogo,
        title: "HTML5",
      },
      {
        Icon: LaravelLogo,
        title: "CSS3",
      },
      {
        Icon: LaravelLogo,
        title: "JavaScript",
      },
    ],
  },
];
