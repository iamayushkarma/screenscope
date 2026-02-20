import { useLayoutEffect } from "react";
import HeroSection from "../components/sections/HeroSection";
import HowItWorks from "../components/sections/HowItWorks";

function HomePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 10% 10%, #dbeafe 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 90% 50%, #ede9fe 0%, transparent 70%)",
          }}
        />
      </div>

      <HeroSection />
      <HowItWorks />
    </div>
  );
}

export default HomePage;
