import React from "react";
import pie4 from "./assets/pie4.png";
import pie2 from "./assets/pie2.png";
import pie3 from "./assets/pie3.jpg";

const ChartAnalysis = () => {
  return (
    <div className="mt-8">
      <h1 className="text-5xl font-bold mb-4 ml-5 border-b inline-block">
        Emission of Gases and carbon footprint
      </h1>

      <div className="flex flex-wrap justify-center items-start">
        <div className="w-1/8 p-4">
          <img src={pie2} alt="Image 2" className="w-200 h-auto rounded-lg" />
        </div>
        {/* Image 1 */}
        <div className="w-1/8  p-4">
          <img src={pie4} alt="Image 1" className="w-full h-auto rounded-lg" />
        </div>
        <div className=" mx-14 flex justify-center items-center">
          <p className="text-2xl">
            Global green investment and carbon emissions. The bar chart
            represents the amount of green investment (in billions of dollars).
            The line gragh represents the carbon emissions released into the
            atmosphere (in parts per million). Source: Bloomberg.
          </p>
        </div>
        {/* Image 2 */}

        {/* Image 3 */}
        <div className="w-1/8 p-4 mt-5">
          <img src={pie3} alt="Image 3" className="w-full h-auto rounded-lg" />
          <p className="text-2xl">CARBON FOOT PRINT OF DIFFERENT DEPARTMENTS</p>
        </div>
      </div>
    </div>
  );
};

export default ChartAnalysis;
