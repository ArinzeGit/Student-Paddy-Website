"use client";
import { useState } from "react";
import CloseQuotation from "./svg-components/CloseQuotation";
import OpenQuotation from "./svg-components/OpenQuotation";
import Image from "next/image";
import LeftArrow from "./svg-components/LeftArrow";
import RightArrow from "./svg-components/RightArrow";

const testimonials = [
  {
    name: "Chidera Igboanugo",
    role: "English Student",
    feedback:
      "The shadowing program was a game-changer for me. It opened doors to my first internship.",
    image: "/images/picture-chidera-igboanugo.png",
  },
  {
    name: "Abdullah Oyetoro",
    role: "System Engineering Student",
    feedback:
      "Thanks to Student Paddy, I now have the experience and confidence to pursue my career in marketing.",
    image: "/images/picture-abdullah-oyetoro.png",
  },
  {
    name: "Fuad Adegoke",
    role: "System Engineering Student",
    feedback:
      "The hands-on experience I gained through Student Paddy gave me the practical skills I needed to land my first job. It was a pivotal moment in my career journey.",
    image: "/images/picture-fuad-adegoke.png",
  },
  {
    name: "Chidera Igboanugo",
    role: "English Student",
    feedback:
      "The shadowing program was a game-changer for me. It opened doors to my first internship.",
    image: "/images/picture-chidera-igboanugo.png",
  },
  {
    name: "Abdullah Oyetoro",
    role: "System Engineering Student",
    feedback:
      "Thanks to Student Paddy, I now have the experience and confidence to pursue my career in marketing.",
    image: "/images/picture-abdullah-oyetoro.png",
  },
  {
    name: "Fuad Adegoke",
    role: "System Engineering Student",
    feedback:
      "The hands-on experience I gained through Student Paddy gave me the practical skills I needed to land my first job. It was a pivotal moment in my career journey.",
    image: "/images/picture-fuad-adegoke.png",
  },
  {
    name: "Chidera Igboanugo",
    role: "English Student",
    feedback:
      "The shadowing program was a game-changer for me. It opened doors to my first internship.",
    image: "/images/picture-chidera-igboanugo.png",
  },
  {
    name: "Abdullah Oyetoro",
    role: "System Engineering Student",
    feedback:
      "Thanks to Student Paddy, I now have the experience and confidence to pursue my career in marketing.",
    image: "/images/picture-abdullah-oyetoro.png",
  },
  {
    name: "Fuad Adegoke",
    role: "System Engineering Student",
    feedback:
      "The hands-on experience I gained through Student Paddy gave me the practical skills I needed to land my first job. It was a pivotal moment in my career journey.",
    image: "/images/picture-fuad-adegoke.png",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;

  const nextSlide = () => {
    if (currentIndex < testimonials.length / cardsPerSlide - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="flex gap-[6%] text-[#FFFFFF] font-[500] text-[44px] font-avenir leading-[1.6] justify-center items-center">
        <OpenQuotation />
        <h2>Testimonials</h2>
        <CloseQuotation />
      </div>

      <div className="relative px-[40px]">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-[50%] translate-y-[-50%] text-[#ECF3F1] hover:text-white"
        >
          <LeftArrow />
        </button>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="w-1/3 p-[1.4%] flex-shrink-0" key={index}>
                <div className="bg-white rounded-[4px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-center h-full">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="px-[3%] pt-[24px] pb-[14px]">
                    <p className="font-[500] text-[16px] font-avenir italic leading-[1.8]">{`"${testimonial.feedback}"`}</p>
                    <p className="font-[900] text-[16px] font-avenir leading-[1.5] mt-[38px]">
                      {testimonial.name}
                    </p>
                    <p className="font-[900] text-[16px] font-avenir leading-[1.5] mt-[11px]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-[50%] translate-y-[-50%] text-[#ECF3F1] hover:text-white"
        >
          <RightArrow />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-[40px]">
        {Array.from(
          { length: Math.ceil(testimonials.length / cardsPerSlide) },
          (_, index) => (
            <span
              key={index}
              className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          )
        )}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
