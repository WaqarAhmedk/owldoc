import React from "react";
import whatsapp from "../../assets/images/whatsapp.png";
import linkedin from "../../assets/images/linkedin.png";
import image from "../../assets/images/bg2.jpeg";
import anywhere from "../../assets/images/anywhere.png";
import avaialble from "../../assets/images/ontime.png";
import language from "../../assets/images/school.png";
import professional from "../../assets/images/candidate.png";

const options = [
  {
    text: "Visit Anywhere",
    icon: anywhere,
  },
  {
    text: "Always available",
    icon: avaialble,
  },
  {
    text: "Multilingual Functionality",
    icon: language,
  },
  {
    text: "No appointments",
    icon: anywhere,
  },
  {
    text: "Prescriptions Refill",
    icon: language,
  },
  {
    text: "Licensed Professionals",
    icon: professional,
  },
];

const teamMembers = Array(6).fill({
  role: "Art Director",
  name: "Adil Hussain",
  email: "Info@email.com",
  phone: "02343 343242 2323232",
});

const IconGroup = () => (
  <div className="flex gap-3 mt-2 justify-center">
    <img src={whatsapp} alt="whatsapp" height={30} width={30} />
    <img src={linkedin} alt="linkedin" height={30} width={30} />
    <img src={whatsapp} alt="whatsapp" height={30} width={30} />
  </div>
);

const MemberCard = ({ member }) => (
  <div className="flex w-full md:w-[35%] bg-[#EAE2F3] gap-6">
    <img src={image} className="w-[50%] h-[20rem]" alt="Member" />
    <div className="flex justify-between items-center flex-col py-6">
      <div className="text-center">
        <h2 className="text-[16px] text-main">{member.role}</h2>
        <h2 className="text-[20px] text-main">{member.name}</h2>
      </div>
      <div>
        <h2 className="text-[16px] text-main">{member.email}</h2>
        <h2 className="text-[16px] text-main">{member.phone}</h2>
        <IconGroup />
      </div>
    </div>
  </div>
);

const BenefitItem = ({ icon, text }) => (
  <div className="w-full md:w-[30%] flex flex-col justify-center items-center my-4 gap-5 ">
    <img src={icon} height={45} width={45} alt="Icon" />
    <h1 className="text-main text-[25px]">{text}</h1>
  </div>
);

function MeetDoctors() {
  return (
    <>
      <div className="flex justify-center items-center text-center">
        <div>
          <h2 className="text-[30px] font-semibold text-[#0805EC] py-8 uppercase">
            Meet just a few of our thousands of caring therapists and
            psychiatrists.
          </h2>
          <div className="flex flex-wrap w-full justify-center gap-4 flex-col md:flex-row px-5 md:px-0">
            {teamMembers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
          <div className="mt-5 py-5">
            <h3 className="text-[50px] text-main font-semibold">
              The Benefits of visiting an online Doctor
            </h3>
            <h2 className="text-[30px] text-main">Exceptional Quality</h2>
          </div>
        </div>
      </div>

      <div className="bg-[#EAE2F3] flex justify-center items-center py-24">
        <div className="flex justify-center items-center gap-10 px-10 w-full flex-wrap">
          {options.map((option, index) => (
            <BenefitItem key={index} icon={option.icon} text={option.text} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MeetDoctors;
