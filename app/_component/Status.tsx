import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  ArrowUpRight,
  Code,
  GalleryThumbnails,
  HomeIcon,
  LucideIcon,
  Rss,
  StickerIcon,
} from "lucide-react";
import Link from "next/link";

const SIDE_PROJECTES: sideProjectProps[] = [
  {
    Logo: HomeIcon,
    title: "Mahefa Bienvenu",
    description: "Developpeur FullStack",
    url: "https://github.com/mahf-TB",
  },
  {
    Logo: Code,
    title: "Mahefa Bienvenu",
    description: "Developpeur FullStack",
    url: "https://github.com/mahf-TB",
  },
  {
    Logo: StickerIcon,
    title: "Mahefa Bienvenu",
    description: "Developpeur FullStack",
    url: "https://github.com/mahf-TB",
  },
  {
    Logo: Rss,
    title: "Mahefa Bienvenu",
    description: "Developpeur FullStack",
    url: "https://github.com/mahf-TB",
  },
  {
    Logo: GalleryThumbnails,
    title: "Mahefa Bienvenu",
    description: "Developpeur FullStack",
    url: "https://github.com/mahf-TB",
  },
  {
    Logo: GalleryThumbnails,
    title: "Mahefa Bienvenu",
    description: "Developpeur FullStack",
    url: "https://github.com/mahf-TB",
  },
];

type sideProjectProps = {
  Logo: LucideIcon;
  description: string;
  title: string;
  url: string;
};

const SideProject = (props: sideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 hover:text-green4 group  transition-colors p-1 rounded-sm"
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo className=" group-hover:text-green4" />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorkProps[] = [
  {
    image: "image/srspm.jpg",
    title: "Ministère de l'Economie et des Finances",
    role: "Developpeur FullStack",
    url: "https://github.com/mahf-TB",
    date: "Août 2023 - Fev 2024",
  },
  {
    image: "image/images.png",
    title: "MNDPT | Fianarantsoa",
    role: "Developpeur Frontend",
    url: "https://github.com/mahf-TB",
    date: "Mars - juin 2022 ",
  },
];

type WorkProps = {
  image: string;
  role: string;
  date: string;
  title: string;
  url: string;
};

const WorkProject = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 hover:text-green4 transition-colors p-1 rounded-sm"
    >
      <span className="bg-accent text-accent-foreground rounded-sm">
        <img
          src={props.image}
          alt={props.title}
          className="w-12 h-12 rounded-sm max-md:object-contain object-cover"
        />
      </span>
      <div className="max-md:inline-flex items-center w-full">
        <div>
          <p className="text-sm font-semibold max-md:text-lg">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.role}</p>
        </div>
        <div className="ml-auto">
          <p className="text-sm text-muted-foreground">{props.date}</p>
        </div>
      </div>
    </Link>
  );
};

type ContactProps = {
  image: string;
  mediumImg: string;
  name: string;
  description: string;
};

const ContactCard = (props: ContactProps) => {
  return (
    <Card className="p-3 bg-accent/50 flex items-center gap-4 hover:text-green4 transition-colors  rounded-sm">
      <span className="relative rounded-sm">
        <img
          src={props.image}
          alt={props.name}
          className="min-w-12 h-12 rounded-full max-md:object-contain object-cover"
        />
        <img
          src={props.mediumImg}
          alt={props.name}
          className="w-5 h-5 absolute -bottom-2 right-0 rounded-full max-md:object-contain object-cover"
        />
      </span>
      <div className="max-md:inline-flex items-center w-full">
        <div>
          <p className="text-sm font-semibold max-md:text-lg">{props.name}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </div>
      <div className="ml-auto">
        <ArrowUpRight size={16} />
      </div>
    </Card>
  );
};

export const Status = () => {
  return (
    <>
      <Section ClassName="flex w-full items-start gap-4 max-md:flex-col">
        <Card className=" w-2/3 p-4 flex flex-col max-md:w-full">
          <p className="text-lg text-muted-foreground pb-2">
            Side, fun projects.
          </p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTES.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
        <div className=" w-1/3 flex flex-col h-full max-md:w-full gap-4">
          <Card className="p-4">
            <p className="text-lg text-muted-foreground pb-2">
              Expérience Professionelle
            </p>
            <div className="flex flex-col gap-4">
              {WORKS.map((project, index) => (
                <WorkProject
                  key={index}
                  image={project.image}
                  title={project.title}
                  role={project.role}
                  url={project.url}
                  date={project.date}
                />
              ))}
            </div>
          </Card>
          <Card className="p-4">
            <p className="text-lg text-muted-foreground pb-2">Contact me</p>
            <div className="h-5" />
            <ContactCard
              mediumImg="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
              image="image/mahefa.jpg"
              name="Mahefa and Nasah"
              description="Couple goal 2024"
            />
            <div className="h-5" />
            <ContactCard
              mediumImg="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
              image="image/mahefa.jpg"
              name="Tsilavirintsoa"
              description="Sur intagram"
            />
          </Card>
        </div>
      </Section>
    </>
  );
};
