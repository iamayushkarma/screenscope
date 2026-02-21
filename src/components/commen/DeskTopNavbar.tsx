import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import { ScreenShare, Menu, X } from "lucide-react";
import type { MobileNavType } from "../../types/navbar.types";
import { NAV_LINKS } from "./Navbar";
import { useScreenShare } from "../../hooks/useScreenShare";
import { handleHashClick } from "../../utils/functions/HandleHashClick";

function DeskTopNavbar({
  showMobileNavBar,
  setShowMobileNavBar,
}: MobileNavType) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isSupported } = useScreenShare();

  // Starts screen test
  const handleStart = () => {
    if (!isSupported) return;
    navigate("/screen-test");
  };

  return (
    <div className="flex items-center max-sm:px-4 justify-between max-w-6xl lg:w-11/12 mx-auto h-full">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
        <ScreenShare className="text-blue-600 size-4.5 md:size-5" />
        <div className="font-semibold text-[1.2rem] md:text-xl text-gray-900">
          Screenscope
        </div>
      </NavLink>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {NAV_LINKS.map((navLink, index) =>
          navLink.href.startsWith("#") ? (
            <a
              key={index}
              href={navLink.href}
              onClick={(e) =>
                handleHashClick(e, navLink.href, navigate, location.pathname)
              }
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              {navLink.label}
            </a>
          ) : (
            <NavLink
              key={index}
              to={navLink.href}
              end={navLink.href === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900 transition-colors"
              }
            >
              {navLink.label}
            </NavLink>
          ),
        )}
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
      <Button onClick={handleStart} className="hidden md:block">
        Start Test
      </Button>
    </div>
  );
}

export default DeskTopNavbar;
