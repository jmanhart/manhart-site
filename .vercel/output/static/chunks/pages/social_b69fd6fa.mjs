import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, f as renderHead } from '../astro_145b4cb1.mjs';
import 'clsx';
import { $ as $$BaseHead, a as $$Header, S as SITE_TITLE, b as SITE_DESCRIPTION } from './about_9eb0682c.mjs';
/* empty css                            */import 'html-escaper';
/* empty css                               *//* empty css                           */
const $$Astro = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`<html lang="en" data-astro-cid-w7ysibkd><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-w7ysibkd": true })}${renderHead()}</head><body data-astro-cid-w7ysibkd>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-w7ysibkd": true })}<div class="root-wrapper" id="sub-page" data-astro-cid-w7ysibkd><div class="root-content text-page" data-astro-cid-w7ysibkd><div class="info-container" data-astro-cid-w7ysibkd><h1 data-astro-cid-w7ysibkd>Social Links</h1></div><div class="root-social-container" id="social-media-cards" data-astro-cid-w7ysibkd></div></div></div></body></html>`;
}, "/Users/johnmanhart/code/opposite-orbit/src/pages/social.astro", void 0);

const $$file = "/Users/johnmanhart/code/opposite-orbit/src/pages/social.astro";
const $$url = "/social";

export { $$Social as default, $$file as file, $$url as url };
