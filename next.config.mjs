/** @type {import('next').NextConfig} */

import withNextIntl from "next-intl/plugin";
import million from "million/compiler";

const i18nConfig = "./src/i18n/i18n.ts";
const millionConfig = {
  auto: { rsc: true },
};

const nextConfig = {
  images: {
    domains: ["img.ophim1.com"],
  },
};

const combinedMillionConfig = million.next(nextConfig, millionConfig);
const combinedIntlConfig = withNextIntl(i18nConfig)(combinedMillionConfig);

export default combinedIntlConfig;
