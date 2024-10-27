import { StaticImport } from "next/dist/shared/lib/get-img-props";

export declare global {
  type TCard = {
    id: number;
    name: string;
    description: string;
    logo: string | undefined;
  };
  type TAbout = {
    title: string;
    description: string;
    className: string;
    icon: React.JSX.Element;
  };
  type TItem = {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleStyle?: string;
    icon?: React.ReactNode;
    customGrid?: React.ReactNode;
    spanText?: string;
  };
  interface TStacks {
    id: string | number;
    name: string;
    stackLogo: string | undefined;
    className?: string;
  }
  interface ContactMessage {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
}
