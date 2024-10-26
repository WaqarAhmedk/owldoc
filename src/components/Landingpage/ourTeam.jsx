import React from "react";
import whatsapp from "../../assets/images/whatsapp.png";
import linkedin from "../../assets/images/linkedin.png";
import image from "../../assets/images/bg2.jpeg";

function MeetTeam() {
  const teamMembers = [
    {
      name: "Adil Hussain",
      role: "Art Director",
      email: "info@email.com",
      phone: "02343 343242 2323232",
    },
    {
      name: "Sarah Ali",
      role: "Senior Therapist",
      email: "sarah@email.com",
      phone: "01234 567890",
    },
    {
      name: "John Doe",
      role: "Psychiatrist",
      email: "john@email.com",
      phone: "09876 543210",
    },
    {
      name: "Ayesha Khan",
      role: "Therapist",
      email: "ayesha@email.com",
      phone: "04567 891234",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center text-center px-4 py-12 bg-[#EAE2F3]">
        <div className="w-full max-w-screen-lg">
          <h2 className="text-[30px] font-semibold text-[#0805EC] uppercase">
            Meet Creative Team Behind this Project
          </h2>

          <div className="grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
              >
                <img
                  src={image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="text-center mt-4">
                  <h3 className="text-[16px] font-medium text-main">
                    {member.role}
                  </h3>
                  <h2 className="text-[20px] font-bold">{member.name}</h2>
                  <p className="text-[16px]">{member.email}</p>
                  <p className="text-[16px]">{member.phone}</p>
                  <div className="flex gap-4 mt-3">
                    <img src={whatsapp} alt="whatsapp" height={30} width={30} />
                    <img src={linkedin} alt="linkedin" height={30} width={30} />
                    <img src={linkedin} alt="linkedin" height={30} width={30} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetTeam;
