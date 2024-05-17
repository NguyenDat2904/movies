import React, { Fragment } from "react";

function Tags({ data }: { data?: any }) {
  console.log(data);
  return (
    <Fragment>
      {data && (
        <ul className="mb-[10px]">
          {data?.map((item: any, i: number) => (
            <li
              key={i}
              className="ml-[5px] text-[10px] dark:text-white text-black font-bold rounded-full px-[10px] py-[1px] inline-block dark:bg-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)] cursor-pointer capitalize"
            >
              {item?.name}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default Tags;
