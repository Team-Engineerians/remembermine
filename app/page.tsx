import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/svgs/bg.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
