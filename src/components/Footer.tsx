import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-[7%] pt-[60px] pb-[50px] bg-[#0F7863] flex desktop:justify-between flex-col-reverse desktop:flex-row gap-[100px] desktop:gap-0">
      <div className="flex flex-col items-center desktop:items-start">
        <Image
          src="/images/logo-student-paddy-white.svg"
          width={"227"}
          height={"65"}
          alt="student paddy logo"
        />
        <p className="text-[#FFFFFF] font-[800] text-[16px] font-avenir leading-[1.37] mt-[43px] text-center">
          Unlocking Talent, Empowering Students
        </p>
        <div className="flex gap-[24px] mt-[42px]">
          <Link
            href="https://www.linkedin.com/company/student-paddy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icon-linkedin.svg"
              width={"27"}
              height={"27"}
              alt="LinkedIn"
            />
          </Link>
          <Link
            href="https://instagram.com/studentpaddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icon-instagram.svg"
              width={"26"}
              height={"26"}
              alt="Instagram"
            />
          </Link>
          <Link
            href="https://twitter.com/studentpaddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icon-twitter.svg"
              width={"26"}
              height={"26"}
              alt="Twitter"
            />
          </Link>
        </div>
      </div>

      <div className="text-[#FFFFFF] font-avenir leading-[1.37] flex flex-col tablet:flex-row items-center tablet:items-start justify-between gap-y-[70px] gap-x-[80px]">
        <div className="flex flex-col gap-[33px] items-center tablet:items-start">
          <p className="font-[800] text-[20px]">Company</p>
          <Link href="/home" className="font-[400] text-[16px]">
            Home
          </Link>
          <Link href="/higher-institution" className="font-[400] text-[16px]">
            Higher Institution
          </Link>
          <Link href="/contact-us" className="font-[400] text-[16px]">
            Contact Us
          </Link>
          <Link href="" className="font-[400] text-[16px]">
            Terms of service
          </Link>
        </div>

        <div className="flex flex-col gap-[33px] items-center tablet:items-start">
          <p className="font-[800] text-[20px]">Legal</p>
          <Link href="" className="font-[400] text-[16px]">
            Privacy Policy
          </Link>
          <Link href="" className="font-[400] text-[16px]">
            Cookie Policy
          </Link>
        </div>

        <div className="flex flex-col gap-[33px] items-center tablet:items-start">
          <p className="font-[800] text-[20px]">Download</p>
          <Link
            href="https://play.google.com/store/apps/details?id=com.paddy_bare"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[400] text-[16px]"
          >
            Android
          </Link>
          <Link
            href="https://apps.apple.com/ng/app/student-paddy-digital-campus/id6444663470"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[400] text-[16px]"
          >
            IOS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
