import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-[7%] pt-[60px] pb-[50px] bg-[#0F7863] flex justify-between">
      <div>
        <Image
          src={"/images/logo-student-paddy-white.svg"}
          width={"227"}
          height={"65"}
          alt="student paddy logo"
        />
        <p className="text-[#FFFFFF] font-[800] text-[16px] font-avenir leading-[1.37] mt-[43px]">
          Unlocking Talent, Empowering Students
        </p>
        <div className="flex gap-[24px] mt-[42px]">
          <Link href={""}>
            <Image
              src={"/images/icon-linkedin.svg"}
              width={"27"}
              height={"27"}
              alt="LinkedIn"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/images/icon-instagram.svg"}
              width={"26"}
              height={"26"}
              alt="Instagram"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/images/icon-twitter.svg"}
              width={"26"}
              height={"26"}
              alt="Twitter"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/images/icon-facebook.svg"}
              width={"25"}
              height={"25"}
              alt="Facebook"
            />
          </Link>
        </div>
      </div>

      <div className="text-[#FFFFFF] font-avenir leading-[1.37] flex gap-[80px]">
        <div className="flex flex-col gap-[33px]">
          <p className="font-[800] text-[20px]">Company</p>
          <Link href={"/home"} className="font-[400] text-[16px]">
            Home
          </Link>
          <Link href={"/higher-institution"} className="font-[400] text-[16px]">
            Higher Institution
          </Link>
          <Link href={"/contact-us"} className="font-[400] text-[16px]">
            Contact Us
          </Link>
          <Link href={""} className="font-[400] text-[16px]">
            Terms of service
          </Link>
        </div>

        <div className="flex flex-col gap-[33px]">
          <p className="font-[800] text-[20px]">Legal</p>
          <Link href={""} className="font-[400] text-[16px]">
            Privacy Policy
          </Link>
          <Link href={""} className="font-[400] text-[16px]">
            Cookie Policy
          </Link>
          <Link href={"/account-deletion"} className="font-[400] text-[16px]">
            Account Deletion
          </Link>
        </div>

        <div className="flex flex-col gap-[33px]">
          <p className="font-[800] text-[20px]">Download</p>
          <Link href={""} className="font-[400] text-[16px]">
            Android
          </Link>
          <Link href={""} className="font-[400] text-[16px]">
            IOS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
