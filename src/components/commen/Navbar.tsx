import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import DeskTopNavbar from "./DeskTopNavbar";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "How It Works",
    href: "#how-it-work",
  },
  {
    label: "Support",
    href: "/support",
  },
];
function Navbar() {
  const [showMobileNavBar, setShowMobileNavBar] = useState<boolean>(false);

  const location = useLocation();

  // Close mobile menu on navigation
  useEffect(() => {
    setShowMobileNavBar(false);
  }, [location]);

  useEffect(() => {
    // Handles anchor/hash navigation manually
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileNavBar ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileNavBar]);

  return (
    <>
      <nav className="w-full h-16 border-b border-gray-200 bg-white/60 backdrop-blur-md fixed top-0 z-50">
        {/* Desktop Nav bar */}
        <DeskTopNavbar
          showMobileNavBar={showMobileNavBar}
          setShowMobileNavBar={setShowMobileNavBar}
        />
        {/* Mobile Navbar */}
      </nav>
      {showMobileNavBar && (
        <MobileNavMenu setShowMobileNavBar={setShowMobileNavBar} />
      )}
    </>
  );
}

export default Navbar;
