import React from "react";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import teamImage from "../../assets/images/candidate.png"; // Replace with real team photos

function MeetTeam() {
  const teamMembers = [
    { name: "Adil Hussain", role: "Project Manager" },
    { name: "Sarah Ali", role: "UI/UX Designer" },
    { name: "John Doe", role: "Frontend Developer" },
    { name: "Ayesha Khan", role: "Backend Developer" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#EAE2F3] to-[#fff] px-6 py-16">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-[40px] font-extrabold text-[#0805EC] mb-6 uppercase">
          Meet Our Amazing Team
        </h2>
        <p className="text-[18px] text-gray-700 mb-12">
          We are a team of passionate individuals committed to delivering
          high-quality work.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-xl bg-white p-8"
            >
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src={teamImage}
                  alt={member.name}
                  className="rounded-full object-cover w-full h-full border-4 border-[#0805EC] group-hover:border-purple-600 transition-colors"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-[22px] font-semibold">{member.name}</h3>
                <p className="text-[16px] text-gray-600 mb-4">{member.role}</p>

                <div className="flex justify-center gap-4">
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      className="h-8 w-8 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      src={twitter}
                      alt="Twitter"
                      className="h-8 w-8 hover:scale-110 transition-transform"
                    />
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 bg-[#0805EC] opacity-0 group-hover:opacity-5 transition-opacity rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetTeam;
