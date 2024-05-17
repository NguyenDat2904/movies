import React, { ReactNode } from "react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
type Props = {
  children: ReactNode;
  locale: string;
};
async function Layout({ children, locale }: Props) {
  return (
    <div>
      <SiteHeader locale={locale} />
      <div className="text-white mt-[64px] dark:bg-[#0b0c2a] bg-white ">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}

export default Layout;
