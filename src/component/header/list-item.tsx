import Link from "next/link";
import React, { Fragment } from "react";

function ListItem({
  locale,
  categoryTrans,
  category,
}: {
  locale: string;
  categoryTrans?: any;
  category: string;
}) {
  const dataGenres = [
    "hanh-dong",
    "co-trang",
    "chien-tranh",
    "vien-tuong",
    "kinh-di",
    "tai-lieu",
    "bi-an",
    "tinh-cam",
    "hai-huoc",
    "tam-ly",
    "hinh-su",
    "the-thao",
    "vo-thuat",
    "phieu-luu",
    "khoa-hoc",
    "am-nhac",
    "than-thoai",
    "gia-dinh",
    "chinh-kich",
    "hoc-duong",
    "kinh-dien",
    "phim-18",
  ];

  return (
    <Fragment>
      {category === "Category" && (
        <>
          {dataGenres?.map((item: any, i: number) => (
            <li
              key={i}
              className="w-1/3 hover:dark:bg-[#070720] hover:bg-slate-300 group transition-all duration-150"
            >
              <Link
                href={`/${locale}/categories/${item}`}
                className="text-[15px] block hover:text-[#111111] hover:dark:text-slate-300 text-slate-300 dark:text-[#111111] font-medium py-[5px] px-[10px]"
              >
                {categoryTrans(String(item))}
              </Link>
            </li>
          ))}
        </>
      )}
    </Fragment>
  );
}

export default ListItem;
