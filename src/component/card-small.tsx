import Image from "next/image";
import React, { Fragment } from "react";
import Tags from "./tags";
import Link from "next/link";
import { Icons } from "./icons";
import getRandomNumber from "@/helper/random-view";

function CardSmall({ data }: { data: any }) {
  const basePosterUrl = "https://img.phimapi.com/";
  let posterUrl = data?.poster_url;

  if (!posterUrl.startsWith(basePosterUrl)) {
    posterUrl = basePosterUrl + posterUrl;
  }
  return (
    <Fragment>
      <div className="mb-[20px] overflow-hidden flex">
        <div className="mr-[15px]">
          <img
            src={posterUrl}
            className="object-cover w-[90px] h-[130px] rounded-[5px]"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="overflow-hidden">
          <Tags data={data.category} />
          <h5 className="mb-[10px]">
            <Link
              href={`/detail/${data.slug}`}
              className="font-bold dark:text-white text-black leading-[26px] text-[18px]"
            >
              {data.name}
            </Link>
          </h5>
          <div className="text-[14px] leading-none text-[#b7b7b7] inline-flex items-end px-[10px] py-[2px] rounded-[4px] ">
            <Icons.eye className="text-[#b7b7b7] inline-block w-[14px] h-[15px] mr-[5px]" />
            <span>{getRandomNumber()} Views</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardSmall;
