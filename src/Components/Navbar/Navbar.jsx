import React from "react";
import menuIcon from "../../assets/icons/menu.svg";
import searchIcon from "../../assets/icons/search.svg";
import appgridIcon from "../../assets/icons/app-grid.svg";
import moonIcon from "../../assets/icons/ri_moon.svg";

import { Logo, NavBtn } from "../index";

function Navbar({ toggleSidebar }) {
  return (
    <header>
      <nav className="flex items-center justify-between py-1">
        {/* navabar-left */}
        <div className="flex gap-4">
          <button onClick={toggleSidebar}>
            <img src={menuIcon} alt="menuicon img not found" />
          </button>
          <Logo />
        </div>

        {/* navbar-right */}
        <div className="flex gap-6">
          <NavBtn>
            <img src={searchIcon} alt="" />
          </NavBtn>
          <NavBtn>
            <img src={appgridIcon} alt="" />
          </NavBtn>
          <NavBtn>
            <img src={moonIcon} alt="" />
          </NavBtn>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
