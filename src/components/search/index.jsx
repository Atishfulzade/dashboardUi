import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { CgCloseO } from "react-icons/cg";

const SearchBar = () => {
  return (
    <div className="relative w-[400px] h-12   flex justify-center items-center">
      <label
        htmlFor="search"
        className="absolute mb-9 bg-white text-cyan-800  left-2 text-sm"
      >
        Search
      </label>
      <RiSearchLine className="absolute left-2 text-cyan-800 " />
      <input
        type="text"
        id="search"
        placeholder="Search by profile,settings,artifact,etc..."
        className="shadow appearance-none border rounded w-full py-2 px-7 text-base text-gray-700 leading-tight"
      />
      <CgCloseO className="absolute right-2 text-cyan-800 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
