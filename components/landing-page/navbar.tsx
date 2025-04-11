"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import TanggalHariIni from "./tanggal-hari-ini";
import Image from "next/image";

const leftSide = [
  {
    id: 1,
    name: "Kode Etik Jurnalistik",
    link: "/",
  },
  {
    id: 2,
    name: "Kebijakan Privasi",
    link: "/",
  },
  {
    id: 3,
    name: "Tentang Kami",
    link: "/",
  },
  {
    id: 4,
    name: "Disclamer",
    link: "/",
  },
  {
    id: 5,
    name: "Pedoman Media Siber",
    link: "/",
  },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="bg-black w-[75%] mx-auto py-[15px] px-2 ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-8 items-center">
          {leftSide?.map((text: any) => (
            <div key={text.id} className="flex flex-row space-y-4">
              <Link href={text.link}>
                <div className="text-white hover:underline text-sm">{text.name}</div>
              </Link>
            </div>
          ))}
          <TanggalHariIni />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-3">
            <Image width={1920} height={1080} alt="icon" src="/assets/icon/fb.png" className="h-[14px] w-[14px]" />
            <Image width={1920} height={1080} alt="icon" src="/assets/icon/twitter.png" className="h-[14px] w-[14px]" />
            <Image width={1920} height={1080} alt="icon" src="/assets/icon/ig.png" className="h-[14px] w-[14px]" />
            <Image width={1920} height={1080} alt="icon" src="/assets/icon/yt.png" className="h-[14px] w-[14px]" />
            <Image width={1920} height={1080} alt="icon" src="/assets/icon/vk.png" className="h-[14px] w-[18px]" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image width={1920} height={1080} alt="lock-icon" src="/assets/icon/lock.png" className="h-[14px] w-[8px]" />
            <p className="text-white text-sm">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
