"use client";

import Image from "next/image";
import React from "react";
import { Reveal } from "../ui/Reveal";

const LogoSection = () => {
  return (
    <>
      <Reveal>
        <div className="w-full lg:w-[75%] mx-auto bg-[#f7f7f7]">
          <div className="py-3 flex justify-center">
            <Image width={1920} height={1080} alt="logo" className="w-[90px] h-[80px]" src="/assets/icon/Logo.png" />
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default LogoSection;
