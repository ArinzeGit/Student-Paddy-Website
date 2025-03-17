"use client";
import { usePathname } from "next/navigation";
import NavLinkDot from "./svg-components/NavLinkDot";
import NavLinkLine from "./svg-components/NavLinkLine";
import Link from "next/link";

interface NavLinkProps {
  label: string;
  href: string;
  onClick: () => void;
}

const NavLink = ({ label, href, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <div className="flex flex-col items-center space-y-[15px] transition-colors duration-300 ease-in-out">
      <Link
        onClick={onClick}
        href={href}
        className={`${
          isActive ? "text-[#0F7863] " : "text-[#474747]"
        } font-[800] text-[clamp(16px,1.6vw,20px)] font-avenir leading-[1.37] mx-[18px]`}
      >
        {label}
      </Link>
      <div className={`${isActive ? "text-[#0F7863] " : "text-[transparent]"}`}>
        <NavLinkDot />
      </div>
      <div
        className={`${
          isActive ? "text-[#0F7863] " : "text-[transparent]"
        } self-stretch`}
      >
        <NavLinkLine />
      </div>
    </div>
  );
};

export default NavLink;
