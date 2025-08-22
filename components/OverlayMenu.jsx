"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function OverlayMenu({ isOpen, onClose, menuItems }) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <div 
      className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-50 transition-all duration-500 ease-in-out ${
        isOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}
    >
      <div className="h-full flex flex-col items-center justify-center relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-black hover:text-gray-600 transition-colors duration-300 group"
        >
          <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Navigation Menu */}
        <nav className="flex flex-col items-start space-y-8 mb-16 w-full max-w-4xl px-8 lg:px-16">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`text-4xl lg:text-6xl font-light tracking-wide transition-all duration-500 hover:translate-x-4 ${
                pathname === item.href 
                  ? 'text-black' 
                  : 'text-gray-600 hover:text-black'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? 'slideInUp 0.6s ease-out both' : 'none'
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center space-x-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-110"
              title={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
            <a 
              href="mailto:hello@nishadroch.com" 
              className="hover:text-black transition-colors duration-300"
            >
              hello@nishadroch.com
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="tel:+1234567890" 
              className="hover:text-black transition-colors duration-300"
            >
              +1 (234) 567-8900
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}