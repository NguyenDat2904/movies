"use client";
import React, { Fragment } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toogle";
import { LanguageSwitcher } from "./language-switcher";
import ListItem from "./header/list-item";

function SiteHeader({ locale }: { locale: string }) {
  const pathname = usePathname();

  const t = useTranslations("Header");

  const categoryTrans = useTranslations("Header.genre");
  const navList = [
    "Home",
    "Category",
    "Nation",
    "NewMovies",
    "TheatersMovies",
    "SeriesMovies",
  ] as const;

  return (
    <Fragment>
      <header className="bg-slate-300 dark:bg-[#070720] fixed top-0 left-0 right-0 z-50 dark:shadow-[rgba(255,255,255,0.19)_0px_10px_20px,rgba(255,255,255,0.23)_0px_6px_6px] shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_6px_6px] ">
        <div className="container">
          <div className="row">
            <div className="w-1/6 px-4">
              <div className="pt-[20px]">
                <Link href="/" className="inline-block">
                  <Image src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="w-4/6 px-4">
              <div className="header__nav">
                <nav className="text-center mobile-menu">
                  <ul>
                    {navList.map((nav, i) => {
                      return (
                        <li
                          className="inline-block relative mr-[16px] group"
                          key={i}
                        >
                          <Link
                            href={`/${locale}${t(`nav.${nav}.url`)}`}
                            className={`text-[16px] font-bold p-[20px]  dark:text-white inline-block ${
                              pathname === "/" + locale + t(`nav.${nav}.url`) &&
                              "bg-[#e53637] text-white"
                            } `}
                          >
                            {t(`nav.${nav}.name`)}{" "}
                            {(nav === "Category" || nav === "Nation") && (
                              <Icons.chevronDown className="w-[17px] inline-block rotate-0 group-hover:rotate-180 transition-all duration-300 ease-linear" />
                            )}
                          </Link>
                          <ul className="flex flex-wrap w-[500px] absolute left-0 top-[82px] bg-[#070720]  dark:bg-slate-300 text-left py-[5px] empty:py-[0] z-10 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:top-[64px] group-hover:visible px-[10px]">
                            <ListItem
                              locale={locale}
                              categoryTrans={categoryTrans}
                              category={nav}
                            />
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="w-1/6 px-4 flex items-center">
              <div className="flex items-center">
                <div className="inline-block mr-[10px]">
                  <LanguageSwitcher />
                </div>
                <div className="inline-flex mr-[15px]">
                  <ThemeToggle />
                </div>
                <Link href="#" className="inline-block mr-[15px]">
                  <Icons.search className="w-[24px] h-[24px] inline-block hover:text-[#e53637] duration-300 transition-all" />
                </Link>
                <Link href="./login.html" className="inline-block">
                  <Icons.user className="w-[24px] h-[24px] inline-block hover:text-[#e53637] duration-300 transition-all" />
                </Link>
              </div>
            </div>
          </div>
          <div id="mobile-menu-wrap" />
        </div>
      </header>
    </Fragment>
  );
}

export default SiteHeader;
