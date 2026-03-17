'use client';
import { PiWrenchFill, PiUserRectangleFill, PiStarFill, PiClipboardFill, PiList, PiListFill } from "react-icons/pi";
import NavLink from "./NavLink";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();
  const iconSize = 20;
  const dynamicHref = (href: string) => {
    if (pathName === "/") {
      return href;
    }
    return `/${href}`;
  };
  const navLinks = [
    { href: "#services", text: "Services", icon: <PiWrenchFill size={iconSize}  /> },
    { href: "#about", text: "About", icon: <PiUserRectangleFill size={iconSize} /> },
    { href: "#reviews", text: "Reviews", icon: <PiStarFill size={iconSize} /> },
    { href: "#contact", text: "Contact", icon: <PiClipboardFill size={iconSize} /> },
  ];

  return (
    <nav className="py-2 px-6 flex flex-row justify-between items-center bg-light-blue sticky md:fixed top-0 left-0 right-0 z-50">
      <div>
        <a className="flex flex-row items-center gap-2" href="/">
          <Image src="/logo.png" alt="Stickles Electric" width={40} height={40}/>
          <h1 className="hover:text-primary-blue text-xl hidden md:block font-semibold text-white">Stickles Electric</h1>
        </a>
      </div>
      <div className="flex-row gap-4 text-primary-blue hidden md:flex">
        {navLinks.map((link) => <NavLink key={link.href} href={dynamicHref(link.href)} text={link.text} icon={link.icon} />)}
      </div>
      <div className="flex-row gap-4 text-primary-blue md:hidden relative">
        {!isMenuOpen && <PiList className="cursor-pointer hover:scale-105 transition-transform active:scale-95" size={32} color="#fff" onClick={() => setIsMenuOpen(!isMenuOpen)} />}
        {isMenuOpen && <PiListFill className="cursor-pointer hover:scale-105 transition-transform active:scale-95" size={32} color="#fff" onClick={() => setIsMenuOpen(!isMenuOpen)} />}
        {isMenuOpen && <div className="absolute top-8 right-0 bg-light-blue p-2 rounded-lg flex flex-col items-start gap-2 shadow-md">
          {navLinks.map((link) => <NavLink key={link.href} href={dynamicHref(link.href)} text={link.text} icon={link.icon} />)}
        </div>}
      </div>
    </nav>
  );
}