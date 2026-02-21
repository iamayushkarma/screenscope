import { NAV_LINKS } from "./Navbar";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import type { MobileNavType } from "../../types/navbar.types";
import { handleHashClick } from "../../utils/functions/HandleHashClick";

function MobileNavMenu({ setShowMobileNavBar }: MobileNavType) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed top-16 left-0 right-0 bottom-0 bg-background-secondary z-100">
      <div className="p-4">
        <div className="flex flex-col text-lg font-medium gap-5">
          {NAV_LINKS.map((navLink, index) =>
            navLink.href.startsWith("#") ? (
              <a
                key={index}
                href={navLink.href}
                onClick={(e) =>
                  handleHashClick(e, navLink.href, navigate, location.pathname)
                }
                className="text-text-muted hover:text-text-secondary transition-colors"
              >
                {navLink.label}
              </a>
            ) : (
              <NavLink
                key={index}
                to={navLink.href}
                end={navLink.href === "/"}
                onClick={() => setShowMobileNavBar(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-secondary transition-colors"
                }
              >
                {navLink.label}
              </NavLink>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileNavMenu;
