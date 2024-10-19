"use client";
import CloseQuotation from "@/components/svg-components/CloseQuotation";
import OpenQuotation from "@/components/svg-components/OpenQuotation";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const HigherInstitution = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //mainly for setting the width of the logo container otherwise it would be 100% because of flex

    const container = document.getElementById("logo-container");

    // Check if the container is not null
    if (container) {
      const logos = container.querySelectorAll(".logo"); // Get all logos

      setTimeout(() => {
        let totalWidth = 0;

        logos.forEach((logo) => {
          const imgElement = logo as HTMLImageElement;

          const width = imgElement.offsetWidth;
          console.log("Logo width:", width); // Log each logo's width
          totalWidth += width;
        });

        totalWidth += 200 * (logos.length - 1); //add the 200px gaps
        console.log("Total width:", totalWidth);
        // Set the container width to match the total logos width

        container.style.width = `${totalWidth}px`;
        // Apply animation based on the total width
        const animationDuration = totalWidth / 150;
        container.style.animation = `scroll ${animationDuration}s linear infinite`;

        // Set the containers to visible once width is set
        // setIsLoaded(true);
      }, 0); // Using a small timeout to ensure images are rendered
    }
  }, []);

  return (
    <div>
      <div className="bg-white pt-[57px] pb-[5vw] ">
        {/*pb-[5vw] is to maintain slicing of image as image moves horizontally with screen width. 100vw*tan(6)=10.52vw would have kept the image completely safe*/}

        <div className="w-[min(86%,1800px)] mx-auto flex gap-[5%]">
          <div className="w-[min(50%,760px)] pb-[10px]">
            <h1
              className="text-[#474747]
                  font-[800] text-[56px] font-avenir leading-[1.375]"
            >
              Unlocking Talent,{" "}
              <span className="text-[#0F7863]">Empowering Students</span>
            </h1>
            <p
              className="text-[#474747]
                  font-[400] text-[20px] font-avenir leading-[1.75] mt-[36px]"
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
            <div className="w-[85%]">
              <button className="mt-[52px] bg-[#0F7863] w-full text-[#FFFFFF] font-[500] text-[23px] font-avenir leading-[1] p-[27.5px] rounded-[50px]">
                Book a Demo
              </button>
              <div className="flex justify-between items-center gap-[5px] mt-[44px]">
                <Link href={""} className="w-[44%]">
                  <Image
                    src={"/images/badge-app-store.svg"}
                    width={217}
                    height={64}
                    alt="App store download"
                    className="w-full"
                  />
                </Link>
                <Link href={""} className="w-[44%]">
                  <Image
                    src={"/images/badge-google-play.svg"}
                    width={215}
                    height={63}
                    alt="Google play download"
                    className="w-full"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[min(50%,650px)] self-end">
            <Image
              src={"/images/picture-two-students.png"}
              width={2781}
              height={2532}
              alt="Two students"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#0F7863] relative z-[1]  py-[20px]">
        <div className="absolute top-0 left-0 w-full h-[10.6vw] bg-[#0F7863] transform skew-y-[-6deg] origin-top-left z-[-1]">
          {/* h is precisely calculated to make sure the slant section reaches down to the main section as screen gets wider 100vw*tan(6)=10.52vw*/}
          <div className="absolute top-[-1px] left-[calc(46vw+60px)] w-[min(44vw,750px)] ">
            {/* left and w are such that the marks stay like an underline for the image above it and follow it as screen gets wider*/}
            <div className=" h-[min(1.5vw,20px)] bg-white" />
            <div className="h-[min(1.5vw,20px)] bg-white mt-[min(1.87vw,25px)]" />
          </div>
        </div>

        <div className="w-[min(86%,1800px)] mx-auto">
          <div className="flex gap-[6%] text-[#FFFFFF] font-[500] text-[44px] font-avenir leading-[1.6] justify-center items-center">
            <OpenQuotation />
            <h2>Up-skilling & Networking</h2>
            <CloseQuotation />
          </div>

          <div className="text-[#FFFFFF] font-[400] text-[20px] font-avenir leading-[1.75] text-center flex justify-between mt-[31px]">
            <div className="w-[18%]">
              <Image
                src={"/images/iphone-upskilling-hours.png"}
                width={691}
                height={1377}
                alt="Iphone screenshot"
              />
              <p className="mt-[37px]">Keep track of up-skilling hours</p>
            </div>
            <div className="w-[18%]">
              <Image
                src={"/images/iphone-skill-based-content.png"}
                width={687}
                height={1377}
                alt="Iphone screenshot"
              />
              <p className="mt-[37px]">Stream skill-based content</p>
            </div>
            <div className="w-[18%]">
              <Image
                src={"/images/iphone-badges.png"}
                width={687}
                height={1377}
                alt="Iphone screenshot"
              />
              <p className="mt-[37px]">Earn badges stored on the blockchain</p>
            </div>
            <div className="w-[18%]">
              <Image
                src={"/images/iphone-campus-peers.png"}
                width={687}
                height={1377}
                alt="Iphone screenshot"
              />
              <p className="mt-[37px]">Connect with campus peers</p>
            </div>
          </div>

          <div className="flex gap-[6%] mt-[81px] text-[#FFFFFF] font-[500] text-[44px] font-avenir leading-[1.6] justify-center items-center">
            <OpenQuotation />
            <h2>Talent Mining & Monitoring</h2>
            <CloseQuotation />
          </div>

          <Image
            src={"/images/macbook-talent-mining.png"}
            width={2925}
            height={1827}
            alt="Macbook screenshot"
            className="w-[78%] mt-[42px] mx-auto"
          />

          <div className="flex gap-[6%] mt-[81px] text-[#FFFFFF] font-[500] text-[44px] font-avenir leading-[1.6] justify-center items-center">
            <OpenQuotation />
            <h2>Job Placement & Tracking</h2>
            <CloseQuotation />
          </div>

          <Image
            src={"/images/macbook-job-placement.png"}
            width={2926}
            height={1827}
            alt="Macbook screenshot"
            className="w-[78%] mt-[42px] mx-auto"
          />
        </div>

        <div className="absolute bottom-0 right-0 w-full h-[10.6vw] bg-[#0F7863] transform skew-y-[-6deg] origin-bottom-right z-[-1]">
          {/* h is precisely calculated to make sure the slant section reaches up to the main section as screen gets wider 100vw*tan(6)=10.52vw*/}
          <div className="absolute bottom-[-1px] right-[calc(46vw+60px)] w-[min(44vw,750px)] ">
            <div className=" h-[min(1.5vw,20px)] bg-[#ECF3F1]" />
            <div className="h-[min(1.5vw,20px)] bg-[#ECF3F1] mt-[min(1.87vw,25px)]" />
          </div>
        </div>
      </div>

      <div className="bg-[#ECF3F1] relative z-[0] pt-[calc(10.52vw+43px)] pb-[20px]">
        {/* 100vw*tan(6)=10.52vw is to take care of encroaching slant section and 43px is the extra padding away from slant section */}
        <div className="w-[min(86%,1800px)] mx-auto">
          <div className="flex gap-[5%] items-center">
            <div className="w-[45%]">
              <h2 className="text-[#0F7863] font-[800] text-[33px] font-avenir leading-[1.67]">
                Student Paddy{" "}
                <span className="font-[500] text-[#474747]">is a</span>{" "}
                productivity multiplier{" "}
                <span className="font-[500] text-[#474747]">for</span> Students,
                Higher Institutions
                <span className="font-[500] text-[#474747]">, and</span>{" "}
                Employers
                <span className="font-[500] text-[#474747]"> online.</span>
              </h2>
              <p className="text-[#474747] font-[400] text-[20px] font-avenir leading-[1.75] pt-[38px]">
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
              src={"/images/resume-rocket-building.png"}
              width={1872}
              height={1827}
              alt="Resume, rocket, building"
              className="w-[50%]"
            />
          </div>

          <div className="flex gap-[5%] items-center mt-[81px]">
            <Image
              src={"/images/student-career-journey.png"}
              width={1767}
              height={1767}
              alt="Student career journey"
              className="w-[50%]"
            />

            <div className="w-[45%]">
              <div className="flex gap-[6%] text-[#0F7863] font-[500] text-[min(3vw,44px)] font-avenir leading-[1.6] justify-center items-center">
                <OpenQuotation />
                <h2>
                  Partner <span className="text-[#474747]">with Us</span>
                </h2>
                <CloseQuotation />
              </div>

              <p className="text-[#474747] font-[400] text-[20px] font-avenir leading-[1.75] pt-[38px]">
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

              <button className="mt-[63px] bg-[#0F7863] w-full text-[#FFFFFF] font-[500] text-[23px] font-avenir leading-[1] p-[27.5px] rounded-[50px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[10.6vw] bg-[#ECF3F1] transform skew-y-[6deg] origin-bottom-left z-[-1]">
          {/* h is precisely calculated to make sure the slant section reaches up to the main section as screen gets wider 100vw*tan(6)=10.52vw*/}
          <div className="absolute bottom-[-1px] left-[calc(46vw+60px)] w-[min(44vw,750px)] ">
            <div className=" h-[min(1.5vw,20px)] bg-white" />
            <div className="h-[min(1.5vw,20px)] bg-white mt-[min(1.87vw,25px)]" />
          </div>
        </div>
      </div>

      <div className="bg-white py-[calc(10.52vw)]">
        {/* 100vw*tan(6)=10.52vw is to take care of encroaching slant section and 32px is the extra padding away from slant section */}
        <div className="flex gap-[6%] text-[#0F7863] font-[500] text-[44px] font-avenir leading-[1.6] justify-center items-center">
          <OpenQuotation />
          <h2>
            Support <span className="text-[#474747]">&</span> Recognition
          </h2>
          <CloseQuotation />
        </div>

        <div className="mt-[4px] overflow-hidden">
          <div
            id="logo-container"
            className="flex items-center gap-[200px] relative my-[50px]"
          >
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-unilag.png"}
              width={248}
              height={233}
              alt="Unilag logo"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-cmu-africa.png"}
              width={227}
              height={191}
              alt="Carnegie Mellon University"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-al-ak-uni.png"}
              width={256}
              height={206}
              alt="Al Akhawayn University"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-sand-tech.png"}
              width={313}
              height={163}
              alt="Sand Technologies"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-afara.png"}
              width={289}
              height={183}
              alt="The Afara Initiative"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-gsv-cup.png"}
              width={338}
              height={176}
              alt="GSV Cup Elite 200"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-microsoft-founders.png"}
              width={379}
              height={107}
              alt="Microsoft for Startups Founders Hub"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-safebridge.png"}
              width={435}
              height={161}
              alt="SafeBridge"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-nvidia.png"}
              width={213}
              height={161}
              alt="Nvidia"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-undp.png"}
              width={301}
              height={147}
              alt="UNDP"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-alx.png"}
              width={250}
              height={185}
              alt="alx ventures"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-reliance.png"}
              width={371}
              height={131}
              alt="Reliance Infosystems"
            />
            <Image
              className="logo"
              loading="eager"
              src={"/images/logo-ikedi.jpg"}
              width={306}
              height={109.3}
              alt="ikedi"
            />
            <div
              id="duplicate-logos"
              className="flex items-center gap-[200px] absolute top-0 left-[calc(100%+200px)]"
            >
              <Image
                loading="eager"
                src={"/images/logo-unilag.png"}
                width={248}
                height={233}
                alt="Unilag logo"
              />
              <Image
                loading="eager"
                src={"/images/logo-cmu-africa.png"}
                width={227}
                height={191}
                alt="Carnegie Mellon University"
              />
              <Image
                loading="eager"
                src={"/images/logo-al-ak-uni.png"}
                width={256}
                height={206}
                alt="Al Akhawayn University"
              />
              <Image
                loading="eager"
                src={"/images/logo-sand-tech.png"}
                width={313}
                height={163}
                alt="Sand Technologies"
              />
              <Image
                loading="eager"
                src={"/images/logo-afara.png"}
                width={289}
                height={183}
                alt="The Afara Initiative"
              />
              <Image
                loading="eager"
                src={"/images/logo-gsv-cup.png"}
                width={338}
                height={176}
                alt="GSV Cup Elite 200"
              />
              <Image
                loading="eager"
                src={"/images/logo-microsoft-founders.png"}
                width={379}
                height={107}
                alt="Microsoft for Startups Founders Hub"
              />
              <Image
                loading="eager"
                src={"/images/logo-safebridge.png"}
                width={435}
                height={161}
                alt="SafeBridge"
              />
              <Image
                loading="eager"
                src={"/images/logo-nvidia.png"}
                width={213}
                height={161}
                alt="Nvidia"
              />
              <Image
                loading="eager"
                src={"/images/logo-undp.png"}
                width={301}
                height={147}
                alt="UNDP"
              />
              <Image
                loading="eager"
                src={"/images/logo-alx.png"}
                width={250}
                height={185}
                alt="alx ventures"
              />
              <Image
                loading="eager"
                src={"/images/logo-reliance.png"}
                width={371}
                height={131}
                alt="Reliance Infosystems"
              />
              <Image
                loading="eager"
                src={"/images/logo-ikedi.jpg"}
                width={459}
                height={164}
                alt="ikedi"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ECF3F1] relative z-[0] pt-[20px] pb-[90px]">
        <div className="absolute top-0 right-0 w-full h-[10.6vw] bg-[#ECF3F1] transform skew-y-[6deg] origin-top-right z-[-1]">
          {/* h is precisely calculated to make sure the slant section reaches up to the main section as screen gets wider 100vw*tan(6)=10.52vw*/}
          <div className="absolute top-[-1px] right-[calc(46vw+60px)] w-[min(44vw,750px)] ">
            <div className=" h-[min(1.5vw,20px)] bg-white" />
            <div className="h-[min(1.5vw,20px)] bg-white mt-[min(1.87vw,25px)]" />
          </div>
        </div>

        <div className="w-[min(86%,1800px)] mx-auto">
          <div className="flex gap-[6%] text-[#0F7863] font-[500] text-[44px] font-avenir leading-[1.6] justify-center items-center">
            <OpenQuotation />
            <h2>Publications</h2>
            <CloseQuotation />
          </div>

          <ol className="text-[#0F7863] font-[500] text-[30px] font-avenir italic leading-[1.8] list-decimal list-inside space-y-[27px] mt-[56px]">
            <li>
              <Link href={""} className="underline">
                University of Lagos signs MOU with Student Paddy - Vanguard News
              </Link>
            </li>
            <li>
              <Link href={""} className="underline">
                University of Lagos signs MOU with Student Paddy - TVC News
              </Link>
            </li>
            <li>
              <Link href={""} className="underline">
                University of Lagos signs MOU with Student Paddy - AIT SASBI
              </Link>
            </li>
            <li>
              <Link href={""} className="underline">
                Carnegie Mellon University Product Innovation Lab Workshop 2024
                - LinkedIn
              </Link>
            </li>
            <li>
              <Link href={""} className="underline">
                Carnegie Mellon University Product Innovation Lab Workshop 2024
                - LinkedIn
              </Link>
            </li>
            <li>
              <Link href={""} className="underline">
                Carnegie Mellon University Product Innovation Lab Workshop 2024
                - LinkedIn
              </Link>
            </li>
            <li>
              <Link href={""} className="underline">
                Carnegie Mellon University Product Innovation Lab Workshop 2024
                - LinkedIn
              </Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-[#FFFFFF] pt-[94px] pb-[90px]">
        <div className="bg-[#E9E4F3] w-[min(86%,1800px)] mx-auto px-[4%] py-[58px] flex justify-between items-center">
          <p className="text-[#474747] font-[900] text-[30px] font-avenir leading-[1.16]">
            Want to know more? Reach out to us today!
          </p>
          <button className="bg-[#5D4C80] rounded-[50px] px-[44px] py-[18px] text-[#FFFFFF] font-[900] text-[16px] font-avenir leading-[1.125]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HigherInstitution;
