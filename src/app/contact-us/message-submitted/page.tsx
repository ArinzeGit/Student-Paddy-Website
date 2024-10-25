"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MessageSubmitted = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/contact-us");
  };

  return (
    <div className="text-center pt-[91px] pb-[47px]">
      <h2 className="text-[#0F7863] font-[500] text-[44px] font-avenir leading-[1.59]">
        We’ve received your submission!
      </h2>
      <button
        onClick={() => handleSubmit()}
        className="px-[111px] py-[27.5px] text-white font-[500] text-[23px] font-avenir leading-[1] bg-[#0F7863] rounded-full focus:outline-none active:ring-4 active:ring-[#c9e0dc] mt-[41px]"
      >
        Submit another response
      </button>
      <div className="flex items-center justify-center">
        <Image
          src="/images/picture-onboarding.png"
          width={1113}
          height={1392}
          alt="Onboarding"
          className="w-[25%]"
        />
        <Image
          src="/images/picture-earn-credentials.png"
          width={1077}
          height={1350}
          alt="Earn Credentials"
          className="w-[25%]"
        />
        <Image
          src="/images/picture-employability.png"
          width={1074}
          height={1341}
          alt="Employability"
          className="w-[25%]"
        />
      </div>
    </div>
  );
};

export default MessageSubmitted;
