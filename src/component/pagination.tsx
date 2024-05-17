import Link from "next/link";
import React, { Fragment } from "react";
import { Icons } from "./icons";

export default function Pagination({
  page,
  totalPage,
}: {
  page?: number;
  totalPage?: number;
}) {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPage;

  const pagesToShow = [1, 2, 3, 4, 5, "...", totalPage].map((p, index) => {
    if (p === "...") {
      return (
        <span key={index} className="inline-block px-2">
          {p}
        </span>
      );
    }

    return (
      <Link
        key={index}
        href={`http://127.0.0.1:5500/categories.html?page=${p}`}
        className={`rounded-full transition-all duration-300 inline-block text-white font-bold  w-[50px] leading-[48px] text-center ${
          page === p ? "bg-blue-500" : ""
        }`}
      >
        {p}
      </Link>
    );
  });

  return (
    <Fragment>
      <div className="pt-[15px] flex items-center">
        <Link
          href="http://127.0.0.1:5500/categories.html#"
          className="rounded-full transition-all duration-300 inline-flex text-white font-bold  mr-[20px] leading-[48px] text-center"
        >
          <Icons.chevronLeft className="w-[20px] h-[20px]" />
        </Link>
        {pagesToShow}
        <Link
          href="http://127.0.0.1:5500/categories.html#"
          className="rounded-full transition-all duration-300 inline-flex text-white font-bold  ml-[20px] leading-[48px] text-center"
        >
          <Icons.chevronRight className="w-[20px] h-[20px]" />
        </Link>
      </div>
    </Fragment>
  );
}
