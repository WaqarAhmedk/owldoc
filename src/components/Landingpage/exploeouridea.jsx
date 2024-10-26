import React from "react";
import image from "../../assets/images/bg.jpg";

function ExploreOurIdea() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full  flex justify-center flex-col items-center gap-5 py-6 ">
          <h2 className="text-[40px] text-[#1D10C8] font-semibold text-center">
            Explore our digital care enablement technology
          </h2>

          <div className=" flex gap-7 justify-center flex-col md:flex-row items-center px-5">
            <div className="w-[100%] md:w-[20%] min-h-[25rem] md:min-h-[22rem] border border-[rgba(231,221,243,0.75)]">
              <img
                src={image}
                alt="image"
                height={440}
                width={400}
                className="w-full"
              />
              <h2 className="text-[22px] text-main mt-[2.5rem]  px-2 text-center pb-5">
                Growing Telehealth Industry: Owldoc's Global Muslim Doctor
                Network
              </h2>
            </div>
            <div className="w-[100%] md:w-[20%]  min-h-[25rem] md:min-h-[22rem]  border border-[rgba(231,221,243,0.75)] ">
              <img
                src={image}
                alt="image"
                height={440}
                width={400}
                className="w-full"
              />
              <h2 className="text-[22px] text-main mt-[2.5rem]  px-2 text-center pb-5">
                Revolutionizing Telehealth: Owldoc's Islamic Mental Health Focus
              </h2>
            </div>
            <div className="w-[100%] md:w-[20%] min-h-[25rem]  md:min-h-[22rem] border border-[rgba(231,221,243,0.75)]">
              <img
                src={image}
                alt="image"
                height={440}
                width={400}
                className="w-full"
              />
              <h2 className="text-[22px] text-main  mt-[2.5rem] px-2 text-center pb-5">
                Empowering Muslim Community: Owldoc's AI Telemedicine Features
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* ...........nEw ..... */}
      <div className="flex justify-center items-center mt-[5rem]">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-main text-[40px] font-bold text-center">
            We Are Empowering Our Clients
          </h1>

          {[
            "Improving financial and clinical problems",
            "Optimizing Workforce",
            "Achieving Digital Care Success",
            "Removing Communication Barriers",
          ].map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-6  pb-10 border-[#1D67CD] border-b-[3px] w-full md:min-w-[30rem] "
            >
              <h1 className="text-[#1D67CD] text-[67px] font-bold  ">
                {`0${index + 1}`}
              </h1>
              <p className="text-[#1D67CD] text-[23px] font-semibold max-w-[20rem]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* .......new....... */}
      <div className="  flex justify-center items-center flex-col py-10 px-6">
        <h2 className="text-[35px] md:text-[40px] text-main w-full md:w-[55rem] text-center pb-3 font-semibold">
          A network of mental health providers dedicated to compassionate care
        </h2>
        <h3 className="text-main text-[20px] py-2">
          Dedication. Expertise. Passion.
        </h3>
        <p className="text-main w-full md:w-[50rem] text-center text-[20px] py-4">
          Our therapists represent a wide range of backgrounds, beliefs,
          personality types and cultures. And because our counseling sessions
          are virtual, you're not limited to a professional in your area. View
          profiles of therapists nationwide to find the right one for you.
        </p>
      </div>
    </>
  );
}

export default ExploreOurIdea;
