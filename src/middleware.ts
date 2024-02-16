import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
  pathnames: {
    "/": "/",
    // "/blog": {
    //   en: "/blog",
    //   de: "/blog",
    // },
    //   '/blog/[articleSlug]-[articleId]': {
    //     en: '/blog/[articleSlug]-[articleId]',
    //     de: '/blog/[articleSlug]-[articleId]'
    //   },

    //   // If locales use different paths, you can
    //   // specify each external path per locale.
    //   '/about': {
    //     en: '/about',
    //     de: '/ueber-uns'
    //   },

    //   // Dynamic params are supported via square brackets
    //   '/news/[articleSlug]-[articleId]': {
    //     en: '/news/[articleSlug]-[articleId]',
    //     de: '/neuigkeiten/[articleSlug]-[articleId]'
    //   },

    //   // Also (optional) catch-all segments are supported
    //   '/categories/[...slug]': {
    //     en: '/categories/[...slug]',
    //     de: '/kategorien/[...slug]'
    //   }
  },
});

export const config = {
  matcher: ["/", "/(en|de|pl|es|fr|it|nl)/:path*"],
};
