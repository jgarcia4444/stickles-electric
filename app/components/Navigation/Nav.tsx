'use client';
import { PiWrenchFill, PiUserRectangleFill } from "react-icons/pi";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

export default function Nav() {

  const pathname = usePathname();
  const iconSize = 20;

  const navLinks = [
    { href: "/services", text: "Services", icon: <PiWrenchFill size={iconSize}  /> },
    { href: "/about", text: "About", icon: <PiUserRectangleFill size={iconSize} /> },
    { href: "/reviews", text: "Reviews", icon: <PiWrenchFill size={iconSize} /> },
    { href: "/contact", text: "Contact", icon: <PiWrenchFill size={iconSize} /> },
  ];

  

  const isSelected = (href: string) => {
    console.log(pathname, href);
    return pathname === href;
  };

  return (
    <nav className=" p-4 flex flex-row justify-between bg-light-blue">
      <div>
        <a href="/">
          <h1 className="hover:text-secondary-blue text-xl font-semibold text-white">Stickles Electric</h1>
        </a>
      </div>
      <div className="flex flex-row gap-4 text-primary-blue">
        {navLinks.map((link) => <NavLink selected={isSelected(link.href)} key={link.href} href={link.href} text={link.text} icon={link.icon} />)}
      </div>
    </nav>
  );
}