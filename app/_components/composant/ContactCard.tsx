import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type ContactProps = {
  image: string;
  mediumImg: string;
  name: string;
  description: string;
};

export const ContactCard = (props: ContactProps) => {
  return (
    <Card className="p-3 bg-accent/50 flex items-center gap-4 hover:text-green4 transition-colors  rounded-sm">
      <span className="relative rounded-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.image}
          alt={props.name}
          className="min-w-12 h-12 rounded-full max-md:object-contain object-cover"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.mediumImg}
          alt=""
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
