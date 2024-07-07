import React from "react";
import img1 from "../assets/img1.jpg";

export const Avatar = ({imgSrc,name}) => {
  return (
    <div className="text-white flex flex-col items-center">
      <div className="h-[80px] w-[80px] overflow-hidden border rounded-full p-1">
        <img
          src={imgSrc}
          className="h-full w-full object-cover rounded-full"
          alt="Avatar"
        />
      </div>
      <div className="w-full text-center overflow-hidden">
        <div className="font-UbuTite text-white text-xs mt-1 truncate">
          {name}
        </div>
      </div>
    </div>
  );
};
