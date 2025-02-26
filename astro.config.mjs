import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeMermaid from 'rehype-mermaid';
import pagefind from "astro-pagefind"
import rehypeExternalLinks from "rehype-external-links";


export default defineConfig({
  site: "https://ahmadmuhammadgd.github.io",
  integrations: [mdx(), sitemap(), tailwind(), pagefind()],
  markdown: {
    rehypePlugins: [
      [rehypeMermaid, { launchOptions: { executablePath: null } }],
      [rehypeExternalLinks, { target: '_blank', content: { type: 'text', value: ' 🔗' } , rel: ["nofollow"] }],
    ],
  },
});
