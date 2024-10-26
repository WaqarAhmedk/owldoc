import React from "react";
import bgvideo from "../../assets/images/vid.mp4";

function AboutUs() {
  return (
    <>
      <div className="my-5 px-10">
        <h1 className="text-[64px] text-main text-center py-6">How It Works</h1>
        <div className="  flex justify-between items-center flex-col md:flex-row ">
          <div className="w-full md:w-[50%]  px-7">
            <video src={bgvideo} autoPlay muted loop />
          </div>
          <div className="w-full md:w-[50%] px-5 text-center py-5">
            <p className="text-main text-[24px]">
              Owldoc.io revolutionizes healthcare by providing a telemedicine
              platform that integrates AI-driven features and a short video reel
              platform. Our focus on mental health treatment ensures that the
              Muslim community receives care aligned with Islamic values. With a
              global network of Muslim doctors, we offer personalized and
              culturally sensitive healthcare services, starting with mental
              health support.
            </p>
            <button className="p-3 px-9 bg-main rounded-full mt-10 text-[white]">
              Learn More{" "}
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#EAE2F3]  py-10 px-4 md:px-0 ">
        <div className=" px-10">
          <h1 className="text-[30px] md:text-[55px] text-[#0512EC] font-semibold pb-5 text-center ">
            Mental Health Support Starts Here
          </h1>
          <div className="border-b-[1px] border-main"></div>
          <div className="flex flex-col gap-5 mt-5 ">
            <div className="flex justify-between items-center py-5 flex-col gap-5 md:flex-row">
              <h2 className="text-main text-[20px] font-semibold">
                Anxiety Relief Therapy {"     "}
              </h2>
              <h2 className="text-main font-semibold ml-0 md:ml-12">$75</h2>
              <button className=" px-8 py-3 bg-main   text-[white]">
                Book Now
              </button>
            </div>
          </div>
          <div className="border-b-[1px] border-main"></div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex justify-between items-center py-5 flex-col gap-5 md:flex-row">
              <h2 className="text-main text-[20px] font-semibold">
                Mental Health Consultation{" "}
              </h2>
              <h2 className="text-main font-semibold">$80</h2>
              <button className=" px-8 py-3 bg-main   text-[white]">
                Book Now
              </button>
            </div>
          </div>
          <div className="border-b-[1px] border-main"></div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex justify-between items-center py-5 flex-col gap-5 md:flex-row">
              <h2 className="text-main text-[20px] font-semibold">
                Stress Management Session{" "}
              </h2>
              <h2 className="text-main font-semibold">$60</h2>
              <button className=" px-8 py-3 bg-main   text-[white]">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="border border-b border-white mt-10"></div>

        <div className=" px-10 mt-12">
          <h1 className="text-[55px] text-[#0512EC] font-semibold pb-5">
            See What our patients have to say aabout us{" "}
          </h1>
          <div className="border-b-[1px] border-main"></div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex justify-between items-center py-6 flex-col gap-5 md:flex-row">
              <h2></h2>
              <h2 className="text-[30px] text-main">Ahmed's Feedback</h2>
              <p className="text-main max-w-[35rem]">
                Ahmed's Feedback I never thought I could find a telemedicine
                platform that caters specifically to the Muslim community.
                Owldoc.io has exceeded my expectations in providing quality
                mental health care.
              </p>
            </div>
            <div className="border-b-[1px] border-main"></div>

            <div className="flex justify-between items-center py-6 flex-col gap-5 md:flex-row">
              <h2></h2>
              <h2 className="text-[30px] text-main">Sara's Experience</h2>
              <p className="text-main max-w-[35rem]">
                Sara's Experience I highly recommend Owldoc.io to anyone looking
                for mental health support within the Muslim community. The
                doctors are not only professional but also understanding and
                compassionate.
              </p>
            </div>
            <div className="border-b-[1px] border-main"></div>
            <div className="flex justify-between items-center py-6 flex-col gap-5 md:flex-row">
              <h2></h2>
              <h2 className="text-[30px] text-main">Youssef's Testimonial</h2>
              <p className="text-main max-w-[35rem]">
                Youssef's Testimonial As a Muslim, it's often challenging to
                find healthcare services that respect my values. Owldoc.io has
                filled this gap by offering a platform that provides mental
                health treatment in line with Islamic principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
