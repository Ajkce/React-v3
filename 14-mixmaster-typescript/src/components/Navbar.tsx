import React from "react";
import { NavLink } from "react-router-dom";

const navlinks = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/about",
    name: "About",
  },
  {
    to: "/newsletter",
    name: "Newsletter",
  },
];

const Navbar = () => {
  return (
    <nav className="h-14 bg-[#1d000d] m-auto flex items-center w-full">
      <div className="flex items-center max-container justify-between ">
        <span className=" logo font-extrabold tracking-wider text-3xl">
          Mix Master
        </span>
        <div className="">
          {navlinks.map((link) => (
            <NavLink
              className="font-bold text-white pl-3 active:text-[#ee7330] hover:text-[#ee7330]"
              to={link.to}
              key={link.name}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
