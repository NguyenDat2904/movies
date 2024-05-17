import React from "react";

function Avatar() {
  return (
    <div className="mr-[20px] relative before:absolute before:-right-[30px] before:top-[15px] before:border-t-[15px] before:border-solid before:border-t-transparent before:border-l-[15px] before:border-l-[#1d1e39] before:rotate-45">
      <img
        src="http://127.0.0.1:5500/img/anime/review-1.jpg"
        alt=""
        className="w-[50px] h-[50px] rounded-full"
      />
    </div>
  );
}

export default Avatar;
