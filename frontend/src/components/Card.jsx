import React from "react";

const Card = () => {
  return (
    <>
      <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#549bf1]">
        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] 
        hover:bg-gradient-to-r from-blue-500 to-pink-500
        ">

          CARD
           
           
        </div>
        <div className="absolute w-56 h-48 bg-blue-300 blur-[50px] -left-1/2 -top-1/2" />
      </div>
    </>
  );
};

export default Card;
