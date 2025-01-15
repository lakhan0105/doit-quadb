import React from "react";
import logomark from "../../assets/icons/logomark.svg";

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <img src={logomark} alt="logo not found" />
      <h2 className="logo-text text-[#3F9142] font-bold text-[24px]">DoIt</h2>
    </div>
  );
}

export default Logo;
