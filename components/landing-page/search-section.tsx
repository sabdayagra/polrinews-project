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
    <div className=" w-[75%] mx-auto">
      <div className="flex justify-between items-center bg-[#ce3b28] px-8 py-2">
        <div className="flex gap-4 lg:gap-24">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className={`text-white text-sm font-semibold relative pb-1 ${pathname === item.href ? "after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""}`}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Icon pencarian (contoh pakai emoji atau bisa ganti ke icon svg/lucide-react) */}
        <button className="text-white text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" />
          </svg>
        </button>
      </div>
    </div>
  );
}
