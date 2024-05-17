import Link from "next/link";
import React, { Fragment } from "react";
import { Icons } from "./icons";
import Tags from "./tags";
import getRandomNumber from "@/helper/random-view";

function CardVer({ data, locale }: { data?: any; locale?: string }) {
  const basePosterUrl = "https://img.phimapi.com/";
  let posterUrl = data?.poster_url;

  if (!posterUrl.startsWith(basePosterUrl)) {
    posterUrl = basePosterUrl + posterUrl;
  }

  return (
    <Fragment>
      <div className="w-1/3 px-[1rem]">
        <div className="mb-[30px]">
          <div
            className={`h-[325px] relative rounded-[5px] bg-no-repeat bg-cover bg-[top_center]`}
            style={{
              backgroundImage: `url(${posterUrl})`,
            }}
          >
            {data.episode_current && (
              <div className="text-[13px] text-white bg-[#e53637] inline-block px-[12px] py-[2px] rounded-[4px] absolute top-[10px] left-[10px]">
                {data.episode_current}
              </div>
            )}
            <div className="text-[13px] text-white bg-[#3d3d3d] inline-flex items-center px-[10px] py-[2px] rounded-[4px] absolute left-[10px] bottom-[10px]">
              <Icons.messageCircle className="text-white inline-block w-[14px] h-[14px] mr-[5px]" />
              {getRandomNumber()}
            </div>
            <div className="text-[13px] text-white bg-[#3d3d3d] inline-flex items-center px-[10px] py-[2px] rounded-[4px] absolute right-[10px] bottom-[10px]">
              <Icons.eye className="text-white inline-block w-[14px] h-[14px] mr-[5px]" />
              {getRandomNumber()}
            </div>
          </div>
          <div className="pt-[20px]">
            <Tags data={data?.category} />
            <h5 className="text-[18px]">
              <Link
                href={`/detail/${data.slug}`}
                className="font-bold dark:text-white text-black leading-[26px]"
              >
                {data?.origin_name}
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardVer;
