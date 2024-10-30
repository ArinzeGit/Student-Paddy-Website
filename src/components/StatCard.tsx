interface Props {
  percentage: number;
  value: string;
  name: string;
  iconSrc: string;
}

import Image from "next/image";

const StatCard = ({ percentage, value, name, iconSrc }: Props) => {
  return (
    <div className="bg-[white] rounded-[8px] pt-[45px] pb-[5px] tablet:py-[55px] px-[20px] font-avenir flex justify-center items-center relative flex-1">
      <div className="bg-[rgba(11,138,0,0.15)] rounded-[50px] py-0 desktop:py-[3px] px-[5px] absolute top-[15px] tablet:top-[19px] left-[15px] tablet:left-[31px] ">
        <Image
          src="/images/icon-trending-up.svg"
          alt="Trending up"
          width={15}
          height={14}
          className="inline-block mr-[4px]"
        />
        <span className="text-[#0B8A00] font-[400] text-[14px] leading-[1.43]">
          {`${percentage.toFixed(1)}%`}
        </span>
      </div>
      <p className="text-[#000000] font-[500] text-[max(calc(6vw+7.5px),22px)] tablet:text-[4.5vw] desktop:text-[min(56px,calc(3.8vw+1.28px))] leading-[1.37]">
        {value}
      </p>
      <div className="flex gap-[4.5%] absolute w-full justify-start tablet:justify-center items-center bottom-[-35px] tablet:bottom-[-55px] translate-y-[50%]">
        <Image
          src={iconSrc}
          alt={name}
          width={44}
          height={44}
          className="w-[30px] tablet:w-[44px]"
        />
        <span className="text-[#FFFFFF] font-[800] text-[clamp(15px,calc(1.5vw+9.2px),20px)] font-avenir leading-[1.37] tracking-1">
          {name}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
