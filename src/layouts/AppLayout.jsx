import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className=" grid-background"></div>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <footer className="py-6 text-center bg-[#262626] ">
        <p className="text-sm">Made with ❤️ by Aditya</p>
      </footer>
    </div>
  );
};

export default AppLayout;
