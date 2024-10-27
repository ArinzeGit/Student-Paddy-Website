"use client";
import LogosMarquee from "@/components/LogosMarquee";
import CloseQuotation from "@/components/svg-components/CloseQuotation";
import OpenQuotation from "@/components/svg-components/OpenQuotation";
import Image from "next/image";
import Link from "next/link";

const HigherInstitution = () => {
  return (
    <div>
      <div className="bg-white pt-[40px] tablet:pt-[57px] pb-0 tablet:pb-[2vw] desktop:pb-[5vw] ">
        {/*pb-[5vw] is to maintain slicing of image as image moves horizontally with screen width. 100vw*tan(6)=10.52vw would have kept the image completely safe*/}

        <div className="w-[min(86%,1800px)] mx-auto block desktop:flex desktop:gap-[5%]">
          <div className="desktop:w-[min(50%,760px)] pb-[30px]">
            <h1
              className="text-[#474747]
                  font-[800] text-[max(calc(6vw+7.5px),22px)] tablet:text-[4.5vw] desktop:text-[min(56px,calc(3.8vw+1.28px))] font-avenir leading-[1.3] tablet:leading-[1.375]"
            >
              Unlocking Talent, <br className="block tablet:hidden" />
              <span className="text-[#0F7863]">Empowering Students</span>
            </h1>
            <p
              className="text-[#474747]
                  font-[400] text-[clamp(15px,calc(1.5vw+9.2px),20px)] font-avenir leading-[2] tablet:leading-[1.75] mt-[20px] tablet:mt-[36px]"
            >
              At{" "}
              <span className="text-[#0F7863] font-[800]">Student Paddy</span>,
              we see a future where{" "}
              <span className="text-[#0F7863] font-[800]">screen time</span> and{" "}
              <span className="text-[#0F7863] font-[800]">
                practical experience
              </span>{" "}
              will determine{" "}
              <span className="text-[#0F7863] font-[800]">
                career readiness
              </span>{" "}
              for the modern workforce. To this end, we’ve built a comprehensive{" "}
              <span className="text-[#0F7863] font-[800]">
                talent management solution
              </span>{" "}
              that helps Higher Institutions to{" "}
              <span className="text-[#0F7863] font-[800]">securely track</span>,{" "}
              <span className="text-[#0F7863] font-[800]">improve</span> and{" "}
              <span className="text-[#0F7863] font-[800]">validate</span> the{" "}
              <span className="text-[#0F7863] font-[800]">
                career readiness
              </span>{" "}
              of undergraduate students{" "}
              <span className="text-[#0F7863] font-[800]">
                beyond the classroom
              </span>
              .
            </p>
            <div className="desktop:w-[85%]">
              <Link
                href="/contact-us"
                className="mt-[20px] tablet:mt-[52px] block bg-[#0F7863] text-center text-[#FFFFFF] font-[500] text-[clamp(15px,calc(1.5vw+9.2px),23px)] font-avenir leading-[1.2] tablet:leading-[1] p-[max(14px,3vw)] tablet:p-[27.5px] rounded-[50px]"
              >
                Book a Demo
              </Link>
              <div className="flex justify-between items-center gap-[5px] mt-[30px] tablet:mt-[44px]">
                <Link
                  href="https://apps.apple.com/ng/app/student-paddy-digital-campus/id6444663470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[44%]"
                >
                  <Image
                    src="/images/badge-app-store.svg"
                    width={217}
                    height={64}
                    alt="App store download"
                    className="w-full"
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.paddy_bare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[44%]"
                >
                  <Image
                    src="/images/badge-google-play.svg"
                    width={215}
                    height={63}
                    alt="Google play download"
                    className="w-full"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto desktop:mx-0 w-[100%] tablet:w-[80%] desktop:w-[min(50%,650px)] desktop:self-end mt-[0] tablet:mt-[50px] desktop:mt-[0] ">
            <Image
              src="/images/picture-two-students.png"
              width={2781}
              height={2532}
              alt="Two students"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#0F7863] relative z-[1] pt-[50px] pb-[20px]">
        <div className="absolute top-0 left-0 w-full h-[10.6vw] bg-[#0F7863] transform skew-y-[-6deg] origin-top-left z-[-1]">
          {/* h is precisely calculated to make sure the slant section reaches down to the main section as screen gets wider 100vw*tan(6)=10.52vw*/}
          <div className="absolute top-[-1px] left-0 desktop:left-[calc(46vw+60px)] w-full desktop:w-[min(44vw,750px)] ">
            {/* left and w are such that the marks stay like an underline for the image above it and follow it as screen gets wider*/}
            <div className=" h-[min(1.5vw,20px)] bg-white" />
            <div className="h-[min(1.5vw,20px)] bg-white mt-[min(1.87vw,25px)]" />
          </div>
        </div>

        <div className="w-[min(86%,1800px)] mx-auto">
          <div className="flex gap-[2%] tablet:gap-[6%] text-[#FFFFFF] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[3.6] tablet:leading-[1.6] justify-center items-center">
            <OpenQuotation />
            <h2>Up-skilling & Networking</h2>
            <CloseQuotation />
          </div>

          <div className="text-[#FFFFFF] font-[400] text-[clamp(15px,calc(1.5vw+9.2px),20px)] font-avenir leading-[1.75] text-center grid grid-cols-1 tablet:grid-cols-2 justify-items-center gap-y-[50px] desktop:flex desktop:justify-between mt-[16px] tablet:mt-[42px] desktop:mt-[31px]">
            <div className="w-[max(230px,60%)] tablet:w-[80%] desktop:w-[18%]">
              <Image
                src="/images/iphone-upskilling-hours.png"
                width={691}
                height={1377}
                alt="Iphone screenshot"
              />
              <p className="mt-[20px] tablet:mt-[37px]">
                Keep track of up-skilling hours
              </p>
            </div>
            <div className="w-[max(230px,60%)] tablet:w-[80%] desktop:w-[18%]">
              <Image
                src="/images/iphone-skill-based-content.png"
                width={687}
                height={1377}
                alt="Iphone screenshot"
              />
              <p className="mt-[20px] tablet:mt-[37px]">
                Stream skill-based content
              </p>
            </div>
            <div className="w-[max(230px,60%)] tablet:w-[80%] desktop:w-[18%]">
              <Image
                src="/images/iphone-badges.png"
                width={687}
                height={1377}
                alt="Iphone screenshot"
              />
              <p className="mt-[20px] tablet:mt-[37px]">
                Earn badges stored on the blockchain
              </p>
            </div>
            <div className="w-[max(230px,60%)] tablet:w-[80%] desktop:w-[18%]">
              <Image
                src="/images/iphone-campus-peers.png"
                width={687}
                height={1377}
                alt="Iphone screenshot"
              />
              <p className="mt-[20px] tablet:mt-[37px]">
                Connect with campus peers
              </p>
            </div>
          </div>

          <div className="flex gap-[2%] tablet:gap-[6%] mt-[50px] tablet:mt-[81px] text-[#FFFFFF] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[3.6] tablet:leading-[1.6] justify-center items-center">
            <OpenQuotation />
            <h2>Talent Mining & Monitoring</h2>
            <CloseQuotation />
          </div>

          <Image
            src="/images/macbook-talent-mining.png"
            width={2925}
            height={1827}
            alt="Macbook screenshot"
            className="w-[max(90%,260px)] tablet:w-[78%] mt-[10px] tablet:mt-[42px] mx-auto"
          />

          <div className="flex gap-[2%] tablet:gap-[6%] mt-[50px] tablet:mt-[81px] text-[#FFFFFF] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[3.6] tablet:leading-[1.6] justify-center items-center">
            <OpenQuotation />
            <h2>Job Placement & Tracking</h2>
            <CloseQuotation />
          </div>

          <Image
            src="/images/macbook-job-placement.png"
            width={2926}
            height={1827}
            alt="Macbook screenshot"
            className="w-[max(90%,260px)] tablet:w-[78%] mt-[10px] tablet:mt-[42px] mx-auto"
          />
        </div>

        <div className="absolute bottom-0 right-0 w-full h-[10.6vw] bg-[#0F7863] transform skew-y-[-6deg] origin-bottom-right z-[-1]">
          {/* h is precisely calculated to make sure the slant section reaches up to the main section as screen gets wider 100vw*tan(6)=10.52vw*/}
          <div className="absolute bottom-[-1px] right-[calc(46vw+60px)] w-[min(44vw,750px)] ">
            {/* right and w are such that the mark is identical to the first (beneath the picture of two students). Check the first of mark to see reason for the values*/}
            <div className=" h-[min(1.5vw,20px)] bg-[#ECF3F1]" />
            <div className="h-[min(1.5vw,20px)] bg-[#ECF3F1] mt-[min(1.87vw,25px)]" />
          </div>
        </div>
      </div>

      <div className="bg-[#ECF3F1] relative z-[0] pt-[calc(10.52vw+43px)] pb-[50px] desktop:pb-[20px]">
        {/* 100vw*tan(6)=10.52vw is to take care of encroaching slant section and 43px is the extra padding away from slant section */}
        <div className="w-[min(86%,1800px)] mx-auto">
          <div className="desktop:flex desktop:gap-[5%] desktop:items-center">
            <div className="desktop:w-[45%]">
              <h2 className="text-[#0F7863] font-[800] text-[max(17px,5vw)] tablet:text-[33px] font-avenir leading-[1.67]">
                Student Paddy{" "}
                <span className="font-[500] text-[#474747]">is a</span>{" "}
                productivity multiplier{" "}
                <span className="font-[500] text-[#474747]">for</span> Students,
                Higher Institutions
                <span className="font-[500] text-[#474747]">, and</span>{" "}
                Employers
                <span className="font-[500] text-[#474747]"> online.</span>
              </h2>
              <Image
                src="/images/resume-rocket-building.png"
                width={1872}
                height={1827}
                alt="Resume, rocket, building"
                className="w-[80%] mx-auto desktop:hidden"
              />
              <p className="text-[#474747] font-[400] text-[clamp(15px,calc(1.5vw+9.2px),20px)] font-avenir leading-[1.75] mt-[38px]">
                Our{" "}
                <span className="text-[#0F7863] font-[800]">
                  comprehensive approach
                </span>{" "}
                towards talent management{" "}
                <span className="text-[#0F7863] font-[800]">creates value</span>{" "}
                out of the{" "}
                <span className="text-[#0F7863] font-[800]">screen time</span>{" "}
                and{" "}
                <span className="text-[#0F7863] font-[800]">
                  practical experience
                </span>{" "}
                of undergraduate students{" "}
                <span className="text-[#0F7863] font-[800]">
                  outside the classroom{" "}
                </span>
                in order to{" "}
                <span className="text-[#0F7863] font-[800]">
                  tangibly streamline collaboration
                </span>{" "}
                between higher institution and employer placement teams.
                <br />
                <br />
                Unlike other brands,{" "}
                <span className="text-[#0F7863] font-[800]">
                  Student Paddy
                </span>{" "}
                is focused on{" "}
                <span className="text-[#0F7863] font-[800]">
                  empowering students{" "}
                </span>
                for the future of work by using their{" "}
                <span className="text-[#0F7863] font-[800]">screen time</span>{" "}
                and{" "}
                <span className="text-[#0F7863] font-[800]">
                  practical experience
                </span>{" "}
                to determine their
                <span className="text-[#0F7863] font-[800]">
                  {" "}
                  career readiness
                </span>
                .
              </p>
            </div>

            <Image
              src="/images/resume-rocket-building.png"
              width={1872}
              height={1827}
              alt="Resume, rocket, building"
              className="w-[50%] hidden desktop:block"
            />
          </div>

          <div className="desktop:flex desktop:gap-[5%] desktop:items-center mt-[81px]">
            <Image
              src="/images/student-career-journey.png"
              width={1767}
              height={1767}
              alt="Student career journey"
              className="w-[80%] desktop:w-[50%] mx-auto desktop:mx-0"
            />

            <div className="desktop:w-[45%] desktop:mt-0 mt-[80px]">
              <div className="flex gap-[2%] tablet:gap-[6%] text-[#0F7863] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] desktop:text-[min(3vw,44px)] font-avenir leading-[1.6] justify-center items-center">
                <OpenQuotation />
                <h2>
                  Partner <span className="text-[#474747]">with Us</span>
                </h2>
                <CloseQuotation />
              </div>

              <p className="text-[#474747] font-[400] text-[clamp(15px,calc(1.5vw+9.2px),20px)] font-avenir leading-[1.75] pt-[38px]">
                Our
                <span className="text-[#0F7863] font-[800]">
                  {" "}
                  placement programs{" "}
                </span>
                prepare students for success in the modern workforce and to
                <span className="text-[#0F7863] font-[800]">
                  {" "}
                  gain industry skills
                </span>
                ,
                <span className="text-[#0F7863] font-[800]"> get guidance</span>
                , and
                <span className="text-[#0F7863] font-[800]"> get paid </span>
                while studying.
                <br />
                <br />
                We do this by providing
                <span className="text-[#0F7863] font-[800]">
                  {" "}
                  quality work{" "}
                </span>
                from
                <span className="text-[#0F7863] font-[800]"> skilled </span>and
                <span className="text-[#0F7863] font-[800]"> recommended </span>
                undergraduate student interns
                <span className="text-[#0F7863] font-[800]">
                  {" "}
                  under professional{" "}
                </span>
                guidance to support business growth
                <span className="text-[#0F7863] font-[800]"> on a budget </span>
                quarterly.
              </p>

              <Link
                href="/contact-us"
                className="mt-[63px] block bg-[#0F7863] text-center text-[#FFFFFF] font-[500] text-[clamp(15px,calc(1.5vw+9.2px),23px)] font-avenir leading-[1] p-[27.5px] rounded-[50px]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[10.6vw] bg-[#ECF3F1] transform skew-y-[6deg] origin-bottom-left z-[-1]">
          {/* h is precisely calculated to make sure the slant section reaches up to the main section as screen gets wider 100vw*tan(6)=10.52vw*/}
          <div className="absolute bottom-[-1px] left-[calc(46vw+60px)] w-[min(44vw,750px)] ">
            {/* left and w are such that the mark is identical to the first (beneath the picture of two students). Check the first of mark to see reason for the values*/}
            <div className=" h-[min(1.5vw,20px)] bg-white" />
            <div className="h-[min(1.5vw,20px)] bg-white mt-[min(1.87vw,25px)]" />
          </div>
        </div>
      </div>

      <div className="bg-white py-[calc(10.52vw+32px)]">
        {/* 100vw*tan(6)=10.52vw is to take care of encroaching slant section and 32px is the extra padding away from slant section */}
        <LogosMarquee />
      </div>

      <div className="bg-[#ECF3F1] relative z-[0] pt-[20px] pb-[90px]">
        <div className="absolute top-0 right-0 w-full h-[10.6vw] bg-[#ECF3F1] transform skew-y-[6deg] origin-top-right z-[-1]">
          {/* h is precisely calculated to make sure the slant section reaches up to the main section as screen gets wider 100vw*tan(6)=10.52vw*/}
          <div className="absolute top-[-1px] right-[calc(46vw+60px)] w-[min(44vw,750px)] ">
            {/* right and w are such that the mark is identical to the first (beneath the picture of two students). Check the first of mark to see reason for the values*/}
            <div className=" h-[min(1.5vw,20px)] bg-white" />
            <div className="h-[min(1.5vw,20px)] bg-white mt-[min(1.87vw,25px)]" />
          </div>
        </div>

        <div className="w-[min(86%,1800px)] mx-auto">
          <div className="flex gap-[2%] tablet:gap-[6%] text-[#0F7863] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[1.6] justify-center items-center">
            <OpenQuotation />
            <h2>Publications</h2>
            <CloseQuotation />
          </div>

          <ol className="text-[#0F7863] font-[500] text-[clamp(15px,calc(1.5vw+10.2px),30px)] font-avenir italic leading-[1.8] list-decimal list-inside space-y-[27px] mt-[56px]">
            <li>
              <Link href="" className="underline">
                University of Lagos signs MOU with Student Paddy - Vanguard News
              </Link>
            </li>
            <li>
              <Link href="" className="underline">
                University of Lagos signs MOU with Student Paddy - TVC News
              </Link>
            </li>
            <li>
              <Link href="" className="underline">
                University of Lagos signs MOU with Student Paddy - AIT SASBI
              </Link>
            </li>
            <li>
              <Link href="" className="underline">
                Carnegie Mellon University Product Innovation Lab Workshop 2024
                - LinkedIn
              </Link>
            </li>
            <li>
              <Link href="" className="underline">
                Carnegie Mellon University Product Innovation Lab Workshop 2024
                - LinkedIn
              </Link>
            </li>
            <li>
              <Link href="" className="underline">
                Carnegie Mellon University Product Innovation Lab Workshop 2024
                - LinkedIn
              </Link>
            </li>
            <li>
              <Link href="" className="underline">
                Carnegie Mellon University Product Innovation Lab Workshop 2024
                - LinkedIn
              </Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-[#FFFFFF] py-[38px] tablet:py-[92px]">
        <div className="bg-[#E9E4F3] w-[min(86%,1800px)] mx-auto px-[4%] py-[25px] desktop:py-[58px] flex justify-between items-center">
          <p className="text-[#474747] font-[900] text-[clamp(14px,calc(1.5vw+8.4px),30px)] font-avenir leading-[1.16]">
            Want to know more? Reach out to us today!
          </p>
          <Link
            href="/contact-us"
            className="bg-[#5D4C80] block rounded-[50px] px-[44px] py-[18px] text-[#FFFFFF] font-[900] text-[clamp(13px,calc(0.2vw+13.12px),16px)] font-avenir leading-[1.125] shrink-0 ml-[5%]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HigherInstitution;
