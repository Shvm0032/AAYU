"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import founderImg from "@/public/home/f1.webp";

const HomeAboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,  // har bar animation chale jab element viewport me aaye
      mirror: true, // scroll back pe bhi chale
    });
  }, []);

  return (
    <section className="mx-auto px-[4vw] py-[5vh] grid lg:grid-cols-3 gap-[2vw] items-start md:mt-[10vh]">
      {/* Left - Image */}
      <div className="w-full" data-aos="fade-up">
        <img
          src={founderImg.src}
          alt="Our Founder"
          className="w-full h-[100%] rounded-[1.5vh] shadow-lg object-cover"
        />
      </div>

      {/* Middle - About Text */}
      <div className="lg:col-span-1 space-y-[2vh]" data-aos="fade-up">
        <p className="text-[2vh] lg:text-[1.2vw] text-gray-500 tracking-wide">
          — ABOUT US
        </p>
        <h2 className="font-bold text-green-900 text-[4vh] lg:text-[2.5vw] leading-tight">
          Experience Authentic Ayurveda
        </h2>
        <p className="text-gray-700 text-[2vh] lg:text-[1.2vw] leading-relaxed">
          Welcome to our Ayurvedic wellness brand! We create 100% natural herbal
          products, from teas and oils to skincare and supplements, crafted to
          restore balance, boost immunity, and enhance holistic wellness. Our
          philosophy is rooted in traditional Ayurvedic wisdom, combined with
          modern care and love for nature.
        </p>
        <ul className="text-gray-700 text-[2vh] lg:text-[1.2vw] list-disc list-inside space-y-[1vh]">
          <li>Herbal teas & oils</li>
          <li>Natural skincare & haircare</li>
          <li>Immunity & wellness supplements</li>
          <li>Holistic Ayurvedic treatments</li>
        </ul>
      </div>

      {/* Right - Key Services */}
      <div className="lg:col-span-1 space-y-[2vh]" data-aos="fade-up">
        <p className="text-[2vh] lg:text-[1.2vw] text-gray-500 tracking-wide">
          — OUR SPECIALTIES
        </p>
        <ul className="text-gray-700 text-[2vh] lg:text-[1.2vw] list-disc list-inside space-y-[1vh]">
          <li>Ayurvedic teas</li>
          <li>Herbal oils & massage oils</li>
          <li>Skincare & haircare products</li>
          <li>Detox & immunity boosters</li>
          <li>Traditional Ayurvedic remedies</li>
        </ul>
      </div>
    </section>
  );
};

export default HomeAboutUs;
