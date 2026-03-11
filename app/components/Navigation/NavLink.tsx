
"use client";

import { ReactNode } from "react";
import { useState } from "react";

export default function NavLink({ href, text, icon, selected }: { href: string; text: string; icon: ReactNode; selected: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex flex-col ">
        <a className="flex items-center justify-center gap-1 text-white hover:text-secondary-blue transition-colors" href={href}>
            <div className={`text-primary-blue ${!selected ? "text-primary-blue" : "text-white"} ${isHovered ? "text-secondary-blue" : ""} transition-colors`}>
                {icon}
            </div>
        <span className={`${!selected ? "text-primary-blue" : "text-white"} ${isHovered ? "text-secondary-blue" : ""} transition-colors`}>{text}</span>
        </a>
        {selected && <div className="rounded-full h-1 w-full bg-white"></div>}
    </div>
  );
}