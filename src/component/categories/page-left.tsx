import React, { Fragment } from "react";
import HeaderBar from "../header-bar";
import CardVer from "../card-ver";
import Pagination from "../pagination";

function PageLeft({
  title,
  data,
  page,
  totalPage,
  locale,
}: {
  title: string;
  data: any;
  page?: number;
  totalPage?: number;
  locale?: string;
}) {
  return (
    <Fragment>
      <div>
        <HeaderBar title={title} />
        <div className="row">
          {data?.map((item: any, index: number) => (
            <CardVer locale={locale} key={index} data={item} />
          ))}
        </div>
        <Pagination page={page} totalPage={totalPage} />
      </div>
    </Fragment>
  );
}

export default PageLeft;
