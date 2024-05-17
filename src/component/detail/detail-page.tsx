import React, { Fragment } from "react";
import FilmInfo from "./film-info";
import Review from "./review";
import HeaderBar from "../header-bar";
import CardHoriz from "../card-horiz";
import PostComment from "./post-comment";

function DetailPage({ data, similarMovie }: { data: any; similarMovie?: any }) {
  return (
    <Fragment>
      <div className="pt-[60px] pb-[100px]">
        <div className="container">
          <FilmInfo data={data} />
          <div className="row">
            <div className="w-4/6 px-[1rem]">
              <Review />
              <PostComment />
            </div>
            <div className="w-2/6 px-[1rem]">
              <HeaderBar title="YOU MIGHT LIKE..." />
              <div>
                {similarMovie.map((item: any, i: number) => {
                  return <CardHoriz data={item} key={i} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DetailPage;
