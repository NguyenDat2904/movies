import { Fragment } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLocale } from "next-intl";
import { locales } from "@/i18n/locales";
import { renderFlag } from "./render-flag";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();

  const filteredLocales = locales?.filter(
    (currentLocale) => currentLocale !== locale
  );
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${cn(
          buttonVariants({ size: "sm", variant: "secondary" }),
          "p-3 bg-[#e53637]"
        )}`}
      >
        {/* className="flex h-10 w-10 items-center justify-center rounded-md border transition-colors hover:bg-muted"> */}
        {renderFlag(locale, true)}
        <span className="sr-only">Languages</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {filteredLocales?.map((currentLocale, index) => (
          <Fragment key={index}>
            <Link
              //   href="/"
              // TODO error on sub layout language switch (example from dashboard)
              href={`/${currentLocale}`}
              locale={currentLocale}
            >
              <DropdownMenuItem className="flex cursor-pointer items-start justify-center">
                {renderFlag(currentLocale, false)}
              </DropdownMenuItem>
            </Link>
            {index !== filteredLocales.length - 1 && <DropdownMenuSeparator />}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
