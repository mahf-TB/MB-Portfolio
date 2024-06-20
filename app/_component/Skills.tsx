import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { NodeLogo } from "./icons/NodeLogo";

export const Skills = () => {
  return (
    <Section ClassName="flex flex-col items-start gap-4">
      <Badge variant={"outline"} >Skills</Badge>
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        The People of the Kingdom
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div>
          <div className="flex flex-col gap-4">
            <ReactLogo size={43} className="animate-spin" style={{ animationDuration: "10s" }}/>
          </div>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">React Js</h3>
          <p className="text-muted-foreground">
            Plan it, create it, launch it. Collaborate seamlessly with all the
            organization and hit your marketing goals every month with our
            marketing plan.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <TailwindLogo size={43}  style={{ animationDuration: "10s" }}/>
          </div>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">Tailwind css</h3>
          <p className="text-muted-foreground">
            Plan it, create it, launch it. Collaborate seamlessly with all the
            organization and hit your marketing goals every month with our
            marketing plan.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <NodeLogo size={43}  style={{ animationDuration: "10s" }}/>
          </div>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">Node Js</h3>
          <p className="text-muted-foreground">
            Plan it, create it, launch it. Collaborate seamlessly with all the
            organization and hit your marketing goals every month with our
            marketing plan.
          </p>
        </div>
      </div>
    </Section>
  );
};
