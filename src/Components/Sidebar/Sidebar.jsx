import React from "react";
import avatar from "../../assets/avatar.png";
import { NavLink } from "react-router";
import { pageListData } from "../../utils/utils";

function Sidebar({ isSidebarOpen }) {
  const width = isSidebarOpen ? "w-[280px]" : "w-0 overflow-hidden";

  return (
    <aside className={`${width} h-full fixed  top-[170px]`}>
      {/* user profile */}
      <div className={`px-4 h-full  bg-[#EEF6EF] relative `}>
        {/* add an img element */}
        <div className="absolute top-[-10%] left-[80px]">
          <img src={avatar} alt="" />
        </div>
        <p className="text-center pt-[60px] mb-3">Hey, ABCD</p>

        {/* page links container */}
        <div className="flex flex-col bg-white py-6">
          {pageListData.map((item) => {
            const { id, img, linkName, path } = item;

            return (
              <NavLink key={id} to={path}>
                <button className="w-full flex items-center px-4 py-2 gap-4 capitalize rounded-md hover:bg-[#357937]/15">
                  <img src={img} alt={`${linkName} not found`} />
                  <span className="font-medium text-sm">{linkName}</span>
                </button>
              </NavLink>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
