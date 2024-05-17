import { ThemeProvider } from "@/component/providers/theme-provider";
import { locales } from "@/i18n/locales";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import React, { ReactNode } from "react";
import { Mulish } from "next/font/google";
import { cn } from "@/lib/utils";
import Layout from "@/component/layout";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const font = Mulish({ subsets: ["latin"] });

async function RootLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages({ locale });
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(font.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Layout locale={locale}>
              <div>{children}</div>
            </Layout>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
