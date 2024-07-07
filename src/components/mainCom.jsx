import React from "react";
import Filters from "./filters";
import FilterButtons from "./filtersbuttons";
import {Photogrid} from "./photogrid";

const MainCom = () => {
  return (
    <div className="h-screen w-full flex flex-col sm:flex-row">
      <Filters />
      <div className="h-full w-full sm:h-4/5 sm:w-4/5 flex flex-col">
        <FilterButtons />
        <div className="flex-1 overflow-y-auto">
          <Photogrid />
        </div>
      </div>
    </div>
  );
};

export default MainCom;
