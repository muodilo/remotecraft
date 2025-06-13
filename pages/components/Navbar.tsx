import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { TiBookmark } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
      {/* for large screen */}
      <div className="md:px-16 px-5 py-3 bg-white z-50 border-b border-primaryColor items-center lg:flex hidden justify-between shadow fixed left-0 right-0 ">
        <div className="flex items-center gap-15">
          <Logo />
          <ul className="flex items-center gap-5">
            <li>
              <Link className="font-bold" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"}>Jobs</Link>
            </li>
            <li>
              <Link href={"/"}>Post aJob</Link>
            </li>
            <li>
              <Link href={"/"}>Companies</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <SearchBar />
          <div className="flex items-center gap-2">
            <div className="bg-primaryColor p-2 rounded-lg">
              <TiBookmark />
            </div>
            <div className="bg-primaryColor p-2 rounded-lg">
              <IoSettingsOutline />
            </div>
          </div>
        </div>
      </div>
      {/* for small screen */}
      <div className="lg:hidden ">

      </div>
    </nav>
  );
};

export default Navbar;
