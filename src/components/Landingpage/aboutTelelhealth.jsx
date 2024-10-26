import React from "react";

function AbboutTeleHealths({
  bg = "#0512EC",
  title = "TeleHealth Solutions",
  deatil = "Empowering patients and providers with seamless remote healthcare services.",
  text = "Learn More",
  btnlink = "#",
  textcolor = "#ffffff",
}) {
  return (
    <div
      className="flex justify-center items-center py-24 px-6"
      style={{ backgroundColor: bg }}
    >
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[70rem]">
        <h2
          className="text-[40px] sm:text-[56px] font-semibold text-center"
          style={{ color: textcolor }}
        >
          {title}
        </h2>
        <p
          className="text-[18px] sm:text-[20px] text-center"
          style={{ color: textcolor }}
        >
          {deatil}
        </p>
        <a href={btnlink}>
          <button className="p-3 px-10 bg-main rounded-full text-white mt-5 transition-transform transform hover:scale-105">
            {text}
          </button>
        </a>
      </div>
    </div>
  );
}

export default AbboutTeleHealths;
