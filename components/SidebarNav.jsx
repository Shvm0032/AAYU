"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import OverlayMenu from "./OverlayMenu";
import {
  ChevronDown,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { TiArrowDownOutline } from "react-icons/ti";

export default function SidebarNav() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const pathname = usePathname();

  // const menuItems = [
  //   { name: "Home", href: "/" },
  //   { name: "About", href: "/about" },
  //   { name: "Contact", href: "/contact" },
  //   { name: "Store", href: "/store" },
  // ];

   const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#" },
    { name: "Contact", href: "/#" },
    { name: "Store", href: "/#" },
  ];


  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <>
      <div
        className="fixed hidden md:flex pb-[8vw] left-0 top-0  flex-col justify-between items-center z-40
                   w-[12vw] h-screen p-[2vh] 
                   max-md:w-[10vh]"
      >
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="font-bold text-black hover:text-gray-600 transition-colors duration-300
                       text-[2vw] max-md:text-[3vh]"
          >
            AAYU
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-[3vh]">
          <div className="flex flex-col items-center gap-[2vh]">
            <a
              href="mailto:hello@nishadroch.com"
              className="text-black hover:text-gray-600 transition-colors duration-300 transform rotate-90 origin-center"
              title="Email"
            >
              <Mail className="w-[2vw] h-[1.5vw] max-md:w-[2vh] max-md:h-[2vh]" />
            </a>
            <a
              href="tel:+1234567890"
              className="text-black hover:text-gray-600 transition-colors duration-300 transform rotate-90 origin-center"
              title="Phone"
            >
              <Phone className="w-[2vw] h-[2vw] max-md:w-[2vh] max-md:h-[2vh]" />
            </a>
          </div>

          {/* <div className="bg-gray-300 h-[8vh] w-[0.2vw] max-md:w-[0.2vh]"></div> */}

         
          <div
            className="transform rotate-90 text-gray-600 whitespace-nowrap
                       text-[1.5vw] mt-[40%]"
          >
            hello@aayu.com
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className="fixed hidden right-0 top-0 md:flex flex-col justify-between items-center z-40
                   w-[12vw] h-screen p-[2vh]
                   max-md:w-[10vh]"
      >
        {/* Navigation Menu */}
        <div className="flex flex-col items-center pt-[2vw] max-md:pt-[2vh]">
          <TiArrowDownOutline className="text-[2vw]" />
          <button
            onClick={() => setIsOverlayOpen(true)}
            className="transform rotate-90 mt-[4vh] font-medium tracking-wide transition-colors duration-300 whitespace-nowrap text-gray-600 hover:text-black
                       text-[1.2vw] max-md:text-[2vh]"
          >
            MENU
          </button>
        </div>

        {/* Social Icons and Scroll Arrow */}
        <div className="flex flex-col items-center gap-[3vh]">
          <div className="flex flex-col items-center gap-[2vh]">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-600 hover:text-black transition-colors duration-300"
                title={social.label}
              >
                <social.icon className="w-[2vw] h-[2vw] max-md:w-[3vh] max-md:h-[3vh]" />
              </a>
            ))}
          </div>
          <div className="bg-gray-300 h-[8vh] w-[0.2vw] max-md:w-[0.2vh]"></div>
          <div className="animate-bounce">
            <ChevronDown className="text-gray-600 w-[2vw] h-[2vw] max-md:w-[3vh] max-md:h-[3vh]" />
          </div>
        </div>
      </div>

      {/* Overlay Menu */}
      <OverlayMenu
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
}
