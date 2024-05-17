import React, { Fragment } from "react";
import HeaderBar from "../header-bar";
import CardVer from "../card-ver";

function Section({
  data,
  title,
  isButton,
}: {
  data?: any;
  title: string;
  isButton?: boolean;
}) {
  return (
    <Fragment>
      <div className="mb-[50px]">
        <HeaderBar title={title} isButton={isButton} />
        <div className="row">
          {data?.map((item: any, index: number) => (
            <CardVer key={index} data={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Section;
