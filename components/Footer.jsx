// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 md:gap-[4vw] min-h-screen w-full text-black font-sans mt-[10vh]">

      {/* Left Column - Vertical Ayurvedic Quote */}
      <div className="bg-green-800 flex items-center justify-center p-4">
  <p className="hidden md:block text-white -rotate-90 origin-bottom-right font-medium text-[1.4vw] mt-[-100%] text-right leading-snug">
    <strong>Ayurveda</strong> is the <span className="text-red-600">●</span> science of life, rooted in nature and healing.
  </p>
  <p className="block text-white md:hidden text-center font-medium text-[2.8vh] leading-snug">
    <strong>Ayurveda</strong> is the <span className="text-red-600">●</span> science of life, rooted in nature and healing.
  </p>
</div>


      {/* Middle Column - Ayurvedic Info */}
      <div className="flex flex-col justify-center items-center md:items-start px-8 py-12 gap-6 text-center md:text-left">
        <p className="text-[2.8vh] md:text-[1.5vw]  leading-relaxed max-w-[600px]">
          We promote holistic well-being through ancient Ayurvedic wisdom.
        </p>

        <div>
          <p className="font-semibold text-[2.5vh] md:text-[1.3vw]">Email Address</p>
          <p className="text-[2.4vh] md:text-[1.15vw]">contact@ayurvedaheals.com</p>
        </div>

        <div className="flex flex-col gap-2">
          <a href="#" className="text-green-700 hover:underline text-[2.4vh] md:text-[1.15vw]">
            Herbal Remedies
          </a>
          <a href="#" className="text-green-700 hover:underline text-[2.4vh] md:text-[1.15vw]">
            Lifestyle & Diet
          </a>
        </div>

        <div>
          <p className="text-[2.4vh] md:text-[1.15vw]">
            Want to collaborate on a healing journey?
          </p>
          <a href="#" className="text-green-700 hover:underline text-[2.4vh] md:text-[1.15vw]">
            Join Our Mission
          </a>
        </div>
      </div>

      {/* Right Column - Social Links */}
      <div className="flex flex-col justify-center items-center md:items-end px-8 py-12 gap-2 text-[2.4vh] md:text-[1.15vw]">
        <a href="#" className="hover:underline">Facebook</a>
        <a href="#" className="hover:underline">YouTube</a>
        <a href="#" className="hover:underline">Instagram</a>

        <p className="mt-6 text-[2.2vh] md:text-[1vw] text-center md:text-right">
          Digitally Powered by{" "}
          <a href="#" className="text-green-700 hover:underline">Sattva Digital</a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
