import { NAV_LINKS } from "./Navbar";
import { Link } from "react-router-dom";
import type { MobileNavType } from "../../types/navbar.types";

function MobileNavMenu({ setShowMobileNavBar }: MobileNavType) {
  return (
    <div className="fixed top-16 left-0 right-0 bottom-0 bg-background-secondary z-100">
      {/* Mobile menu */}
      <div className="p-4">
        <div className="flex flex-col text-2xl gap-5">
          {NAV_LINKS.map((navLink, index) => (
            <Link
              key={index}
              to={navLink.href}
              onClick={() => setShowMobileNavBar(false)}
              className="hover:text-gray-900 transition-colors"
            >
              {navLink.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileNavMenu;
