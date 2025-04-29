import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-5xl font-extrabold text-green-500 mb-6">
        About Ecotree
      </h1>
      <p className="text-lg text-gray-300 max-w-4xl text-center mb-12">
        Ecotree is a sustainable initiative committed to combating climate
        change and preserving our planet's ecosystems. We aim to create a more
        eco-friendly world through strategic actions and community involvement.
      </p>

      <h2 className="text-3xl font-semibold text-green-500 mb-6">
        Our Mission
      </h2>
      <p className="text-lg text-gray-300 max-w-4xl text-center mb-12">
        Our mission is to empower individuals and organizations to take action
        towards a greener future through tree planting, carbon offsetting, and
        environmental education. Together, we can combat climate change and
        protect biodiversity.
      </p>

      <h3 className="text-2xl font-semibold text-green-500 mb-4">What We Do</h3>
      <ul className="list-disc list-inside text-lg text-gray-300 mb-12">
        <li>🌱 Planting trees to restore natural habitats.</li>
        <li>🌍 Offsetting carbon emissions to reduce our carbon footprint.</li>
        <li>
          📚 Educating communities about the importance of sustainability.
        </li>
        <li>🤝 Collaborating with local organizations for greater impact.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-green-500 mb-4">
        Impact of Tree Planting
      </h3>
      <p className="text-lg text-gray-300 max-w-4xl text-center mb-12">
        Trees are crucial in mitigating climate change. They absorb carbon
        dioxide, release oxygen, and provide habitats for wildlife. Our tree
        planting initiatives contribute to restoring ecosystems, promoting
        biodiversity, and improving the overall health of the planet.
      </p>

      <h3 className="text-2xl font-semibold text-green-500 mb-4">
        The Importance of Carbon Offsetting
      </h3>
      <p className="text-lg text-gray-300 max-w-4xl text-center mb-12">
        Carbon offsetting allows individuals and businesses to compensate for
        their carbon emissions by investing in projects that reduce or capture
        an equivalent amount of CO2. This is a critical step toward achieving
        carbon neutrality and minimizing global warming.
      </p>

      <h3 className="text-2xl font-semibold text-green-500 mb-4">
        How You Can Get Involved
      </h3>
      <p className="text-lg text-gray-300 max-w-4xl text-center mb-4">
        There are many ways you can contribute to our mission and make a
        difference:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-300 mb-12">
        <li>🌳 Participate in our tree planting events and initiatives.</li>
        <li>💚 Offset your carbon footprint by supporting our programs.</li>
        <li>📖 Attend workshops and webinars on sustainability practices.</li>
        <li>📢 Spread awareness about climate change and sustainability.</li>
      </ul>

      <p className="text-lg text-gray-300 max-w-4xl text-center mb-8">
        Together, we can take action to ensure a healthier and greener planet
        for future generations!
      </p>

      <Link
        to="/dashboard"
        className="bg-green-500 text-white hover:bg-green-600 rounded-lg px-6 py-3 text-xl font-medium transition-all duration-300 transform hover:scale-105"
      >
        Get Involved
      </Link>
    </div>
  );
};

export default About;
