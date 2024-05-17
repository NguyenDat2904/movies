import React, { Fragment } from "react";
import HeaderBar from "../header-bar";

function PostComment() {
  return (
    <Fragment>
      <div>
        <HeaderBar title="YOUR COMMENT" />
        <form action="">
          <textarea
            name=""
            id=""
            placeholder="Your comment"
            className="w-full text-[15px] pl-[20px] pt-[12px] h-[110px] rounded-[5px] mb-[24px] text-[#b7b7b7] bg-white"
          ></textarea>
          <button
            type="submit"
            className="p-[10px+15px] rounded-[2px] uppercase text-[11px] text-white font-bold tracking-[2px] bg-[#e53637]"
          >
            {" "}
            Review
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default PostComment;
