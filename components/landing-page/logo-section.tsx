import Image from "next/image";
import React from "react";

const LogoSection = () => {
  return (
    <div className="w-full lg:w-[75%] mx-auto bg-[#f7f7f7]">
      <div className="py-3 flex justify-center">
        <Image width={1920} height={1080} alt="logo" className="w-[90px] h-[80px]" src="/assets/icon/Logo.png" />
      </div>
    </div>
  );
};

export default LogoSection;
