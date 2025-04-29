import React from "react";

const services = [
  {
    id: 1,
    title: "Expert Farmers",
    description:
      "Over 30 years of experience in nurturing and growing a wide variety of plants, ensuring top quality for your needs.",
    icon: "🌱",
  },
  {
    id: 2,
    title: "Global Sales",
    description:
      "Connecting business owners with international markets, enabling seamless global plant trade.",
    icon: "🌍",
  },
  {
    id: 3,
    title: "Carbon Analytics",
    description:
      "Empowering users with tools to track and reduce their carbon footprint effectively.",
    icon: "📊",
  },
  {
    id: 4,
    title: "Sustainability Rewards",
    description:
      "Encouraging eco-friendly habits with rewards for sustainable actions and purchases.",
    icon: "🎁",
  },
  {
    id: 5,
    title: "Educational Content",
    description:
      "Learn the best practices for tree plantation and environmental sustainability with our resources.",
    icon: "📚",
  },
  {
    id: 6,
    title: "Logistics Support",
    description:
      "Ensuring smooth and reliable shipping for plants, both locally and globally.",
    icon: "🚚",
  },
];

const Services = () => {
  return (
    <div className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6">
          Our Services
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Leveraging 30 years of experience to provide exceptional services for
          farmers, business owners, and users.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 text-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
