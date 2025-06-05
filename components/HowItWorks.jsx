"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Enter Location",
      description: "Select the city or area you need a place in",
      graphic: assets.howItWorks.enter
    },
    {
      id: 2,
      title: "Explore Properties",
      description: "View available rooms, PGs, or flats with photos and info",
      graphic: assets.howItWorks.search
    },
    {
      id: 3,
      title: "Contact Owner",
      description: "Like one? Go to its page and reach out directly",
      graphic: assets.howItWorks.contact
    }
  ];

  const handleCardClick = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            How BachHouse Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to find your perfect bachelor accommodation
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {steps.map((step) => (
            <div 
              key={step.id} 
              onClick={() => handleCardClick(step.id)}
              className={`flex flex-col items-center bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full cursor-pointer ${
                activeStep === null
                  ? "hover:shadow-lg"
                  : activeStep === step.id && step.id === 1
                  ? "transform scale-[1.02] sm:scale-105 z-10 shadow-lg"
                  : activeStep !== null && activeStep !== step.id
                  ? "opacity-70"
                  : ""
              }`}
            >
              {/* Step Number */}
              <div className={`text-2xl sm:text-3xl font-bold mt-4 sm:mt-6 ${
                activeStep === step.id ? "text-indigo-600" : "text-gray-300"
              }`}>
                0{step.id}
              </div>
              
              {/* Graphic */}
              <div className="relative w-full h-40 sm:h-48 md:h-56 px-4 sm:px-6 mt-3 sm:mt-4">
                <Image
                  src={step.graphic}
                  alt={step.title}
                  fill
                  className="object-contain sm:object-cover rounded-md sm:rounded-lg"
                  quality={100}
                />
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 text-center w-full">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}