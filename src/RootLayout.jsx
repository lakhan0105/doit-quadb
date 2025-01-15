import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Navbar, Sidebar } from "./Components/index";
import { useDispatch } from "react-redux";
import { getUser } from "./features/auth/authSlice";

function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const dispatch = useDispatch();

  function toggleSidebar() {
    setIsSidebarOpen((prev) => {
      return !prev;
    });
  }

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div
        className={`ml-6`}
        style={{ paddingLeft: isSidebarOpen ? "280px" : "0px" }}
      >
        <Outlet />
      </div>
    </main>
  );
}

export default RootLayout;
