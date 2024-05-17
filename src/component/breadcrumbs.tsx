import React, { Fragment } from "react";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs({ data }: { data: any }) {
  return (
    <Fragment>
      <div className="pt-[35px]">
        <div className="container">
          <div className="row">
            <div className="w-full px-[15px] relative">
              <div>
                <Link
                  href="/"
                  className="text-[rgb(255,255,255)] bg-transparent inline-flex items-center mr-[9px] relative text-[16px]"
                >
                  <Icons.home className="w-[16px] h-[16px] mr-[5px] text-[rgb(229,54,55)] inline-block" />{" "}
                  Home
                </Link>
                {data.map((bread: any, index: number) => {
                  const to = `/${bread.value}`;
                  return (
                    <Link
                      key={index}
                      href={to}
                      className="text-[rgb(255,255,255)] bg-transparent inline-flex mr-[9px] relative text-[16px] items-center capitalize"
                    >
                      <Icons.chevronRight className="w-[16px] h-[16px] mr-[9px]" />
                      {bread.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
