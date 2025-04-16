"use client";
import Image from "next/image";
import { Reveal } from "../ui/Reveal";

const heroArticles = [
  {
    title: "3 Polisi Gugur dalam Penggerebekan Tempat Perjudian Sabung Ayam di Lampung",
    img: "/assets/hero/hero1.png",
    category: "BERITA NASIONAL",
    date: "24 MARET 2025",
    author: "REDAKSI POLRINEWS",
  },
  {
    title: "Polri Tegas Mengatasi Premanisme Berkedok Ormas Demi Perlindungan Investasi Nasional",
    img: "/assets/hero/hero2.png",
    category: "BERITA NASIONAL",
    date: "24 MARET 2025",
  },
  {
    title: "Eks-Kapolres Ngada Ditetapkan sebagai Tersangka dalam Kasus Kekerasan Seksual Anak",
    img: "/assets/hero/hero3.png",
    category: "BERITA NASIONAL",
    date: "24 MARET 2025",
  },
  {
    title: "Sinergi Kebijakan: Jenderal Polri Bersama Polwan dan Wartawan Berbagi Takjil Buka Puasa Gratis di Ramadan",
    img: "/assets/hero/hero4.png",
    category: "BERITA NASIONAL",
    date: "24 MARET 2025",
  },
  {
    title: "Optimalisasi Pengecekan Titik Arus Mudik Idulfitri 1446 H oleh Dirlantas untuk Kelancaran Jelang Lebaran",
    img: "/assets/hero/hero4.png",
    category: "BERITA NASIONAL",
    date: "24 MARET 2025",
  },
];

export default function HeroSection() {
  return (
    <>
      <Reveal>
        {" "}
        <div className="w-full lg:w-[75%] mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {/* Artikel utama */}
            <div className="relative h-[250px] lg:h-[450px] col-span-1 lg:col-span-2">
              {/* Gambar utama */}
              <Image src={heroArticles[0].img} alt={heroArticles[0].title} fill className="object-cover " />

              {/* Overlay transparan */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Konten caption */}
              <div className="absolute bottom-0 p-6 text-white z-10">
                <span className="relative text-white text-xs font-bold pl-2 pr-4 py-0.5 mb-1 w-fit inline-block bg-[#ce3b28] clip-trapezoid">{heroArticles[0].category}</span>
                <h2 className="text-xl lg:text-2xl font-semibold mt-2 leading-tight">{heroArticles[0].title}</h2>
                <div className="text-sm text-gray-300 mt-2">
                  {heroArticles[0].author} &nbsp; ● &nbsp; {heroArticles[0].date}
                </div>
              </div>
            </div>

            {/* Artikel kecil */}
            <div className="grid  grid-cols-2 gap-2">
              {heroArticles.slice(1, 5).map((article, idx) => (
                <div key={idx} className="relative h-[220px] overflow-hidden">
                  {/* Gambar */}
                  <Image src={article.img} alt={article.title} fill className="object-cover" />

                  {/* Overlay transparan */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Konten Artikel */}
                  <div className="absolute inset-0 p-2 flex flex-col justify-end text-white z-10">
                    <span className="relative text-white text-xs font-bold pl-2 pr-4 py-0.5 mb-1 w-fit inline-block bg-[#ce3b28] clip-trapezoid">{article.category}</span>
                    <p className="text-xs lg:text-[19px] font-semibold leading-tight line-clamp-6">{article.title}</p>
                    <span className="text-[10px] text-gray-300 mt-1">{article.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
