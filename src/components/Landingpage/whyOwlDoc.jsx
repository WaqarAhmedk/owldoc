import React from "react";
import bgvideo from "../../assets/images/vid.mp4";

function WhyOwlDoc() {
  return (
    <div className="flex justify-between items-center  my-5 px-10 py-6 flex-col lg:flex-row">
      <div className="w-[100%] lg:w-[50%]px-7">
        <video
          src={bgvideo}
          autoPlay
          muted
          loop
          className=" border rounded-sm"
        />
      </div>
      <div className="w-[100%] lg:w-[50%] px-5 text-center py-5">
        <h2 className="text-main text-[40px]">why Owldoc.io</h2>
        <p className="text-main text-[24px] py-4">
          Owldoc.io revolutionizes healthcare by providing a telemedicine
          platform that integrates AI-driven features and a short video reel
          platform. Our focus on mental health treatment ensures that the Muslim
          community receives care aligned with Islamic values. With a global
          network of Muslim doctors, we offer personalized and culturally
          sensitive healthcare services, starting with mental health support.
        </p>
      </div>
    </div>
  );
}

export default WhyOwlDoc;
