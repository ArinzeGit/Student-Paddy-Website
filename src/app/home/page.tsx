import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="w-[min(86%,1800px)] mx-auto mt-[57px] flex gap-[5%]">
        <div className="w-[min(50%,760px)] pb-[10px]">
          <h1
            className="text-[#474747]
                font-[800] text-[56px] font-roboto leading-[1.375]"
          >
            Unlocking Talent,{" "}
            <span className="text-[#0F7863]">Empowering Students</span>
          </h1>
          <p
            className="text-[#474747]
                font-[400] text-[20px] font-roboto leading-[1.75] mt-[36px]"
          >
            At <span className="text-[#0F7863]">Student Paddy</span>, we see a
            future where <span className="text-[#0F7863]">screen time</span> and{" "}
            <span className="text-[#0F7863]">practical experience</span> will
            determine <span className="text-[#0F7863]">career readiness</span>{" "}
            for the modern workforce. To this end, we’ve built a comprehensive{" "}
            <span className="text-[#0F7863]">talent management solution</span>{" "}
            that helps Higher Institutions to{" "}
            <span className="text-[#0F7863]">securely track</span>,{" "}
            <span className="text-[#0F7863]">improve</span> and{" "}
            <span className="text-[#0F7863]">validate</span> the{" "}
            <span className="text-[#0F7863]">career readiness</span> of
            undergraduate students{" "}
            <span className="text-[#0F7863]">beyond the classroom</span>.
          </p>
          <div className="w-[85%]">
            <button
              className="mt-[52px] bg-[#0F7863] w-full text-[#FFFFFF]
                    font-[500] text-[23px] font-roboto leading-[1] p-[27.5px] rounded-[50px]"
            >
              Get Started!
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
      <div className="bg-[#0F7863] relative mt-[5vw]">
        <div className="absolute top-0 left-0 w-full h-[100px] bg-[#0F7863] transform skew-y-[-6deg] origin-top-left" />
      </div>
    </div>
  );
};

export default Home;
