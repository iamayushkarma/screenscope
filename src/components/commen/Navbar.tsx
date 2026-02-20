import { ScreenShare } from "lucide-react";
import { Link } from "react-router-dom";
import StartTestButton from "../ui/ShimmerButton";
import Button from "../ui/Button";

function Navbar() {
  const NAV_LINKS = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "How It Works",
      href: "#how-it-works",
    },
    {
      label: "Support",
      href: "#support",
    },
  ];
  return (
    <nav className="w-full h-16 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between w-11/12 max-w-6xl mx-auto h-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ScreenShare className="text-blue-600 size-5" />
          <span className="font-semibold text-xl text-gray-900">
            Screenscope
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-sm text-gray-500 font-medium">
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

        {/* CTA */}
        <Button>Start Test</Button>
      </div>
    </nav>
  );
}

export default Navbar;
