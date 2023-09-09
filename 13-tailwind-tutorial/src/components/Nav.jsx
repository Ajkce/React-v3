import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const Nav = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    document.body.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          {isDark ? (
            <BsFillSunFill
              className="text-3xl mr-6 text-slate-700 "
              onClick={toggleDark}
            ></BsFillSunFill>
          ) : (
            <BsFillMoonStarsFill
              className="text-3xl mr-6 text-slate-700 "
              onClick={toggleDark}
            ></BsFillMoonStarsFill>
          )}
        </div>
        <div>
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
