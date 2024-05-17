import React, { Fragment } from "react";
import HeaderBar from "../header-bar";
import CardHoriz from "../card-horiz";
import CardSmall from "../card-small";

function SectionRight({ data, dataUp }: { data: any; dataUp: any }) {
  return (
    <Fragment>
      <div>
        <div className="relative mb-[80px]">
          <HeaderBar title="Cartoon Movie" isSmall />
          <div>
            {data.map((data: any, i: number) => {
              return <CardHoriz data={data} key={i} />;
            })}
          </div>
        </div>
        <div className="mb-[35px]">
          <HeaderBar title="Coming Up" isSmall />
          <div>
            {dataUp?.map((data: any, i: number) => {
              return <CardSmall data={data} key={i} />;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SectionRight;
