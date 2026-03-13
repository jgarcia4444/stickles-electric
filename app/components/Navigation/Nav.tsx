'use client';
import { PiWrenchFill, PiUserRectangleFill, PiStarFill, PiClipboardFill } from "react-icons/pi";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

export default function Nav() {

  const pathname = usePathname();
  const iconSize = 20;

  const navLinks = [
    { href: "#services", text: "Services", icon: <PiWrenchFill size={iconSize}  /> },
    { href: "#about", text: "About", icon: <PiUserRectangleFill size={iconSize} /> },
    { href: "#reviews", text: "Reviews", icon: <PiStarFill size={iconSize} /> },
    { href: "#contact", text: "Contact", icon: <PiClipboardFill size={iconSize} /> },
  ];

  
  // const isSelected = (href: string) => {
  //   console.log(pathname, href);
  //   return pathname === href;
  // };

  return (
    <nav className="py-4 px-6 flex flex-row justify-between bg-light-blue sticky md:fixed top-0 left-0 right-0 z-50">
      <div>
        <a href="/">
          <h1 className="hover:text-primary-blue text-xl font-semibold text-white">Stickles Electric</h1>
        </a>
      </div>
      <div className="flex flex-row gap-4 text-primary-blue">
        {navLinks.map((link) => <NavLink key={link.href} href={link.href} text={link.text} icon={link.icon} />)}
      </div>
    </nav>
  );
}