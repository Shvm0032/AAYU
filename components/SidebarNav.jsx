"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import OverlayMenu from './OverlayMenu';
import { ChevronDown, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function SidebarNav() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Store', href: '/store' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <>
      {/* Left Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-16 lg:w-20 flex flex-col justify-between items-center py-8 z-40">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Link href="/" className="text-2xl font-bold text-black hover:text-gray-600 transition-colors duration-300">
            N
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <a 
              href="mailto:hello@nishadroch.com" 
              className="text-black hover:text-gray-600 transition-colors duration-300 transform rotate-90 origin-center"
              title="Email"
            >
              <Mail size={16} />
            </a>
            <a 
              href="tel:+1234567890" 
              className="text-black hover:text-gray-600 transition-colors duration-300 transform rotate-90 origin-center"
              title="Phone"
            >
              <Phone size={16} />
            </a>
          </div>
          <div className="h-16 w-px bg-gray-300"></div>
          <div className="transform rotate-90 text-xs text-gray-600 whitespace-nowrap">
            hello@nishadroch.com
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="fixed right-0 top-0 h-screen w-16 lg:w-20 flex flex-col justify-between items-center py-8 z-40">
        {/* Navigation Menu */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setIsOverlayOpen(true)}
            className="transform rotate-90 text-sm font-medium tracking-wide transition-colors duration-300 whitespace-nowrap text-gray-600 hover:text-black"
          >
            MENU
          </button>
        </div>

        {/* Social Icons and Scroll Arrow */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-600 hover:text-black transition-colors duration-300"
                title={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
          <div className="h-16 w-px bg-gray-300"></div>
          <div className="animate-bounce">
            <ChevronDown size={16} className="text-gray-600" />
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