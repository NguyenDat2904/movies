import React, { Fragment } from "react";
import Avatar from "./avatar";

function Comment() {
  return (
    <Fragment>
      <div className="mb-[15px] flex">
        <Avatar />
        <div className="overflow-hidden bg-[rgb(29,30,57)] p-[18px_30px_16px_20px] rounded-[10px] flex-1">
          <h6 className="text-[16px] font-bold text-white mb-[10px] leading-[1.2]">
            Chris Curry -{" "}
            <span className="font-normal text-[rgb(183,183,183)] inline-block">
              1 Hour ago
            </span>
          </h6>
          <p className="font-normal text-[rgb(183,183,183)] leading-[23px] mb-[0px]">{`whachikan Just noticed that someone categorized this as belonging to the genre
                                    "demons" LOL`}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Comment;
