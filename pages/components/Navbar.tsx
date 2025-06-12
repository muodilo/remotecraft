import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="px-16 py-3 border-b border-primaryColor items-center flex justify-between shadow fixed left-0 right-0">
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
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border px-5 py-2 rounded-lg"
          />
        </div>
    </nav>
  );
};

export default Navbar;
