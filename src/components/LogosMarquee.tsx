import CloseQuotation from "./svg-components/CloseQuotation";
import OpenQuotation from "./svg-components/OpenQuotation";
import Image from "next/image";

const logos = [
  {
    name: "University of Lagos",
    width: 248,
    height: 233,
    src: "/images/logo-unilag.png",
  },
  {
    name: "Carnegie Mellon University",
    width: 227,
    height: 191,
    src: "/images/logo-cmu-africa.png",
  },
  {
    name: "Al Akhawayn University",
    width: 256,
    height: 206,
    src: "/images/logo-al-ak-uni.png",
  },
  {
    name: "Sand Technologies",
    width: 313,
    height: 163,
    src: "/images/logo-sand-tech.png",
  },
  {
    name: "The Afara Initiative",
    width: 289,
    height: 183,
    src: "/images/logo-afara.png",
  },
  {
    name: "GSV Cup Elite 200",
    width: 338,
    height: 176,
    src: "/images/logo-gsv-cup.png",
  },
  {
    name: "Microsoft for Startups",
    width: 379,
    height: 107,
    src: "/images/logo-microsoft-founders.png",
  },
  {
    name: "SafeBridge",
    width: 435,
    height: 161,
    src: "/images/logo-safebridge.png",
  },
  {
    name: "Nvidia",
    width: 213,
    height: 161,
    src: "/images/logo-nvidia.png",
  },
  {
    name: "UNDP",
    width: 301,
    height: 147,
    src: "/images/logo-undp.png",
  },
  {
    name: "ALX Ventures",
    width: 250,
    height: 185,
    src: "/images/logo-alx.png",
  },
  {
    name: "Reliance Infosystems",
    width: 371,
    height: 131,
    src: "/images/logo-reliance.png",
  },
  {
    name: "Ikedi",
    width: 360,
    height: 117,
    src: "/images/logo-ikedi.png",
  },
];

const LogosMarquee = () => {
  const handleLogoLoad = () => {
    //mainly for setting the width of the logo container otherwise it would be 100% because of flex
    const container = document.getElementById("logo-container");

    if (container) {
      const firstSetOfLogos = container.querySelectorAll(".first-set-logo");

      let totalWidth = 0;

      firstSetOfLogos.forEach((logo) => {
        const imgElement = logo as HTMLImageElement;
        const width = imgElement.offsetWidth;
        console.log("Logo width:", width);
        totalWidth += width;
      });

      totalWidth += 200 * (firstSetOfLogos.length - 1); // Add 200px gaps
      console.log("Total width:", totalWidth);
      container.style.width = `${totalWidth}px`;

      const animationDuration = totalWidth / 150;
      container.style.animation = `scroll ${animationDuration}s linear infinite`;
    }
  };

  return (
    <>
      <div className="flex gap-[6%] text-[#0F7863] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[1.6] justify-center items-center">
        <OpenQuotation />
        <h2>
          Support <span className="text-[#474747]">&</span> Recognition
        </h2>
        <CloseQuotation />
      </div>

      <div className="overflow-hidden">
        <div
          id="logo-container"
          className="flex items-center gap-[200px] relative my-[50px]"
        >
          {logos.map((logo, index) => (
            <Image
              key={index}
              onLoad={handleLogoLoad}
              className="first-set-logo"
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.name}
              loading="eager"
            />
          ))}

          <div
            id="duplicate-logos"
            className="flex items-center gap-[200px] absolute top-0 left-[calc(100%+200px)]"
          >
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogosMarquee;
