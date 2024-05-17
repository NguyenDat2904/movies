import { Oswald } from "next/font/google";
import Link from "next/link";
import React, { Fragment } from "react";
import { Icons } from "./icons";

const font = Oswald({ subsets: ["latin"] });

function HeaderBar({
  title,
  isButton,
  isSmall,
}: {
  title: string;
  isButton?: boolean;
  isSmall?: boolean;
}) {
  return (
    <Fragment>
      <div className="row">
        <div className="w-4/6 px-[1rem]">
          <div className="mb-[30px]">
            <h4
              className={`dark:text-white text-black font-semibold leading-[21px] uppercase pl-[20px]  relative ${
                font.className
              } after:absolute after:left-0 after:top-[-6px] after:h-[32px] after:w-[4px] after:bg-[#e53637] !text-[24px] ${
                isSmall && "!text-[18px]"
              }`}
            >
              {title}
            </h4>
          </div>
        </div>
        {isButton && (
          <div className="w-2/6 px-[1rem]">
            <div className="text-right mb-[30px]">
              <Link
                href="/"
                className="inline-block text-[13px] font-bold uppercase dark:text-white text-black  tracking-[2px]"
              >
                View all
                <Icons.arrowRight className="inline-block dark:text-white text-black w-[20px] h-[18px] ml-[5px]" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default HeaderBar;
