"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "BERANDA", href: "/" },
  { name: "GIAT SEPEKAN", href: "/giat-sepekan" },
  { name: "BERITA NASIONAL", href: "/berita-nasional" },
  { name: "BERITA DAERAH", href: "/berita-daerah" },
  { name: "PELAYANAN", href: "/pelayanan" },
  { name: "NUSANTARA", href: "/nusantara" },
];

export default function SearchSection() {
  const pathname = usePathname();

  return (
    <div className="w-full lg:w-[75%] mx-auto">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center bg-[#ce3b28] px-4 lg:px-8 py-2">
        <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4 lg:gap-24 sm:justify-end">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className={`text-white text-sm font-semibold relative pb-1 ${pathname === item.href ? "after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""}`}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Icon pencarian (contoh pakai emoji atau bisa ganti ke icon svg/lucide-react) */}
        <button className="text-white text-sm mt-3 lg:mt-0 lg:block hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" />
          </svg>
        </button>
        <div className="md:hidden flex mx-4 items-center mt-2 justify-center">
          <div className="text-[#ce3b28] left-8 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7" />
            </svg>
          </div>

          <input type="text" placeholder="Cari kebutuhan pokok, bahan makanan, dan lainnya..." className="bg-white h-fit w-[300px] pl-10 px-2 py-2 rounded-md focus:outline-none text-[14px]" />
        </div>
      </div>
    </div>
  );
}
