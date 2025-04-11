import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubIcons } from "./icons/GitHubIcons";
import Link from "next/link";
import { FbIcon } from "./icons/FbIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";
import { Card } from "@/components/ui/card";

export const Menu = () => {
  return (
    <header className="py-4 bg-transparent fixed bottom-0 right-[45%]">
      <Section ClassName="flex items-baseline ">
        <Card className="p-5 ">
          <ul className="flex items-center gap-2 justify-around">
            <Link
              href="https://github.com/mahf-TB"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <GitHubIcons
                size={100}
                className="text-white hover:text-green4 transition-colors"
              ></GitHubIcons>
              Github
            </Link>
            <Link
              href="https://web.facebook.com/mahefa.bienvenu.1/ "
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <FbIcon
                size={100}
                className="text-white hover:text-green4 transition-colors"
              ></FbIcon>
              Facebook
            </Link>
            <Link
              href="https://www.linkedin.com/in/mahefa-bienvenu-575188287/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <LinkedinIcon
                size={100}
                className="text-white hover:text-green4 transition-colors"
              ></LinkedinIcon>{" "}
              LinkedIn
            </Link>
            <Link
              href="mailto:mahefatsilavirintsoa@gmail.com"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <MailIcon
                size={100}
                className="text-white hover:text-green4 transition-colors"
              ></MailIcon>
              Mail
            </Link>
          </ul>
        </Card>
      </Section>
    </header>
  );
};
