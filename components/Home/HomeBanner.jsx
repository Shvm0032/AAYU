'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../public/home/HeroBanner.jpg";

const HomeBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
    });
  }, []);

  return (
    <div className="w-full mb-[10vh]">
      <div
        data-aos="fade-up"
        className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
      >
        <Image
          src={img}
          alt="Hero Banner"
          className="w-full h-[50vh] object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HomeBanner;
