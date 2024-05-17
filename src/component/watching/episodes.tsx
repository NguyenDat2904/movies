"use client";
import React, { Fragment } from "react";
import HeaderBar from "../header-bar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Episodes({ data, episodes }: { data: any; episodes: any }) {
  const searchParams = useSearchParams();
  let slug = searchParams.get("slug");
  slug = slug || "tap-01";
  const episode = episodes?.map((server: any) => server?.server_data).flat();

  return (
    <Fragment>
      <HeaderBar title="LIST NAME" />
      <div>
        {episode?.map((item: any, index: number) => (
          <Link
            key={index}
            href={`/watch/${data.slug}?slug=${item.slug}`}
            className={`inline-block text-[15px] text-white p-[10px_20px] mr-[15px] mb-[20px] transition duration-300 rounded-[4px] bg-[rgba(255,255,255,0.2)] hover:text-black hover:bg-white ${
              item.slug === slug && "!text-black bg-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

export default Episodes;
