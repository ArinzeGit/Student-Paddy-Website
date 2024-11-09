"use client";
import LogosMarquee from "@/components/LogosMarquee";
import StatCard from "@/components/StatCard";
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
      <div className="bg-[#0F7863] pt-[46px] pb-[120px] tablet:pb-[140px]">
        <div className="w-[min(86%,1800px)] mx-auto">
          <RealTimeClock />

          <div className="flex flex-col tablet:flex-row gap-[110px] tablet:gap-[2.3%] mt-[50px] tablet:mt-[38px] w-[60%] tablet:w-full mx-auto">
            <StatCard
              percentage={10}
              value="5 Interns"
              name="Total Placements"
              iconSrc="/images/icon-total-placements.svg"
            />

            <StatCard
              percentage={10}
              value="$500"
              name="Total Stipends Disbursed"
              iconSrc="/images/icon-total-stipends.svg"
            />

            <StatCard
              percentage={10}
              value="400 hrs"
              name="Total Up-skilling Hours"
              iconSrc="/images/icon-total-upskilling-hours.svg"
            />
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

      <div className="bg-[#FFFFFF] relative pt-[min(calc(22vw+68px),360px)] pb-[60px]">
        <div className="absolute top-0 left-0 w-full h-[min(22vw,292px)] bg-white transform skew-y-[-6deg] origin-top-left flex flex-col justify-end gap-[25%]">
          <div className=" h-[25%] bg-[#0F7863]" />
          <div className="h-[25%] bg-[#0F7863]" />
        </div>

        <div className="w-[min(86%,1800px)] mx-auto flex gap-[5%] text-[#0F7863] font-[800] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[1.6] justify-center items-center text-center">
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
        <div className="w-[min(86%,1800px)] mx-auto flex flex-col gap-[100px] desktop:gap-[50px]">
          <div className="flex flex-col desktop:flex-row gap-[40px] desktop:gap-[5%] items-center">
            <div className="flex items-start gap-[7%] w-full desktop:w-[50%]">
              <Image
                src="/images/icon-star-in-circle.svg"
                alt="Star icon"
                width={92}
                height={92}
                className="w-[50px] tablet:w-[92px]"
              />
              <div>
                <h2 className="text-[#474747] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[1.6]">
                  Real-World{" "}
                  <span className="text-[#0F7863] font-[800]">Exposure</span>
                </h2>
                <p className="mt-[13px] text-[#474747] font-[800] text-[clamp(15px,calc(1.5vw+9.2px),20px)] font-avenir leading-[1.75]">
                  Get the opportunity to work alongside industry leaders and
                  learn how professionals tackle everyday challenges.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-[26px] inline-block bg-[#0F7863] text-[#FFFFFF] font-[500] text-[clamp(14px,calc(1.17vw+7.2px),18px)] font-avenir leading-[1.38] p-[max(9px,2vw)] tablet:p-[18px] rounded-[50px]"
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
              className="w-[80%] desktop:w-[45%]"
            />
          </div>

          <div className="flex flex-col desktop:flex-row-reverse gap-[40px] desktop:gap-[5%] items-center">
            <div className="flex items-start gap-[7%] w-full desktop:w-[50%] flex-row desktop:flex-row-reverse">
              <Image
                src="/images/icon-star-in-circle.svg"
                alt="Star icon"
                width={92}
                height={92}
                className="w-[50px] tablet:w-[92px]"
              />
              <div className="text-left desktop:text-right">
                <h2 className="text-[#474747] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[1.6]">
                  Guided{" "}
                  <span className="text-[#0F7863] font-[800]">Mentorship</span>
                </h2>
                <p className="mt-[13px] text-[#474747] font-[800] text-[clamp(15px,calc(1.5vw+9.2px),20px)] font-avenir leading-[1.75]">
                  Receive personalized guidance from mentors who help you
                  navigate your career path and provide expert insights.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-[26px] inline-block bg-[#0F7863] text-[#FFFFFF] font-[500] text-[clamp(14px,calc(1.17vw+7.2px),18px)] font-avenir leading-[1.38] p-[max(9px,2vw)] tablet:p-[18px] rounded-[50px]"
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
              className="w-[80%] desktop:w-[45%]"
            />
          </div>

          <div className="flex flex-col desktop:flex-row gap-[40px] desktop:gap-[5%] items-center">
            <div className="flex items-start gap-[7%] w-full desktop:w-[50%]">
              <Image
                src="/images/icon-star-in-circle.svg"
                alt="Star icon"
                width={92}
                height={92}
                className="w-[50px] tablet:w-[92px]"
              />
              <div>
                <h2 className="text-[#474747] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[1.6]">
                  Industry{" "}
                  <span className="text-[#0F7863] font-[800]">Connections</span>
                </h2>
                <p className="mt-[13px] text-[#474747] font-[800] text-[clamp(15px,calc(1.5vw+9.2px),20px)] font-avenir leading-[1.75]">
                  Expand your professional network by connecting with mentors
                  and employers across various industries.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-[26px] inline-block bg-[#0F7863] text-[#FFFFFF] font-[500] text-[clamp(14px,calc(1.17vw+7.2px),18px)] font-avenir leading-[1.38] p-[max(9px,2vw)] tablet:p-[18px] rounded-[50px]"
                >
                  I&apos;m interested
                </Link>
              </div>
            </div>

            <Image
              src="/images/picture-industry-connections.png"
              alt="Industry connections"
              width={1650}
              height={1549}
              className="w-[80%] desktop:w-[45%]"
            />
          </div>

          <div className="flex flex-col desktop:flex-row-reverse gap-[40px] desktop:gap-[5%] items-center">
            <div className="flex items-start gap-[7%] w-full desktop:w-[50%] flex-row desktop:flex-row-reverse">
              <Image
                src="/images/icon-star-in-circle.svg"
                alt="Star icon"
                width={92}
                height={92}
                className="w-[50px] tablet:w-[92px]"
              />
              <div className="text-left desktop:text-right">
                <h2 className="text-[#474747] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[1.6]">
                  Career Pathway{" "}
                  <span className="text-[#0F7863] font-[800]">Analytics</span>
                </h2>
                <p className="mt-[13px] text-[#474747] font-[800] text-[clamp(15px,calc(1.5vw+9.2px),20px)] font-avenir leading-[1.75]">
                  Track your development and progress using our personalized
                  analytics, showing how you’re preparing for your career.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-[26px] inline-block bg-[#0F7863] text-[#FFFFFF] font-[500] text-[clamp(14px,calc(1.17vw+7.2px),18px)] font-avenir leading-[1.38] p-[max(9px,2vw)] tablet:p-[18px] rounded-[50px]"
                >
                  Let&apos;s go!
                </Link>
              </div>
            </div>

            <Image
              src="/images/picture-career-pathway-analytics.png"
              alt="Career pathway analytics"
              width={1524}
              height={1345}
              className="w-[80%] desktop:w-[45%]"
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

        <div className="w-[min(90%,1884px)] mx-auto">
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
