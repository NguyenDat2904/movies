import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Icons } from "./icons";

export default function SiteFooter() {
  return (
    <Fragment>
      <footer className="pt-[60px] pb-[40px] relative bg-[rgb(7,7,32)]">
        <div className="absolute left-1/2 top-[-25px] ml-[-25px]">
          <Link
            id="scrollToTopButton"
            href="http://127.0.0.1:5500/#"
            className="bg-[rgb(229,54,55)] rounded-[50%] inline-flex w-[50px] h-[50px] text-[36px] text-white text-center leading-[50px]  items-center justify-center"
          >
            <span className="relative leading-none webkit-font-smoothing-antialiased ">
              <Icons.chevronUp className="w-[24px] h-[24px]" />
            </span>
          </Link>
        </div>
        <div className="container w-full px-[15px] mx-auto">
          <div className="row">
            <div className="w-[25%] px-[15px] relative">
              <div>
                <a
                  href="http://127.0.0.1:5500/index.html"
                  className="text-[rgb(0,123,255)] bg-transparent"
                >
                  <img
                    src="/logo.png"
                    className="max-w-[100%] h-auto align-middle"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="w-[50%] px-[15px] relative">
              <div className="text-center">
                <ul>
                  <li className="active inline-block relative mr-[40px]">
                    <a
                      href="http://127.0.0.1:5500/index.html"
                      className="text-[rgb(183,183,183)] bg-transparent text-[15px] font-bold"
                    >
                      Homepage
                    </a>
                  </li>
                  <li className="inline-block relative mr-[40px]">
                    <a
                      href="http://127.0.0.1:5500/categories.html"
                      className="text-[rgb(183,183,183)] bg-transparent text-[15px] font-bold"
                    >
                      Categories
                    </a>
                  </li>
                  <li className="inline-block relative mr-[40px]">
                    <a
                      href="http://127.0.0.1:5500/blog.html"
                      className="text-[rgb(183,183,183)] bg-transparent text-[15px] font-bold"
                    >
                      Our Blog
                    </a>
                  </li>
                  <li className="inline-block relative ">
                    <a
                      className="text-[rgb(183,183,183)] bg-transparent text-[15px] font-bold"
                      href="http://127.0.0.1:5500/#"
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[25%] px-[15px] relative">
              <p className="bg-transparent text-[15px] font-bold text-[rgb(61,61,61)] leading-[25px] mb-[15px]">
                {"Copyright ©"}2024 All rights reserved | This template is made
                with{" "}
                <i
                  className="fa fa-heart"
                  aria-hidden="true"
                  style={{
                    boxSizing: "border-box",
                    fontVariant: "normal",
                    display: "inline-block",
                    fontStyle: "normal",
                    fontKerning: "auto",
                    fontOpticalSizing: "auto",
                    fontFeatureSettings: "normal",
                    fontVariationSettings: "normal",
                    fontWeight: "normal",
                    fontStretch: "normal",
                    lineHeight: 1,
                    fontFamily: "FontAwesome",
                    fontSize: "inherit",
                    textRendering: "auto",
                    WebkitFontSmoothing: "antialiased",
                  }}
                />{" "}
                by{" "}
                <a
                  href="https://colorlib.com/"
                  target="_blank"
                  className="text-[rgb(0,123,255)] bg-transparent"
                >
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
