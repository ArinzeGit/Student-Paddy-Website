import React, { useState, useEffect } from "react";

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Clean up on unmount
  }, []);

  const formatDate = (date: Date) => {
    const formattedDate = date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const formattedTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    return `${formattedDate.replace(",", "")}, ${formattedTime}`;
  };

  return (
    <p className="text-[#FFFFFF] font-[500] text-[max(17px,5vw)] tablet:text-[min(44px,calc(1.7vw+19.52px))] font-avenir leading-[1.365] text-center tablet:text-left">
      Today, {formatDate(currentTime)}
    </p>
  );
};

export default RealTimeClock;
