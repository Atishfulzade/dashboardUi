import React from "react";
import SearchBar from "../search";
import { PiBell } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";
import user from "../../assets/user.jpg";
const Navbar = () => {
  return (
    <div className="flex w-full h-14 gap-2 md:ps-48 items-center justify-between md:pr-3">
      <SearchBar />
      <div className="flex md:gap-5 gap-2">
        <div className="h-9 w-9 bg-white shadow-md rounded-[10px] hidden md:flex justify-center items-center text-xl text-cyan-800 cursor-pointer hover:bg-cyan-800 hover:text-white transition-colors">
          <PiBell />
        </div>
        <div className="hidden h-9 w-9 bg-white shadow-md rounded-[10px] md:flex justify-center items-center text-xl text-cyan-800 cursor-pointer hover:bg-cyan-800 hover:text-white transition-colors">
          <AiOutlineMessage />
        </div>
        <div className="h-9 hidden w-9 bg-white shadow-md rounded-[10px] md:flex justify-center items-center text-xl text-cyan-800 cursor-pointer hover:bg-cyan-800 hover:text-white transition-colors">
          <TbSettings />
        </div>
        <div className="h-10 w-10 bg-white shadow-md rounded-full overflow-hidden flex justify-center items-center text-xl text-cyan-800 cursor-pointer hover:bg-cyan-800 hover:text-white transition-colors">
          <img src={user} alt="user" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
