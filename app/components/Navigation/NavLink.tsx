import { ReactNode } from "react";

export default function NavLink({ href, text, icon }: { href: string; text: string; icon: ReactNode }) {
  return (
    <a className="flex items-center justify-center gap-1 text-white" href={href}>
      {icon}
      <span className="text-primary-blue">{text}</span>
    </a>
  );
}