import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide services for farmers, business owners, and users including plant listing, global sales, carbon analytics, sustainability rewards, educational content, and logistics support.",
  },
  {
    question: "How can farmers list their plants?",
    answer:
      "Farmers can create an account on our platform, access their dashboard, and use the Plant Listing feature to add details like species, quantity, price, and availability.",
  },
  {
    question: "What tools are available for business owners?",
    answer:
      "Business owners can browse plants, place orders, manage global sales, analyze demand trends, and contact farmers through our platform.",
  },
  {
    question: "How do users benefit from the platform?",
    answer:
      "Users can purchase plants, track their carbon reduction impact, access sustainability tips, and earn rewards for eco-friendly actions.",
  },
  {
    question: "Is there support for global logistics?",
    answer:
      "Yes, we provide reliable logistics support to ensure smooth shipping of plants both locally and internationally.",
  },
  {
    question: "How secure is the payment process?",
    answer:
      "We use trusted payment gateways like Razorpay or Stripe to ensure secure and hassle-free transactions.",
  },
];

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">FAQs</h2>
        <p className="text-lg text-gray-300 mb-12">
          Frequently Asked Questions to help you understand our platform better.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-md rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">
                  {faq.question}
                </h3>
                <span className="text-2xl text-gray-400">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
