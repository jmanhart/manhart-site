import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, f as renderHead } from '../astro_145b4cb1.mjs';
import 'clsx';
import { $ as $$BaseHead, a as $$Header, S as SITE_TITLE, b as SITE_DESCRIPTION } from './about_9eb0682c.mjs';
/* empty css                              */import 'html-escaper';
/* empty css                               *//* empty css                           */
const $$Astro = createAstro();
const $$Colophon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Colophon;
  return renderTemplate`<html lang="en" data-astro-cid-bl3zq74b><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-bl3zq74b": true })}${renderHead()}</head><body data-astro-cid-bl3zq74b>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bl3zq74b": true })}<div class="root-wrapper" id="sub-page" data-astro-cid-bl3zq74b><div class="root-content text-page" data-astro-cid-bl3zq74b><div class="info-container" data-astro-cid-bl3zq74b><h1 data-astro-cid-bl3zq74b>Colophon</h1></div><h1 data-astro-cid-bl3zq74b>H1 - This is a title</h1><h2 data-astro-cid-bl3zq74b>H2 - This is a title</h2><h3 data-astro-cid-bl3zq74b>H3 - This is a title</h3><h4 data-astro-cid-bl3zq74b>H4 - This is a title</h4><h5 data-astro-cid-bl3zq74b>H5 - This is a title</h5><h6 data-astro-cid-bl3zq74b>H6 - This is a title</h6><p data-astro-cid-bl3zq74b>
P - I'm baby chicharrones heirloom aesthetic, blog mumblecore crucifix
          literally live-edge everyday carry hammock cliche palo santo.
</p></div></div></body></html>`;
}, "/Users/johnmanhart/code/opposite-orbit/src/pages/colophon.astro", void 0);

const $$file = "/Users/johnmanhart/code/opposite-orbit/src/pages/colophon.astro";
const $$url = "/colophon";

export { $$Colophon as default, $$file as file, $$url as url };
