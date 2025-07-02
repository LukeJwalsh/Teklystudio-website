"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./Drop-down-menu";
import { useScrollDirection } from "./hooks/useScrollDirection";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
  const scrollDirection = useScrollDirection();
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => setIsDropDownVisible(!isDropDownVisible);
  const closeDropDown = () => setIsDropDownVisible(false);


  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsDropDownVisible(false); // close mobile menu if open
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className="
          mx-auto my-4
          w-[95%] md:w-[90%] lg:w-[80%]
          rounded-xl shadow-lg shadow-slate-900/40
          bg-black/[0.96] backdrop-blur
          relative
        "
      >
        <div className="p-4 md:p-6 flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => scrollToSection("home")} className="cursor-pointer">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </div>

          {/* Desktop Nav */}
          <div
            className="
              hidden md:flex space-x-10 items-center
              text-slate-300 text-center
              bg-clip-text text-transparent
              bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50
            "
          >
            <div
              className="hover:text-gray-50 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </div>
            <div
              className="hover:text-gray-50 cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              Services
            </div>
            <div
              className="hover:text-gray-50 cursor-pointer"
              onClick={() => scrollToSection("pricing")}
            >
              Pricing
            </div>
            <div
              className="hover:text-gray-50 cursor-pointer"
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="
                inline-flex h-12 animate-shimmer
                items-center justify-center rounded-md border border-slate-800
                bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
                bg-[length:200%_100%] bg-[position:0_0]
                px-6 font-medium text-slate-400 transition-colors
                focus:outline-none focus:ring-2 focus:ring-slate-400
                focus:ring-offset-2 focus:ring-offset-slate-50
              "
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            {isDropDownVisible ? (
              <div
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
              >
                <X />
                <DropDownMenu onClose={closeDropDown} />
              </div>
            ) : (
              <AlignJustify
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
