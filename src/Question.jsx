// QnA.jsx
import React from "react";

const Question = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">
        Frequently Asked Questions (Q&A)
      </h1>
      <p className="text-lg mb-4">
        Here are some common questions about Ecotree:
      </p>
      <ul className="list-disc pl-6">
        <li>
          <strong>How does tree planting help the environment?</strong>
          <p>
            Tree planting helps to mitigate climate change by absorbing carbon
            dioxide, preventing soil erosion, and providing habitats for
            wildlife.
          </p>
        </li>
        <li>
          <strong>What types of trees does Ecotree plant?</strong>
          <p>
            We plant a variety of native tree species suited to each region's
            ecosystem, ensuring biodiversity and long-term sustainability.
          </p>
        </li>
        <li>
          <strong>How can I get involved with Ecotree?</strong>
          <p>
            You can get involved by participating in our tree planting programs,
            offsetting your carbon footprint, or spreading awareness about
            environmental issues.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Question;
