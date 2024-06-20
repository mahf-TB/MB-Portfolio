import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SideProject } from "./composant/SideProject";
import { WorkProject } from "./composant/WorkProject";
import { ContactCard } from "./composant/ContactCard";
import {
  Code,
  GalleryThumbnails,
  HomeIcon,
  PercentSquareIcon,
  Rss,
  SignpostIcon,
  StickerIcon,
} from "lucide-react";

const SIDE_PROJECTES = [
  {
    Logo: PercentSquareIcon,
    title: "DÉVELOPPEUR FULLSTACK, STAGE",
    description: "Développement d’une application d’optimisation de la gestion de l’évolution de carrière des agents en leur permettant de suivre leur changement de grade.",
    url: "https://github.com/mahf-TB/VueLaravel-O-GECA",
  },
  {
    Logo: HomeIcon,
    title: "DÉVELOPPEUR BACKEND - PROJET IHM",
    description: "Réalisation d’une application de gestion de résidence universitaire. Stacks : Laravel 10, PHP, VueJs, MySql, Visual paradigm",
    url: "https://github.com/mahf-TB/webApp-Cite-universitaire",
  },
  {
    Logo: Code,
    title: "DÉVELOPPEUR FULLSTACK - PROJET NODEJS",
    description: "Réalisation d’application permettant la facilitation la proposition de prêts bancaires. Stacks : NodeJs, VueJs, APIs, ExpressJs, MongoDB",
    url: "https://github.com/mahf-TB/NodeJS-Vue-Projet-Vente",
  },
  {
    Logo: StickerIcon,
    title: "DÉVELOPPEUR FULLSTACK - PROJET JAVA",
    description: "Réalisation d’application de gestion des pensions des retraités. Stacks : Java, Netbeans, PostgreSQL",
    url: "https://github.com/mahf-TB?tab=repositories",
  },
  {
    Logo: SignpostIcon,
    title: "DÉVELOPPEMENT D'UN SITE WEB",
    description: "Création d’un site web statique pour la réservation de chambre d’hôtel avec HTML, CSS et Javascript",
    url: "https://github.com/mahf-TB/Siteweb-statique",
  },
];

const WORKS = [
  {
    image: "/image/srspm.jpg",
    title: "Ministère de l'Economie et des Finances",
    role: "Developpeur FullStack",
    url: "https://github.com/mahf-TB",
    date: "Août 2023 - Fev 2024",
  },
  {
    image: "/image/images.png",
    title: "MNDPT | Fianarantsoa",
    role: "Developpeur Frontend",
    url: "https://github.com/mahf-TB",
    date: "Mars - juin 2022 ",
  },
];

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
            <ContactCard
              mediumImg="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
              image="/image/mahefa.JPG"
              name="Mahefa Bienvenu"
              description="+261 33 17 189 39"
            />
            <div className="h-5" />
            <ContactCard
              mediumImg="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
              image="/image/mahefa.JPG"
              name="@mahefa.bien"
              description="Sur intagram"
            />
          </Card>
        </div>
      </Section>
    </>
  );
};
