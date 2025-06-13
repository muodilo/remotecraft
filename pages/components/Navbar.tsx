import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { TiBookmark } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav>
      {/* Desktop Navbar */}
      <div className="md:px-16 px-5 py-3 bg-white z-50 border-b border-primaryColor items-center lg:flex hidden justify-between shadow fixed left-0 right-0">
        <div className="flex items-center gap-15">
          <Logo />
          <ul className="flex items-center gap-5">
            <li><Link className="font-bold" href={"/"}>Home</Link></li>
            <li><Link href={"/"}>Jobs</Link></li>
            <li><Link href={"/"}>Post a Job</Link></li>
            <li><Link href={"/"}>Companies</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <SearchBar />
          <div className="flex items-center gap-2">
            <div className="bg-primaryColor p-2 rounded-lg"><TiBookmark /></div>
            <div className="bg-primaryColor p-2 rounded-lg"><IoSettingsOutline /></div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-primaryColor px-5 py-3 shadow z-50">
        <div className="flex items-center justify-between">
          <Logo />
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Collapsible Menu */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4">
            <Link className="font-medium" href={"/"} onClick={toggleMenu}>Home</Link>
            <Link href={"/"} onClick={toggleMenu}>Jobs</Link>
            <Link href={"/"} onClick={toggleMenu}>Post a Job</Link>
            <Link href={"/"} onClick={toggleMenu}>Companies</Link>

            <div className="flex gap-4 items-center mt-2">
              <div className="bg-primaryColor p-2 rounded-lg"><TiBookmark /></div>
              <div className="bg-primaryColor p-2 rounded-lg"><IoSettingsOutline /></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
