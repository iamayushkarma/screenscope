import { useLayoutEffect } from "react";
import HeroSection from "../components/sections/HeroSection";

function HomePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
    </div>
  );
}

export default HomePage;
