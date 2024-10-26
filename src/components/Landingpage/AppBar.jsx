import React from "react";
import baricon from "../../assets/svgs/hamb.svg";

function AppBar() {
  return (
    <div className="h-14  flex justify-between items-center px-10">
      <div className="text-main text-[20px] cursor-pointer">Owldoc.io</div>
      <div className="text-main text-[20px] cursor-pointer">Get Started</div>
      <div>
        <img src={baricon} height={20} width={20} className="text-main" />
      </div>
    </div>
  );
}

export default AppBar;
