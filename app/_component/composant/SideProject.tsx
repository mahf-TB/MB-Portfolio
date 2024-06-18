import Link from "next/link";
import { LucideIcon } from "lucide-react";

type sideProjectProps = {
  Logo: LucideIcon;
  description: string;
  title: string;
  url: string;
};

export const SideProject = (props: sideProjectProps) => {
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
