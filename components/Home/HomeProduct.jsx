"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "@/public/home/ashwagandha.webp";
import img2 from "@/public/home/Brahmi.webp";
import img3 from "@/public/home/Amla.jpg";
import img4 from "@/public/home/Tulsi.webp";
import img5 from "@/public/home/Shatavari.jpg";
import Image from "next/image";

const items = [
  { name: "Ashwagandha", img: img1, link: "#" },
  { name: "Brahmi", img: img2, link: "#" },
  { name: "Amla", img: img3, link: "#" },
  { name: "Tulsi", img: img4, link: "#" },
  { name: "Shatavari", img: img5, link: "#" },
];


const HomeProduct = () => {
  const [tilt, setTilt] = useState({});
  const [cursorPos, setCursorPos] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      mirror: true, 
    });
  }, []);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 70;
    const rotateY = (x / rect.width - 0.5) * 70;

    const transformValue = `perspective(1500px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;

    setTilt((prev) => ({
      ...prev,
      [index]: transformValue,
    }));

    setCursorPos((prev) => ({
      ...prev,
      [index]: { x, y },
    }));
  };

  const handleMouseLeave = (index) => {
    setTilt((prev) => ({
      ...prev,
      [index]: "perspective(1500px) rotateX(0deg) rotateY(0deg) scale(1)",
    }));
    setHoveredIndex(null);
  };

  return (
    <>
      {/* Mobile View */}
      {items.map((item, i) => (
        <div className="block md:hidden mt-[7vh]" data-aos="fade-up" key={i}>
          <Image
            height={100}
            width={100}
            className="h-[35vh] w-[100%] object-contain shadow-lg rounded-lg"
            src={item?.img}
            alt=""
          />
          <p className="text-[1.7vh] text-center mt-4">{item.name}</p>
        </div>
      ))}

      {/* Desktop View */}
      <div className="md:flex hidden flex-col gap-[10vw] p-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center rounded-2xl"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // ✅ AOS animation
          >
            {index % 2 === 0 ? (
              <>
                <div
                  className="w-[70%] h-full relative"
                  style={{ cursor: "none" }}
                  onMouseMove={(e) => {
                    handleMouseMove(e, index);
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div
                    className="w-full h-full relative transition-transform duration-200 ease-out"
                    style={{ transform: tilt[index] || "perspective(1500px)" }}
                  >
                    <img
                      src={item.img.src}
                      alt={item.name}
                      className="object-contain w-full h-[70vh] rounded-2xl shadow-lg"
                    />
                    <span
                      className="absolute top-1/2 right-[-9vw] -translate-y-1/2 text-[3vw] font-bold text-black pointer-events-none"
                      style={{ transform: "rotate(-90deg)" }}
                    >
                      {item.name}
                    </span>
                  </div>
                  {hoveredIndex === index && cursorPos[index] && (
                     <a
                      href={item.link}
                      className="absolute bg-black text-white text-[1.1vw] flex items-center justify-center rounded-full w-[7vw] h-[7vw] pointer-events-auto"
                      style={{
                        top: cursorPos[index].y - 40,
                        left: cursorPos[index].x - 40,
                      }}
                    >
                      View More
                    </a>
                  )}
                </div>
                <div className="w-[30%]"></div>
              </>
            ) : (
              <>
                <div className="w-[30%]"></div>
                <div
                  className="w-[70%] h-full relative"
                  style={{ cursor: "none" }}
                  onMouseMove={(e) => {
                    handleMouseMove(e, index);
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div
                    className="w-full h-full relative transition-transform duration-200 ease-out"
                    style={{ transform: tilt[index] || "perspective(1500px)" }}
                  >
                    <img
                      src={item.img.src}
                      alt={item.name}
                      className="object-contain w-full h-[70vh] rounded-2xl shadow-lg"
                    />
                    <span
                      className="absolute top-1/2 left-[-4rem] -translate-y-1/2 text-[3vw] font-bold text-black pointer-events-none"
                      style={{ transform: "rotate(90deg)" }}
                    >
                      {item.name}
                    </span>
                  </div>
                  {hoveredIndex === index && cursorPos[index] && (
                    <a
                      href={item.link}
                      className="absolute bg-black text-white text-[1.1vw] flex items-center justify-center rounded-full w-[7vw] h-[7vw] pointer-events-auto"
                      style={{
                        top: cursorPos[index].y - 40,
                        left: cursorPos[index].x - 40,
                      }}
                    >
                      View More
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeProduct;
