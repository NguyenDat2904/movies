import React, { Fragment } from "react";
import { Icons } from "../icons";
import Link from "next/link";

function FilmInfo({ data }: { data?: any }) {
  const basePosterUrl = "https://img.phimapi.com/";
  let posterUrl = data?.poster_url;

  if (!posterUrl.startsWith(basePosterUrl)) {
    posterUrl = basePosterUrl + posterUrl;
  }

  return (
    <Fragment>
      <div className="mb-[65px]">
        <div className="row">
          <div className="w-1/4 px-[1rem]">
            <div
              className="rounded-[5px] h-[440px] relative bg-[center] bg-[no-repeat] bg-[cover]"
              style={{
                backgroundImage: `url(${posterUrl})`,
              }}
            >
              <div className="bg-[rgb(61,61,61)] text-[14px] text-white inline-flex items-center px-[12px] py-[2px] rounded-[4px] absolute  left-[10px] bottom-[25px]">
                <Icons.messageCircle className="mr-[5px] w-4 h-4" />
                11
              </div>
              <div className="bg-[rgb(61,61,61)] text-[14px] text-white inline-flex items-center px-[12px] py-[2px] rounded-[4px] absolute right-[10px] bottom-[25px]">
                <Icons.eye className="mr-[5px] w-4 h-4" /> 9141
              </div>
            </div>
          </div>
          <div className="w-3/4 px-[1rem]">
            <div className="relative">
              <div className="mb-[20px]">
                <h3 className="text-white font-bold leading-[30px] uppercase">
                  {data.name}
                </h3>
                <span className="text-[15px] text-[#b7b7b7] block">
                  {data.origin_name}
                </span>
              </div>
              <div className="absolute right-0 top-0 text-center">
                <div>
                  <Link
                    className="text-[rgb(0,123,255)] bg-transparent inline-block"
                    href="http://127.0.0.1:5500/anime-details.html#"
                  >
                    <Icons.star className="fill-[rgb(232,159,18)] text-[rgb(232,159,18)]" />
                  </Link>
                  <Link
                    className="text-[rgb(0,123,255)] bg-transparent inline-block"
                    href="http://127.0.0.1:5500/anime-details.html#"
                  >
                    <Icons.star className="fill-[rgb(232,159,18)] text-[rgb(232,159,18)]" />
                  </Link>
                  <Link
                    className="text-[rgb(0,123,255)] bg-transparent inline-block"
                    href="http://127.0.0.1:5500/anime-details.html#"
                  >
                    <Icons.star className="fill-[rgb(232,159,18)] text-[rgb(232,159,18)]" />
                  </Link>
                  <Link
                    className="text-[rgb(0,123,255)] bg-transparent inline-block"
                    href="http://127.0.0.1:5500/anime-details.html#"
                  >
                    <Icons.star className="fill-[rgb(232,159,18)] text-[rgb(232,159,18)]" />
                  </Link>
                </div>
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    fontSize: "18px",
                    color: "rgb(183, 183, 183)",
                  }}
                >
                  {data.year} Votes
                </span>
              </div>
              <p className="text-[18px] leading-[30px] text-[#b7b7b7] mb-[15px]">
                {data.content}
              </p>
              <div className="mb-[15px]">
                <div className="row">
                  <div className="w-1/2 px-[1rem] relative">
                    <ul className="mb-[20px]">
                      <li className="text-white pl-[18px] relative leading-[30px] flex">
                        <span className="text-[#b7b7b7] w-[115px] inline-block">
                          Type:
                        </span>{" "}
                        <span className="capitalize">{data.type}</span>
                      </li>
                      <li className="text-white pl-[18px] relative leading-[30px] flex">
                        <span className="text-[#b7b7b7] w-[115px] inline-block">
                          Studios:
                        </span>{" "}
                        <span className="flex-1">{data.director}</span>
                      </li>
                      <li className="text-white pl-[18px] relative leading-[30px] flex">
                        <span className="text-[#b7b7b7] w-[115px] inline-block">
                          Date aired:
                        </span>{" "}
                        {data.created.time}
                      </li>
                      <li className="text-white pl-[18px] relative leading-[30px] flex capitalize">
                        <span className="text-[#b7b7b7] w-[115px] inline-block">
                          Status:
                        </span>{" "}
                        {data.status}
                      </li>
                      <li className="text-white pl-[18px] relative leading-[30px] flex">
                        <span className="text-[#b7b7b7] w-[115px] inline-block">
                          Genres:
                        </span>{" "}
                        <span>
                          {data?.category?.map((item: any, i: number) => {
                            return (
                              <Fragment key={i}>
                                {i > 0 && ", "}
                                <span>{item.name}</span>
                              </Fragment>
                            );
                          })}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 px-[1rem] relative">
                    <ul className="mb-[20px]">
                      <li className="text-white pl-[18px] relative leading-[30px]">
                        <span className="text-[#b7b7b7] w-[115px] inline-block">
                          Scores:
                        </span>{" "}
                        7.31 / 1,515
                      </li>
                      <li className="text-white pl-[18px] relative leading-[30px]">
                        <span className="text-[#b7b7b7] w-[115px] inline-block">
                          Rating:
                        </span>{" "}
                        8.5 / 161 times
                      </li>
                      <li className="text-white pl-[18px] relative leading-[30px]">
                        <span className="text-[#b7b7b7] w-[115px] inline-block">
                          Duration:
                        </span>{" "}
                        {data.time}
                      </li>
                      <li className="text-white pl-[18px] relative leading-[30px]">
                        <span className="text-[#b7b7b7] w-[115px] inline-block">
                          Quality:
                        </span>{" "}
                        {data.quality}
                      </li>
                      <li className="text-white pl-[18px] relative leading-[30px]">
                        <span className="text-[#b7b7b7] w-[115px] inline-block">
                          Views:
                        </span>{" "}
                        {data.view}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Link
                  className="rounded-[4px] mr-[11px] tracking-[2px] font-bold inline-flex items-center uppercase text-white bg-[rgb(229,54,55)] px-[20px] py-[14px] text-[13px]"
                  href="http://127.0.0.1:5500/anime-details.html#"
                >
                  <Icons.heart className="mr-[5px] w-4 h-4" /> Follow
                </Link>
                <Link href={`/watch/${data.slug}`}>
                  <span className="bg-[rgb(229,54,55)] text-white inline-flex items-center font-bold px-[20px] py-[18px] uppercase rounded-s-[4px] tracking-[2px] text-[13px] mr-[5px]">
                    Watch Now
                  </span>{" "}
                  <Icons.chevronRight className="w-8 h-full py-[12px] inline-block bg-[rgb(229,54,55)] text-white rounded-e-[4px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FilmInfo;
