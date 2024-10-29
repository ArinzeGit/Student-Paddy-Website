"use client";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[min(86%,1800px)] min-h-[100px] mx-auto flex items-center justify-between relative">
      <Image
        src="/images/logo-student-paddy.svg"
        width={184}
        height={53}
        alt="Student paddy logo"
        className="z-[11]"
      />

      <div
        className={`fixed tablet:static inset-0 z-10 bg-white tablet:bg-transparent bg-opacity-70 backdrop-blur-md flex flex-col tablet:flex-row justify-center items-center gap-y-6 tablet:self-end transition-[clip-path,opacity] duration-[400ms] ${
          isOpen
            ? "clip-path-circle-open opacity-100"
            : "clip-path-circle-closed opacity-0"
        } tablet:clip-path-none tablet:opacity-100`}
      >
        <NavLink label="Home" href="/home" onClick={() => setIsOpen(false)} />
        <NavLink
          label="Higher Institution"
          href="/higher-institution"
          onClick={() => setIsOpen(false)}
        />
        <NavLink
          label="Contact Us"
          href="/contact-us"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <div className="hidden desktop:flex desktop:gap-[19px] ">
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

      <div className="absolute top-[50%] translate-y-[-50%] right-0 z-[11] tablet:hidden">
        <HamburgerButton onClick={toggleMenu} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default NavBar;
