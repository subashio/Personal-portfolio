import { socials } from "@/constants/details";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full pt-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="flex cursor-pointer items-center justify-center gap-2">
          <Mail className="h-6 w-6 text-sky-500" /> subashotherp11@gmail.com{" "}
        </p>
        <p className="flex cursor-pointer items-center justify-center gap-2">
          <Phone className="stroke-sk h-5 w-5 text-sky-500" fill="#38bdf8" />
          +91 9344497929
        </p>
      </div>

      <nav className="flex justify-center gap-6 py-10">
        {socials.map((item) => (
          <Link key={item.id} href={item.href}>
            <img src={item.logo} alt="logos" className="h-6 w-6 text-white" />
          </Link>
        ))}
      </nav>
    </footer>
  );
}
