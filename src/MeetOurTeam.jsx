import React from "react";

const teamMembers = [
  {
    name: "V.GIRISH",
    role: "Frontend Developer",
    description:
      "Specializes in creating responsive and interactive user interfaces using React.js and Tailwind CSS. Responsible for designing and implementing the user-facing components of the platform.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "A.NANI",
    role: "Backend Developer",
    description:
      "Expert in building robust backend systems using Node.js and Express.js. Handles API development, database management, and ensures secure payment integration.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "P.MANJUNATH REDDY",
    role: "Data Analyst",
    description:
      "Focuses on data visualization and analytics using tools like D3.js and Chart.js. Provides insights into carbon emission trends and platform-wide impact.",
    image: "https://via.placeholder.com/150",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          The professionals behind our platform, dedicated to delivering
          excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-500"
              />
              <h3 className="text-xl font-medium text-white mb-2">
                {member.name}
              </h3>
              <p className="text-green-500 text-sm font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-gray-300 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
