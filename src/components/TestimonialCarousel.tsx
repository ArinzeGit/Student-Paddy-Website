"use client";
import { useEffect, useState } from "react";
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
      "The hands-on experience I gained through Student Paddy gave me the practical skills I needed to land my first job.",
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
      "The hands-on experience I gained through Student Paddy gave me the practical skills I needed to land my first job.",
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
      "The hands-on experience I gained through Student Paddy gave me the practical skills I needed to land my first job.",
    image: "/images/picture-fuad-adegoke.png",
  },
  {
    name: "Chidera Igboanugo",
    role: "English Student",
    feedback:
      "The shadowing program was a game-changer for me. It opened doors to my first internship.",
    image: "/images/picture-chidera-igboanugo.png",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Set the number of cards per slide based on screen width
  useEffect(() => {
    const updateCardsPerSlide = () => {
      setCardsPerSlide(
        window.innerWidth < 700 ? 1 : window.innerWidth < 1000 ? 2 : 3
      ); // Use 1 for mobile, 2 for tablet, 3 for desktop
      setCurrentIndex(0); //in case the current index won't exist given the new cardsPerSlide
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

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
    <>
      <div className="flex gap-[6%] text-[#FFFFFF] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[1.6] justify-center items-center">
        <OpenQuotation />
        <h2>Testimonials</h2>
        <CloseQuotation />
      </div>

      <div className="relative px-[40px] mt-[80px]">
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
              <div
                style={{ width: `${100 / cardsPerSlide}%` }}
                className="px-[max(1.4%,15px)] flex-shrink-0"
                key={index}
              >
                <div className="bg-white rounded-[4px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-center h-full flex flex-col">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={1050}
                    height={1003}
                    className="h-[72vw] tablet:h-[48vw] desktop:h-[min(24vw,502px)] object-cover rounded-t-[4px]"
                  />
                  <div className="px-[3%] pt-[24px] pb-[14px] grow flex flex-col justify-between">
                    <p className="font-[500] text-[16px] font-avenir italic leading-[1.8]">{`"${testimonial.feedback}"`}</p>
                    <div>
                      <p className="font-[900] text-[16px] font-avenir leading-[1.5] mt-[38px]">
                        {testimonial.name}
                      </p>
                      <p className="font-[900] text-[16px] font-avenir leading-[1.5] mt-[11px]">
                        {testimonial.role}
                      </p>
                    </div>
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
              className={`h-[10.5px] w-[10.5px] mx-[6px] rounded-full cursor-pointer ${
                currentIndex === index ? "bg-[#FFFFFF]" : "bg-[#9DB0A3]"
              }`}
              onClick={() => goToSlide(index)}
            />
          )
        )}
      </div>
    </>
  );
};

export default TestimonialCarousel;
