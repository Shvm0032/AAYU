'use client'
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroHome = () => {
  const [startSecond, setStartSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSecond(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center h-screen flex flex-col items-center justify-center space-y-[3vh] md:space-y-[5vh] px-4">
      <div className="space-y-[2vh] text-left w-full  mx-auto">
        <h1
          className=" text-black leading-[4vh] md:leading-[6vw] tracking-wide font-[900] text-[4vh] md:text-[6vw] w-full"
          style={{ whiteSpace: "normal", overflow: "visible" }}
        >
          <Typewriter
            words={["Pure. Ayurvedic. Inspired by Nature."]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
       
      </div>

      <div>
        <p
          className="text-gray-600 text-left text-[2.5vh] leading-[3.5vh] md:text-[1.2vw] md:leading-[2vw]"
        >
          Handcrafted herbal teas, oils, skincare and supplements — rooted in
          Ayurveda to restore balance and wellness in everyday life.
        </p>
      </div>

      <div className="flex justify-center pt-[6vh]">
        <div className="bg-gray-300 w-[20vw] h-[0.3vh] md:w-[8vw] md:h-[0.2vh]"></div>
      </div>
    </div>
  );
};

export default HeroHome;
