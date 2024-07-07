import React from "react";
import { PiGenderIntersexBold } from "react-icons/pi";
import { IoIosShirt } from "react-icons/io";
import { TbArrowsSort } from "react-icons/tb";
import { RiFilter2Fill } from "react-icons/ri";

const FilterButtons = () => {
  return (
    <div className="flex overflow-x-auto space-x-3 sm:justify-around sm:items-center bg-black p-3 ">
      <button className="flex-shrink-0 h-10 w-28 sm:h-12 sm:w-32 lg:w-36 text-base sm:text-lg lg:text-xl text-white hover:text-mainColor2 transition ease-in-out cursor-pointer border border-white flex justify-center items-center rounded-xl">
        <PiGenderIntersexBold className="mr-2" /> Gender
      </button>
      <button className="flex-shrink-0 h-10 w-28 sm:h-12 sm:w-32 lg:w-36 text-base sm:text-lg lg:text-xl text-white hover:text-mainColor2 transition ease-in-out cursor-pointer border border-white rounded-xl flex justify-center items-center">
        <IoIosShirt className="mr-2" /> Collection
      </button>
      <button className="flex-shrink-0 h-10 w-28 sm:h-12 sm:w-32 lg:w-36 text-base sm:text-lg lg:text-xl text-white hover:text-mainColor2 transition ease-in-out cursor-pointer border border-white rounded-xl flex justify-center items-center">
        <TbArrowsSort className="mr-2" />
        Sort By
      </button>
      <button className="flex-shrink-0 h-10 w-28 sm:h-12 sm:w-32 lg:w-36 text-base sm:text-lg lg:text-xl text-white hover:text-mainColor2 transition ease-in-out cursor-pointer border border-white rounded-xl flex justify-center items-center">
        <RiFilter2Fill className="mr-2" /> Filter
      </button>
    </div>
  );
};

export default FilterButtons;
