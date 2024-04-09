import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { RxStopwatch } from "react-icons/rx";
import { BiBarChartSquare } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { GoStack } from "react-icons/go";
import { TbSettings } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const openModal = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div
      className={`md:h-[95vh]   transition-all ${
        openSidebar ? "w-[400px]" : "w-[100px]"
      } bg-cyan-800  ${
        openSidebar ? "rounded-[40px]" : "rounded-[20px]"
      } px-1 md:px-5 py-5 shadow-md`}
    >
      <div className="flex justify-end  text-4xl text-slate-50">
        <IoIosArrowDropleft
          className={`cursor-pointer transition-all ${
            openSidebar
              ? ""
              : "rotate-45  relative left-5 md:left-8 bg-cyan-800 p-1 rounded-full shadow-md"
          }`}
          onClick={openModal}
        />
      </div>
      <div
        className={`flex w-fit ${
          setOpenSidebar ? "justify-start gap-2" : "justify-center ms-3"
        } items-center text-slate-50 text-3xl  font-md mt-2`}
      >
        <BsBoxSeam className="ms-3" />
        <h3 className={openSidebar ? "block" : "hidden"}>Catalix</h3>
      </div>

      <div className="flex flex-col my-10 gap-1 ">
        <div className="flex w-full h-14 hover:bg-cyan-600 justify-start items-center p-5 gap-3 text-slate-100 rounded-[18px] cursor-pointer text-xl md:text-md ">
          <GoHome />
          <p className={openSidebar ? "block" : "hidden"}>Home</p>
        </div>
        <div className="flex w-full h-14 hover:bg-cyan-600 justify-start items-center p-5 gap-3 text-slate-100 rounded-[18px] cursor-pointer text-xl md:text-md">
          <RxStopwatch />
          <p className={openSidebar ? "block" : "hidden"}>Activities</p>
        </div>
        <div className="flex w-full h-14  bg-cyan-600 justify-start items-center p-5 gap-3 text-slate-100 rounded-[18px] cursor-pointer text-xl md:text-md">
          <BiBarChartSquare />
          <p className={openSidebar ? "block" : "hidden"}>Analytics</p>
        </div>
        <div className="flex w-full h-14 hover:bg-cyan-600 justify-start items-center p-5 gap-3 text-slate-100 rounded-[18px] cursor-pointer text-xl md:text-md">
          <IoRocketOutline />
          <p className={openSidebar ? "block" : "hidden"}>Transformation</p>
        </div>
        <div className="flex w-full h-14 hover:bg-cyan-600 justify-start items-center p-5 gap-3 text-slate-100 rounded-[18px] cursor-pointer text-xl md:text-md">
          <GoStack />
          <p className={openSidebar ? "block" : "hidden"}>Library</p>
        </div>
      </div>
      <div className="w-full h-[2px] bg-slate-200"></div>
      <div className="flex flex-col items-center justify-center mt-2 gap-1">
        <div className="flex w-full h-14 hover:bg-cyan-600 justify-start items-center p-5 gap-3 text-slate-100 rounded-[18px] cursor-pointer text-xl md:text-md">
          <TbSettings />
          <p className={openSidebar ? "block" : "hidden"}>Setting</p>
        </div>
        <div className="flex w-full h-14 hover:bg-cyan-600 justify-start items-center p-5 gap-3 text-slate-100 rounded-[18px] cursor-pointer text-xl md:text-md">
          <HiOutlineLogout />
          <p className={openSidebar ? "block" : "hidden"}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
