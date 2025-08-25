"use client";
import React from "react";

const marquee1 = ["ASHWAGANDHA", "BHRAMI", "AMLA", "TULSI", "NEEM", "MORINGA"];

const marquee2 = [
  "AYURVEDIC TEA",
  "HERBAL OIL",
  "SKINCARE OIL",
  "IMMUNITY BOOSTER",
  "HAIR OIL",
  "MASSAGE OIL",
];

const marquee3 = [
  "TRIPHALA",
  "GILOY",
  "SHANKHAPUSHPI",
  "HALDI",
  "SANDALWOOD",
  "BRAHMI OIL",
];

const MarqueeAyurveda = () => {
  return (
    <div className="space-y-8 mt-[10vh]">
      {/* Marquee 1 - Right */}
      <div className="overflow-hidden whitespace-nowrap w-full">
        <div className="inline-flex animate-marquee-right">
          {marquee1.concat(marquee1).map((item, index) => (
            <span
              key={index}
              className="mx-2 flex-shrink-0 border border-green-800 rounded-full font-semibold bg-green-50 text-green-900"
              style={{
                fontSize: "clamp(2vh, 1.5vw, 2vw)",
                padding: "clamp(1vh, 0.8vw, 1vw) clamp(2vh, 1.5vw, 2vw)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee 2 - Left */}
      <div className="overflow-hidden whitespace-nowrap w-full">
        <div className="inline-flex animate-marquee-left">
          {marquee2.concat(marquee2).map((item, index) => (
            <span
              key={index}
              className="mx-2 flex-shrink-0 border border-yellow-800 rounded-full font-semibold bg-yellow-50 text-yellow-900"
              style={{
                fontSize: "clamp(2vh, 1.5vw, 2vw)",
                padding: "clamp(1vh, 0.8vw, 1vw) clamp(2vh, 1.5vw, 2vw)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee 3 - Right */}
      <div className="overflow-hidden whitespace-nowrap w-full">
        <div className="inline-flex animate-marquee-right">
          {marquee3.concat(marquee3).map((item, index) => (
            <span
              key={index}
              className="mx-2 flex-shrink-0 border border-orange-800 rounded-full font-semibold bg-orange-50 text-orange-900"
              style={{
                fontSize: "clamp(2vh, 1.5vw, 2vw)",
                padding: "clamp(1vh, 0.8vw, 1vw) clamp(2vh, 1.5vw, 2vw)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          display: inline-flex;
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          display: inline-flex;
          animation: marquee-right 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarqueeAyurveda;
