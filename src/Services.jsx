// Services.jsx
import React from "react";

const Services = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>

      <p className="text-lg mb-4">
        At Ecotree, we offer a range of services aimed at promoting
        sustainability and environmental conservation.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HK8LLWSIIm4?si=2j_nvOQ19SNyb1tC"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <ul className="list-disc pl-6">
        <li>Tree Planting Programs</li>
        <li>Carbon Offset Solutions</li>
        <li>Environmental Education</li>
        <li>Sustainable Development Projects</li>
      </ul>
    </div>
  );
};

export default Services;
