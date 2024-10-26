import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-[min(86%,1800px)] min-h-[100px] mx-auto flex items-center justify-between">
      <Image
        src="/images/logo-student-paddy.svg"
        width={184}
        height={53}
        alt="Student paddy logo"
      />
      <div className="flex self-end">
        <NavLink label="Home" href="/home" />
        <NavLink label="Higher Institution" href="/higher-institution" />
        <NavLink label="Contact Us" href="/contact-us" />
      </div>
      <div className="hidden large:flex large:gap-[19px] ">
        <Link
          href="https://apps.apple.com/ng/app/student-paddy-digital-campus/id6444663470"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/badge-app-store.svg"
            width={116}
            height={34}
            alt="App store download"
          />
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.paddy_bare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/badge-google-play.svg"
            width={116}
            height={34}
            alt="Google play download"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
