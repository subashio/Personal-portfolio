import AboutGrid from "@/components/AboutGrid";
import ContactGrid from "@/components/ContactGrid";
import ServicesGrid from "@/components/ServicesGrid";
import Stacks from "@/components/Stacks";
import {
  Flag,
  GraduationCap,
  Languages,
  Layers3,
  LayoutGrid,
  MapPin,
} from "lucide-react";

export const logoListItem = [
  {
    name: "India",
    logo: <MapPin className="h-4 w-4 stroke-sky-500 text-sky-500" />,
  },
  {
    name: "English & Tamil",
    logo: <Languages className="text-p h-4 w-4 stroke-sky-500 text-sky-500" />,
  },
  {
    name: "FullStack Web Developer",
    logo: <Flag className="text-p h-4 w-4 stroke-sky-500 text-sky-500" />,
  },
  {
    name: "Recent Graduate",
    logo: (
      <GraduationCap className="text-p h-4 w-4 stroke-sky-500 text-sky-500" />
    ),
  },
];

export const GridITems: GridItem[] = [
  {
    customGrid: (
      <AboutGrid
        title="Subash M"
        description="I’m a Fullstack "
        spanText="Web Developer"
      />
    ),
    className: "md:col-span-2  md:row-span-1 md:col-start-1   md:row-start-1 ",
  },
  {
    customGrid: (
      <Stacks
        title="My Stacks"
        description="Tech Arsenal"
        icon=<Layers3 className="h-6 w-6 rounded-full stroke-sky-500 text-sky-500" />
      />
    ),
    className: " md:col-span-2  md:row-start-1  ",
  },
  {
    customGrid: (
      <ContactGrid
        title="Let's Work Together"
        description="Turn Visions into Reality"
      />
    ),
    className: "md:col-span-1  md:row-start-2",
    icon: (
      <Layers3 className="h-8 w-8 rounded-full stroke-sky-500 text-sky-500" />
    ),
  },
  {
    customGrid: (
      <ServicesGrid
        title="Services"
        description="Solutions Suite"
        icon={<LayoutGrid className="h-6 w-6 text-sky-500" />}
      />
    ),
    className: "md:col-span-3 md:row-span-1  row-start-3 ",
  },
];
