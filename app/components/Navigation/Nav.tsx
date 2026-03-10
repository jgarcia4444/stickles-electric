'use client';
import { PiWrenchFill } from "react-icons/pi";
import { useState } from "react";
import NavLink from "./NavLink";

export default function Nav() {

  const iconSize = 20;

  const navLinks = [
    { href: "/services", text: "Services", icon: <PiWrenchFill size={iconSize} className="text-primary-blue" /> },
    { href: "/about", text: "About", icon: <PiWrenchFill size={iconSize} className="text-primary-blue" /> },
    { href: "/areas-we-serve", text: "Areas We Serve", icon: <PiWrenchFill size={iconSize} className="text-primary-blue" /> },
    { href: "/reviews", text: "Reviews", icon: <PiWrenchFill size={iconSize} className="text-primary-blue" /> },
    { href: "/contact", text: "Contact", icon: <PiWrenchFill size={iconSize} className="text-primary-blue" /> },
  ];

  return (
    <nav className=" p-4 flex flex-row justify-between bg-light-blue">
      <div>
        <a href="/">
          <h1 className="hover:text-secondary-blue text-xl font-semibold text-white">Stickles Electric</h1>
        </a>
      </div>
      <div className="flex flex-row gap-4">
        {navLinks.map((link) => <NavLink key={link.href} href={link.href} text={link.text} icon={link.icon} />)}
      </div>
    </nav>
  );
}