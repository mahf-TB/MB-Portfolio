import { cn } from "@/lib/utils";
import { Section } from "./Section"
import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubIcons } from "./icons/GitHubIcons";
import Link from "next/link";
import { FbIcon } from "./icons/FbIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";



export const Header = () => {
    return (
        <header className="sticky top-0 py-4 bg-background">
            <Section ClassName="flex items-baseline ">
                <h1 className="text-lg  font-maven text-white">
                    Mahefa Bienvenu<span className="text-green4">▪︎</span>
                </h1>
                <div className="flex-1"> </div>
                    <ul className="flex items-center gap-2">
                        <Link 
                        href="https://github.com/mahf-TB"
                        className={cn(buttonVariants({variant:"outline"} ), "size-6 p-0")} >
                            <GitHubIcons size={16} className="text-white hover:text-green4 transition-colors">
                            </GitHubIcons>
                        </Link>
                        <Link 
                        href="https://www.linkedin.com/in/mahefa-bienvenu-575188287/"
                        className={cn(buttonVariants({variant:"outline"} ), "size-6 p-0")} >
                            <FbIcon size={16} className="text-white hover:text-green4 transition-colors">
                            </FbIcon>
                        </Link>
                        <Link 
                        href="https://web.facebook.com/mahefa.bienvenu.1/"
                        className={cn(buttonVariants({variant:"outline"} ), "size-6 p-0")} >
                            <LinkedinIcon size={16} className="text-white hover:text-green4 transition-colors">
                            </LinkedinIcon>
                        </Link>
                        <Link 
                        href="https://web.facebook.com/mahefa.bienvenu.1/"
                        className={cn(buttonVariants({variant:"outline"} ), "size-6 p-0")} >
                            <MailIcon size={16} className="text-white hover:text-green4 transition-colors">
                            </MailIcon>
                        </Link>
                    </ul>
               
            </Section>
        </header>
    )
}