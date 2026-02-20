import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { ScreenShare, Menu, X } from "lucide-react";
import type { MobileNavType } from "../../types/navbar.types";
import { NAV_LINKS } from "./Navbar";

function DeskTopNavbar({
  showMobileNavBar,
  setShowMobileNavBar,
}: MobileNavType) {
  return (
    <div className="flex items-center max-sm:px-4 justify-between max-w-6xl lg:w-11/12 mx-auto h-full">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <ScreenShare className="text-blue-600 size-5.5 md:size-5" />
        <div className="font-semibold text-[1.7rem] md:text-xl text-gray-900">
          Screenscope
        </div>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-medium">
        {NAV_LINKS.map((navLink, index) => (
          <Link
            key={index}
            to={navLink.href}
            className="hover:text-gray-900 transition-colors"
          >
            {navLink.label}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden text-gray-500 hover:text-gray-900 transition-colors"
        onClick={() => setShowMobileNavBar(!showMobileNavBar)}
      >
        {showMobileNavBar ? (
          <X className="size-5" />
        ) : (
          <Menu className="size-5" />
        )}
      </button>
      {/* CTA */}

      <Button className="hidden md:block">Start Test</Button>
    </div>
  );
}

export default DeskTopNavbar;
