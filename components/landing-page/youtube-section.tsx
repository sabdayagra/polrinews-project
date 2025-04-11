"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dummyVideos = [
  {
    id: 1,
    title: "Polri Berduka 3 Polisi Gugur Saat Gerebek Judi S...",
    date: "3/18/2025",
    views: 2,
    likes: 0,
    comments: 0,
    thumbnail: "/assets/hero/hero1.png",
    duration: "02:54",
  },
  {
    id: 2,
    title: "Polri Berduka 3 Polisi Gugur Saat Gerebek Judi S...",
    date: "3/18/2025",
    views: 2,
    likes: 0,
    comments: 0,
    thumbnail: "/assets/hero/hero2.png",
    duration: "02:54",
  },
  {
    id: 3,
    title: "Polri Berduka 3 Polisi Gugur Saat Gerebek Judi S...",
    date: "3/18/2025",
    views: 2,
    likes: 0,
    comments: 0,
    thumbnail: "/assets/hero/hero3.png",
    duration: "02:54",
  },
  {
    id: 4,
    title: "Polri Berduka 3 Polisi Gugur Saat Gerebek Judi S...",
    date: "3/18/2025",
    views: 2,
    likes: 0,
    comments: 0,
    thumbnail: "/assets/hero/hero4.png",
    duration: "02:54",
  },
  {
    id: 5,
    title: "Polri Berduka 3 Polisi Gugur Saat Gerebek Judi S...",
    date: "3/18/2025",
    views: 2,
    likes: 0,
    comments: 0,
    thumbnail: "/assets/hero/hero4.png",
    duration: "02:54",
  },
  {
    id: 6,
    title: "Polri Berduka 3 Polisi Gugur Saat Gerebek Judi S...",
    date: "3/18/2025",
    views: 2,
    likes: 0,
    comments: 0,
    thumbnail: "/assets/hero/hero3.png",
    duration: "02:54",
  },
];

export default function YouTubeSection() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="py-6 w-full lg:w-[75%] mx-auto px-4 lg:px-0">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-[18px] font-semibold">
          YOUTUBE<span className="text-red-500">@Polri_News</span>
        </h2>
      </div>

      {/* Channel Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#fafafa] p-4 rounded-md border ">
        <div className="flex items-start gap-4 w-full sm:w-auto">
          <Image src="/assets/icon/Logo.png" alt="YouTube Channel" width={1920} height={1080} className="w-[80px] h-[80px] bg-white p-2 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-[20px]">Polri News</h3>
            <p className="text-xs text-gray-600">2.3K Subscribers • 522 Videos • 252K Views</p>
            <p className="text-xs text-gray-500 mt-1">Official Youtube Account of PolriNews.com | Wadah informasi dan inovasi Polri</p>
          </div>
        </div>
        <div className="sm:ml-auto">
          <button className="flex items-center h-9 rounded overflow-hidden border">
            {/* Kiri: Logo + Label */}
            <div className="flex items-center bg-red-600 px-3 text-white text-sm font-semibold gap-2 py-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M23.5 6.5s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.4 3 12 3 12 3h-.1s-5.4 0-8.6.2c-.4.1-1.3.1-2.1 1C.7 4.9.5 6.5.5 6.5S.3 8.4.3 10.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.8.9 1.9.8 2.4.9 1.8.2 7.4.3 7.4.3s5.4 0 8.6-.2c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 14.7v-6l6.2 3-6.2 3z" />
              </svg>
              <span>YouTube</span>
            </div>

            {/* Kanan: Jumlah subscriber */}
            <div className="bg-white text-gray-800 text-sm px-2 py-2.5 font-semibold">2RB</div>
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {dummyVideos.map((video) => (
          <div key={video.id} className="bg-white border rounded-md overflow-hidden shadow-sm">
            <div className="relative w-full h-48 sm:h-40">
              <Image src={video.thumbnail} alt={video.title} layout="fill" className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="2em" viewBox="0 0 256 180">
                  <path
                    fill="#f00"
                    d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                  />
                  <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
                </svg>
              </div>
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">{video.duration}</div>
            </div>
            <div className="p-3">
              <h4 className="text-sm font-semibold line-clamp-2">{video.title}</h4>
              <p className="text-[11px] text-gray-500 mt-1">{video.date}</p>
              <div className="text-[11px] text-gray-400 mt-1">
                {video.views} Views • {video.likes} Likes • {video.comments} Comments
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" className="w-8 h-8" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        {[1, 2, 3].map((n) => (
          <Button key={n} variant={n === currentPage ? "default" : "outline"} className="w-8 h-8 px-0" onClick={() => setCurrentPage(n)}>
            {n}
          </Button>
        ))}
        <Button variant="outline" size="icon" className="w-8 h-8" onClick={() => setCurrentPage((p) => p + 1)}>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
