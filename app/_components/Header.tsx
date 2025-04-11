import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubIcons } from "./icons/GitHubIcons";
import Link from "next/link";
import { FbIcon } from "./icons/FbIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";
import LogoBien from "./Logo/LogoBien";

export const Header = () => {
  return (
    <header className="z-50 sticky top-0 py-3  bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Section ClassName="flex items-center ">
        <h1 className="text-lg font-JetBrains text-white">
            <LogoBien />
        </h1>
        <div className="flex-1"> </div>
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/mahf-TB"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GitHubIcons
              size={16}
              className="text-white hover:text-green4 transition-colors"
            ></GitHubIcons>
          </Link>
          <Link
            href="https://web.facebook.com/mahefa.bienvenu.1/ "
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <FbIcon
              size={16}
              className="text-white hover:text-green4 transition-colors"
            ></FbIcon>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mahefa-bienvenu-575188287/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon
              size={16}
              className="text-white hover:text-green4 transition-colors"
            ></LinkedinIcon>
          </Link>
          <Link
            href="mailto:mahefatsilavirintsoa@gmail.com"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <MailIcon
              size={16}
              className="text-white hover:text-green4 transition-colors"
            ></MailIcon>
          </Link>
        </ul>
      </Section>
    </header>
  );
};
