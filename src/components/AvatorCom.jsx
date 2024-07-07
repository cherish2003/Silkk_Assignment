import React from "react";
import { Avatar } from "./avatar";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const AvatarCom = () => {
  return (
    <div className="w-full h-1/5 overflow-x-scroll no-scrollbar scroll-smooth bg-mainColor flex justify-between space-x-4 items-center border-b-2 border-custom1">
      <Avatar name="Akshay" imgSrc={img1} />
      <Avatar name="Bipin" imgSrc={img2} />
      <Avatar name="Om" imgSrc={img3} />
      <Avatar name="Gourav" imgSrc={img4} />
      <Avatar name="Akshay" imgSrc={img1} />
      <Avatar name="Bipin" imgSrc={img2} />
      <Avatar name="Om" imgSrc={img3} />
      <Avatar name="Gourav" imgSrc={img4} />
      <Avatar name="Akshay" imgSrc={img1} />
      <Avatar name="Bipin" imgSrc={img2} />
      <Avatar name="Om" imgSrc={img3} />
      <Avatar name="Gourav" imgSrc={img4} />
      <Avatar name="Akshay" imgSrc={img1} />
      <Avatar name="Bipin" imgSrc={img2} />
      <Avatar name="Om" imgSrc={img3} />
      <Avatar name="Gourav" imgSrc={img4} />
      <Avatar name="Akshay" imgSrc={img1} />
      <Avatar name="Bipin" imgSrc={img2} />
      <Avatar name="Om" imgSrc={img3} />
      <Avatar name="Gourav" imgSrc={img4} />
    </div>
  );
};

export default AvatarCom;
