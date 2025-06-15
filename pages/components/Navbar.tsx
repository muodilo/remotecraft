import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { TiBookmark } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/" },
  { label: "Post a Job", href: "/" },
  { label: "Companies", href: "/" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-primaryColor bg-white shadow">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 py-3 md:px-16">
        <Logo />

        <ul className="hidden items-center gap-5 lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link className="font-medium" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <SearchBar />
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primaryColor p-2">
              <TiBookmark />
            </div>
            <div className="rounded-lg bg-primaryColor p-2">
              <IoSettingsOutline />
            </div>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="text-2xl lg:hidden"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-4 px-5 pb-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={toggleMenu}
                  className="font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <SearchBar />

          <div className="flex items-center gap-4 pt-2">
            <div className="rounded-lg bg-primaryColor p-2">
              <TiBookmark />
            </div>
            <div className="rounded-lg bg-primaryColor p-2">
              <IoSettingsOutline />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
