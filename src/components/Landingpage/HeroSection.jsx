import React from "react";
import bgvideo from "../../assets/images/vid.mp4";
import bgimage from "../../assets/images/hero2.jpg";

function HeroSection() {
  return (
    <div
      className="relative h-full pt-[7%]  pb-[2%] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white opacity-50"></div>

      {/* Content Section */}
      <div className="relative text-white text-center w-full px-0 md:px-[20%] z-10">
        <div className="flex flex-col gap-3">
          <p className="text-main text-[25px] md:text-[45px] mb-4 font-semibold px-4">
            AI-Powered Personalized Convenient Care Experience Anywhere, Anytime
          </p>
          <p className="text-main text-[17px] md:text-[20px] mb-4 font-semibold">
            Empowering healthcare with Islamic values for the Muslim community.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 justify-center items-center mt-5 flex-col md:flex-row px-2">
            <button className="p-3 px-9 bg-main rounded-full w-[50%]">
              Request Demo
            </button>
            <button className="p-3 px-9 border border-main rounded-full text-main w-[50%]">
              Request Demo
            </button>
          </div>
        </div>

        <h2 className="text-main text-[30px] md:text-[70px] mb-6 font-semibold mt-8">
          Now is the time to Try telemedicine!
        </h2>

        {/* Video Section */}
        <div className="px-2 rounded overflow-hidden">
          <video
            src={bgvideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
