"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Angela Ezaley",
    text: `Amazing work, provided 3 variations to choose from for our design and all 3 were amazing! Highly recommend!`,
  },
  {
    name: "John Doe",
    text: `The team delivered exceptional work on time and the designs exceeded our expectations.`,
  },
  {
    name: "Sarah Lee",
    text: `Professional, creative, and highly responsive. Loved the outcome!`,
  },
  {
    name: "Michael Smith",
    text: `Great communication and fantastic results. Would definitely work with them again.`,
  },
  {
    name: "Emily Johnson",
    text: `The attention to detail and creativity is unmatched. Truly satisfied!`,
  },
  {
    name: "David Brown",
    text: `Delivered exactly what we needed with a touch of innovation. Excellent work!`,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  // ✅ Auto slider + fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true); // fade in new testimonial
      }, 300); // match fade-out duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="bg-black md:h-[50vh] mx-auto px-[4vw] py-[10vh] grid lg:grid-cols-2 gap-[5vw] items-start"
      data-aos="fade-up"
    >
      {/* Left - Title */}
      <div className="flex items-start">
        <h2 className="text-[3vh] lg:text-[2.5vw] font-bold tracking-wide text-gray-100">
          — TESTIMONIALS
        </h2>
      </div>

      {/* Right - Testimonial Content */}
      <div className="space-y-[4vh]">
        <p
          className={`text-gray-300 text-[2.2vh] lg:text-[1.3vw] leading-relaxed transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          key={current} // trigger re-render
        >
          <span className="font-semibold text-gray-400">
            {testimonials[current].name}
          </span>{" "}
          — “{testimonials[current].text}”
        </p>

        {/* Slide Indicator */}
        <div className="flex items-center justify-between mt-[2vh] text-gray-400 text-[1.8vh] lg:text-[1vw]">
          <span className="font-semibold">
            {current + 1 < 10 ? `0${current + 1}` : current + 1}
          </span>

          <div className="flex-1 mx-2 h-[2px] bg-gray-700 rounded relative">
            <div
              className="h-full bg-gray-400 rounded transition-all duration-500"
              style={{
                width: `${((current + 1) / testimonials.length) * 100}%`,
              }}
            ></div>
          </div>

          <span className="font-semibold">
            {testimonials.length < 10
              ? `0${testimonials.length}`
              : testimonials.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
