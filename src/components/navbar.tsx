import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon, BellIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const LINKS = [
  { name: "Home", href: "#" },
  { name: "About Me", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Projects", href: "#project" },
];

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a href={href}>
        <div className="px-4 py-2 rounded-lg bg-[#FBEBE2] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
          <Typography
            variant="small"
            color="gray"
            className="font-medium text-gray-800"
          >
            {children}
          </Typography>
        </div>
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50 bg-[#90AEAD] backdrop-blur-md rounded-b-2xl px-4 py-2 mx-auto mt-2 shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo or Title */}
        <Typography color="blue-gray" className="text-xl font-bold">
          My Portfolio
        </Typography>

        {/* Center: Navigation Links (Desktop) */}
        <ul className="hidden lg:flex items-center gap-4 ml-10">
          {LINKS.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              {name}
            </NavItem>
          ))}
        </ul>

        {/* Right: Icons and Profile */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <BellIcon className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer shadow-sm transition">
            <Avatar
              src="/image/timeline.jpeg"
              alt="profile"
              size="sm"
              className="border border-white shadow-md"
            />
            <div className="flex flex-col leading-tight text-sm">
              <span className="font-semibold text-gray-900">sofia wanjiku</span>
              <span className="text-xs text-gray-600">wanjikusofia858@gmail.com</span>
            </div>
            <ChevronDownIcon className="h-4 w-4 text-gray-500 ml-1" />
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Mobile Collapse Nav */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-4 pt-4">
          <ul className="flex flex-col gap-4 mb-4">
            {LINKS.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
