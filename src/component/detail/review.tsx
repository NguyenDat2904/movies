import React, { Fragment } from "react";
import HeaderBar from "../header-bar";
import Comment from "./comment";

function Review() {
  return (
    <Fragment>
      <div className="mb-[55px]">
        <HeaderBar title="Review" />
        <>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </>
      </div>
    </Fragment>
  );
}

export default Review;
