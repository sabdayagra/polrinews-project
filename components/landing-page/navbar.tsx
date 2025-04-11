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
    <div className="bg-black w-full lg:w-[75%] mx-auto py-4 px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4">
        {/* Kiri: Links + Tanggal */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-row sm:flex-wrap items-center">
          {leftSide?.map((text: any) => (
            <Link key={text.id} href={text.link}>
              <div className="text-white hover:underline text-sm">{text.name}</div>
            </Link>
          ))}
          <TanggalHariIni />
        </div>

        {/* Kanan: Sosial Media & Login */}
        <div className="flex justify-between flex-row lg:gap-3 gap-5">
          {/* Ikon Sosmed */}
          <div className="flex flex-row gap-3 items-center">
            <Image src="/assets/icon/fb.png" alt="facebook" width={1920} height={1080} className="w-[12px] h-[15px]" />
            <Image src="/assets/icon/twitter.png" alt="twitter" width={1920} height={1080} className="w-[12px] h-[15px]" />
            <Image src="/assets/icon/ig.png" alt="instagram" width={1920} height={1080} className="w-[12px] h-[15px]" />
            <Image src="/assets/icon/yt.png" alt="youtube" width={1920} height={1080} className="w-[20px] h-[15px]" />
            <Image src="/assets/icon/vk.png" alt="vk" width={1920} height={1080} className="w-[14px] h-[15px]" />
          </div>
          {/* Login */}
          <div className="flex items-center self-end gap-2">
            <Image src="/assets/icon/lock.png" alt="lock-icon" width={8} height={14} />
            <p className="text-white text-sm">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
