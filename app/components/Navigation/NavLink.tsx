
"use client";

import { ReactNode } from "react";
import { useState } from "react";

export default function NavLink({ href, text, icon }: { href: string; text: string; icon: ReactNode; }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex flex-col ">
        <a className="flex items-center justify-center gap-1 text-white hover:text-white transition-colors" href={href}>
            <div className={`${isHovered ? "text-white" : "text-primary-blue"} transition-colors `}>
                {icon}
            </div>
        <span className={`${isHovered ? "text-white" : "text-primary-blue"} transition-colors`}>{text}</span>
        </a>
    </div>
  );
}