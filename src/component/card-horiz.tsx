import React, { Fragment } from "react";
import { Icons } from "./icons";
import Link from "next/link";
import getRandomNumber from "@/helper/random-view";

function CardHoriz({ data }: { data?: any }) {
  const basePosterUrl = "https://img.phimapi.com/";
  let posterUrl = data?.thumb_url;

  if (!posterUrl.startsWith(basePosterUrl)) {
    posterUrl = basePosterUrl + posterUrl;
  }

  return (
    <Fragment>
      <div
        className="h-[190px] relative rounded-[5px] mb-[20px] bg-no-repeat bg-cover bg-[top_center] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-[1] after:bg-[rgba(0,0,0,0.2)]"
        style={{
          backgroundImage: `url(${posterUrl})`,
        }}
      >
        {data.episode_current && (
          <div className="text-[13px] text-white bg-[#e53637] inline-block px-[12px] py-[2px] rounded-[4px] absolute top-[10px] left-[10px]">
            {data.episode_current}
          </div>
        )}
        <div className="text-[13px] text-white bg-[#3d3d3d] z-[2] inline-flex items-center px-[10px] py-[2px] rounded-[4px] absolute right-[10px] top-[10px]">
          <Icons.eye className="text-white inline-block w-[14px] h-[14px] mr-[5px]" />
          {getRandomNumber()}
        </div>
        <h5 className="absolute left-0 bottom-[25px] z-[2] w-full pl-[20px] pr-[30px]">
          <Link
            href={`/detail/${data.slug}`}
            className="text-white font-bold leading-[26px]"
          >
            {data?.name}
          </Link>
        </h5>
      </div>
    </Fragment>
  );
}

export default CardHoriz;
