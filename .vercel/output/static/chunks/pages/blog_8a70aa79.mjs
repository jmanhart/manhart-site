import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, f as renderHead, b as addAttribute } from '../astro_145b4cb1.mjs';
import { $ as $$BaseHead, a as $$Header, S as SITE_TITLE, b as SITE_DESCRIPTION } from './about_9eb0682c.mjs';
/* empty css                          */import 'clsx';
import 'html-escaper';
/* empty css                               *//* empty css                           */
const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const posts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/dark-mode.md": () => import('./dark-mode_60216e87.mjs').then(n => n.d),"./blog/sentry-metal.md": () => import('./sentry-metal_e0946920.mjs')}), () => "./blog/*.{md,mdx}")).sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-ijnerlr2><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-ijnerlr2": true })}${renderHead()}</head><body data-astro-cid-ijnerlr2>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ijnerlr2": true })}<div class="root-wrapper" id="sub-page" data-astro-cid-ijnerlr2><div class="root-content text-page" data-astro-cid-ijnerlr2><div class="info-container" data-astro-cid-ijnerlr2><h1 data-astro-cid-ijnerlr2>Writing</h1></div><ul data-astro-cid-ijnerlr2>${posts.map((post) => renderTemplate`<a class="blog-link"${addAttribute(post.url, "href")} data-astro-cid-ijnerlr2><li data-astro-cid-ijnerlr2><div data-astro-cid-ijnerlr2><h5 class="blog-date-stamp"${addAttribute(post.frontmatter.pubDate, "datetime")} data-astro-cid-ijnerlr2>${post.frontmatter.count}<span class="divider" data-astro-cid-ijnerlr2>|</span>${new Date(post.frontmatter.pubDate).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  )}</h5><h3 class="description" data-astro-cid-ijnerlr2>${post.frontmatter.title}</h3><p class="blog-short-description" data-astro-cid-ijnerlr2>${post.frontmatter.description}</p></div></li></a>`)}</ul></div></div></body></html>`;
}, "/Users/johnmanhart/code/opposite-orbit/src/pages/blog.astro", void 0);

const $$file = "/Users/johnmanhart/code/opposite-orbit/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
