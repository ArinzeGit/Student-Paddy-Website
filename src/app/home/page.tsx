"use client";
import LogosMarquee from "@/components/LogosMarquee";
import CloseQuotation from "@/components/svg-components/CloseQuotation";
import OpenQuotation from "@/components/svg-components/OpenQuotation";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// Import the `RealTimeClock` component dynamically, with SSR disabled
const RealTimeClock = dynamic(() => import("../../components/RealTimeClock"), {
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <div className="bg-[#0F7863] pt-[46px] pb-[114px]">
        <div className="w-[min(86%,1800px)] mx-auto">
          <RealTimeClock />

          <div className="flex gap-[23px] mt-[38px]">
            <div className="bg-[white] rounded-[8px] py-[55px] px-[20px] font-avenir flex justify-center items-center relative flex-1">
              <div className="bg-[rgba(11,138,0,0.15)] rounded-[50px] py-[3px] px-[5px] absolute top-[19px] left-[31px]">
                <Image
                  src="/images/icon-trending-up.svg"
                  alt="Trending up"
                  width={15}
                  height={14}
                  className="inline-block mr-[4px]"
                />
                <span className="text-[#0B8A00] font-[400] text-[14px] leading-[1.43]">
                  10.0%
                </span>
              </div>
              <p className="text-[#000000] font-[500] text-[56px] leading-[1.37]">
                5 Interns
              </p>
              <div className="flex gap-[18px] absolute w-full justify-center items-center bottom-[-33px] left-[50%] translate-x-[-50%] translate-y-[100%]">
                <Image
                  src="/images/icon-total-placements.svg"
                  alt="Total placements"
                  width={44}
                  height={44}
                />
                <span className="text-[#FFFFFF] font-[800] text-[20px] font-avenir leading-[1.37] tracking-1">
                  Total Placements
                </span>
              </div>
            </div>

            <div className="bg-[white] rounded-[8px] py-[55px] px-[20px] font-avenir flex justify-center items-center relative flex-1">
              <div className="bg-[rgba(11,138,0,0.15)] rounded-[50px] py-[3px] px-[5px] absolute top-[19px] left-[31px]">
                <Image
                  src="/images/icon-trending-up.svg"
                  alt="Trending up"
                  width={15}
                  height={14}
                  className="inline-block mr-[4px]"
                />
                <span className="text-[#0B8A00] font-[400] text-[14px] leading-[1.43]">
                  10.0%
                </span>
              </div>
              <p className="text-[#000000] font-[500] text-[56px] leading-[1.37]">
                $500
              </p>
              <div className="flex gap-[18px] absolute w-full justify-center items-center bottom-[-33px] left-[50%] translate-x-[-50%] translate-y-[100%]">
                <Image
                  src="/images/icon-total-stipends.svg"
                  alt="Total Stipends Disbursed"
                  width={44}
                  height={44}
                />
                <span className="text-[#FFFFFF] font-[800] text-[20px] font-avenir leading-[1.37] tracking-1">
                  Total Stipends Disbursed
                </span>
              </div>
            </div>

            <div className="bg-[white] rounded-[8px] py-[55px] px-[20px] font-avenir flex justify-center items-center relative flex-1">
              <div className="bg-[rgba(11,138,0,0.15)] rounded-[50px] py-[3px] px-[5px] absolute top-[19px] left-[31px]">
                <Image
                  src="/images/icon-trending-up.svg"
                  alt="Trending up"
                  width={15}
                  height={14}
                  className="inline-block mr-[4px]"
                />
                <span className="text-[#0B8A00] font-[400] text-[14px] leading-[1.43]">
                  10.0%
                </span>
              </div>
              <p className="text-[#000000] font-[500] text-[56px] leading-[1.37]">
                400 hrs
              </p>
              <div className="flex gap-[18px] absolute w-full justify-center items-center bottom-[-33px] left-[50%] translate-x-[-50%] translate-y-[100%]">
                <Image
                  src="/images/icon-total-upskilling-hours.svg"
                  alt="Total Up-skilling Hours"
                  width={44}
                  height={44}
                />
                <span className="text-[#FFFFFF] font-[800] text-[20px] font-avenir leading-[1.37] tracking-1">
                  Total Up-skilling Hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ECF3F1] py-[9px] px-[3%] text-[#0F7863] font-[800] text-[min(4vw,60px)] font-avenir leading-[1.37] text-center">
        Kickstart Your Career{" "}
        <span className="text-[#474747]">with Real-World Experience</span>
      </div>

      <div className="bg-[#FFFFFF] pt-[55px] pb-[max(calc(6vw-222px),0px)]">
        <div className="w-[min(80%,1800px)] mx-auto">
          <Image
            src="/images/picture-three-professionals.png"
            alt="Three professionals"
            width={3804}
            height={3554}
          />
        </div>
      </div>

      <div className="bg-[#FFFFFF] relative pt-[360px] pb-[60px]">
        <div className="absolute top-0 left-0 w-full h-[292px] bg-white transform skew-y-[-6deg] origin-top-left flex flex-col justify-end gap-[25%]">
          <div className=" h-[25%] bg-[#0F7863]" />
          <div className="h-[25%] bg-[#0F7863]" />
        </div>

        <div className="w-[min(80%,1800px)] mx-auto flex gap-[5%] text-[#0F7863] font-[800] text-[min(3vw,44px)] font-avenir leading-[1.6] justify-center items-center text-center">
          <div>
            <OpenQuotation />
          </div>
          <h2>
            Our placement program{" "}
            <span className="text-[#474747] font-[500]">
              connects students with industry professionals for
            </span>{" "}
            hands-on learning{" "}
            <span className="text-[#474747] font-[500]">and</span> career growth
            <span className="text-[#474747] font-[500]">.</span>
          </h2>
          <div>
            <CloseQuotation />
          </div>
        </div>
      </div>

      <div className="bg-[#ECF3F1] pt-[75px] pb-[calc(10.52vw+32px)]">
        {/* 100vw*tan(6)=10.52vw is to take care of encroaching slant section and 32px is an extra padding away from slant section */}
        <div className="w-[min(86%,1800px)] mx-auto flex flex-col gap-[25px]">
          <div className="flex gap-[5%] items-center">
            <div className="flex items-start gap-[35px] w-[50%]">
              <Image
                src="/images/icon-star-in-circle.svg"
                alt="Star icon"
                width={92}
                height={92}
              />
              <div>
                <h2 className="text-[#474747] font-[500] text-[min(3vw,44px)] font-avenir leading-[1.6]">
                  Real-World{" "}
                  <span className="text-[#0F7863] font-[800]">Exposure</span>
                </h2>
                <p className="mt-[13px] text-[#474747] font-[800] text-[20px] font-avenir leading-[1.75]">
                  Get the opportunity to work alongside industry leaders and
                  learn how professionals tackle everyday challenges.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-[26px] inline-block bg-[#0F7863] text-[#FFFFFF] font-[500] text-[18px] font-avenir leading-[1.38] p-[18px] rounded-[50px]"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <Image
              src="/images/picture-real-world-exposure.png"
              alt="Real world exposure"
              width={1428}
              height={1649}
              className="w-[45%]"
            />
          </div>

          <div className="flex gap-[5%] items-center flex-row-reverse">
            <div className="flex items-start gap-[35px] w-[50%] flex-row-reverse">
              <Image
                src="/images/icon-star-in-circle.svg"
                alt="Star icon"
                width={92}
                height={92}
              />
              <div className="text-right">
                <h2 className="text-[#474747] font-[500] text-[min(3vw,44px)] font-avenir leading-[1.6]">
                  Guided{" "}
                  <span className="text-[#0F7863] font-[800]">Mentorship</span>
                </h2>
                <p className="mt-[13px] text-[#474747] font-[800] text-[20px] font-avenir leading-[1.75]">
                  Receive personalized guidance from mentors who help you
                  navigate your career path and provide expert insights.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-[26px] inline-block bg-[#0F7863] text-[#FFFFFF] font-[500] text-[18px] font-avenir leading-[1.38] p-[18px] rounded-[50px]"
                >
                  Sign me up!
                </Link>
              </div>
            </div>

            <Image
              src="/images/picture-guided-mentorship.png"
              alt="Guided mentorship"
              width={1304}
              height={1538}
              className="w-[45%]"
            />
          </div>

          <div className="flex gap-[5%] items-center">
            <div className="flex items-start gap-[35px] w-[50%]">
              <Image
                src="/images/icon-star-in-circle.svg"
                alt="Star icon"
                width={92}
                height={92}
              />
              <div>
                <h2 className="text-[#474747] font-[500] text-[min(3vw,44px)] font-avenir leading-[1.6]">
                  Industry{" "}
                  <span className="text-[#0F7863] font-[800]">Connections</span>
                </h2>
                <p className="mt-[13px] text-[#474747] font-[800] text-[20px] font-avenir leading-[1.75]">
                  Expand your professional network by connecting with mentors
                  and employers across various industries.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-[26px] inline-block bg-[#0F7863] text-[#FFFFFF] font-[500] text-[18px] font-avenir leading-[1.38] p-[18px] rounded-[50px]"
                >
                  I'm interested
                </Link>
              </div>
            </div>

            <Image
              src="/images/picture-industry-connections.png"
              alt="Industry connections"
              width={1650}
              height={1549}
              className="w-[45%]"
            />
          </div>

          <div className="flex gap-[5%] items-center flex-row-reverse">
            <div className="flex items-start gap-[35px] w-[50%] flex-row-reverse">
              <Image
                src="/images/icon-star-in-circle.svg"
                alt="Star icon"
                width={92}
                height={92}
              />
              <div className="text-right">
                <h2 className="text-[#474747] font-[500] text-[min(3vw,44px)] font-avenir leading-[1.6]">
                  Career Pathway{" "}
                  <span className="text-[#0F7863] font-[800]">Analytics</span>
                </h2>
                <p className="mt-[13px] text-[#474747] font-[800] text-[20px] font-avenir leading-[1.75]">
                  Track your development and progress using our personalized
                  analytics, showing how you’re preparing for your career.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-[26px] inline-block bg-[#0F7863] text-[#FFFFFF] font-[500] text-[18px] font-avenir leading-[1.38] p-[18px] rounded-[50px]"
                >
                  Let's go!
                </Link>
              </div>
            </div>

            <Image
              src="/images/picture-career-pathway-analytics.png"
              alt="Career pathway analytics"
              width={1524}
              height={1345}
              className="w-[45%]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#0F7863] relative z-[0] py-[85px]">
        <div className="absolute top-0 left-0 w-full h-[10.6vw] bg-[#0F7863] transform skew-y-[-6deg] origin-top-left z-[-1]">
          {/* h is precisely calculated to make sure the slant section reaches down to the main section as screen gets wider 100vw*tan(6)=10.52vw*/}
          <div className="absolute top-[-1px] left-[calc(46vw+60px)] w-[min(44vw,750px)] ">
            {/* left and w are such that the mark is identical to the first mark in higher-institution page (beneath the picture of two students). The reason for the values is there*/}
            <div className=" h-[min(1.5vw,20px)] bg-[#ECF3F1]" />
            <div className="h-[min(1.5vw,20px)] bg-[#ECF3F1] mt-[min(1.87vw,25px)]" />
          </div>
        </div>

        <div className="w-[min(90%,1800px)] mx-auto">
          <TestimonialCarousel />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[10.6vw] bg-[#0F7863] transform skew-y-[6deg] origin-bottom-left z-[-1]">
          {/* h is precisely calculated to make sure the slant section reaches down to the main section as screen gets wider 100vw*tan(6)=10.52vw*/}
          <div className="absolute bottom-[-1px] right-[calc(46vw+60px)] w-[min(44vw,750px)] ">
            {/* right and w are such that the mark is identical to the first mark in higher-institution page (beneath the picture of two students). The reason for the values is there*/}
            <div className=" h-[min(1.5vw,20px)] bg-white" />
            <div className="h-[min(1.5vw,20px)] bg-white mt-[min(1.87vw,25px)]" />
          </div>
        </div>
      </div>

      <div className="bg-white pt-[calc(10.52vw+32px)] pb-[32px]">
        {/* 100vw*tan(6)=10.52vw is to take care of encroaching slant section and 32px is an extra padding away from slant section */}
        <LogosMarquee />
      </div>
    </div>
  );
};

export default Home;
