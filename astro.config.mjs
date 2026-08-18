import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/data/site";

const pagesBase = process.env.PAGES_BASE;

export default defineConfig({
  site: pagesBase ? "https://studiotche.github.io" : site.seo.url,
  base: pagesBase || "/",
  output: "static",
  integrations: [sitemap()],
  build: { format: "directory" },
});
