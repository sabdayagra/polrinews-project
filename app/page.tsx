import ColoumnPPS from "@/components/landing-page/coloumn-pps";
import Footer from "@/components/landing-page/footer";
import HeroSection from "@/components/landing-page/hero-section";
import LatestNews from "@/components/landing-page/latest-news";
import LogoSection from "@/components/landing-page/logo-section";
import Navbar from "@/components/landing-page/navbar";
import SearchSection from "@/components/landing-page/search-section";
import YouTubeSection from "@/components/landing-page/youtube-section";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <SearchSection />
      <LogoSection />
      <HeroSection />
      <LatestNews />
      <ColoumnPPS />
      <YouTubeSection />
      <ColoumnPPS />
      <Footer />
    </div>
  );
}
