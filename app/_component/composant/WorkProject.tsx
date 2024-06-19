import Image from "next/image";
import Link from "next/link";

type WorkProps = {
  image: string;
  role: string;
  date: string;
  title: string;
  url: string;
};

export const WorkProject = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 hover:text-green4 transition-colors p-1 rounded-sm"
    >
      <span className="bg-accent text-accent-foreground rounded-sm">
        <Image
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
