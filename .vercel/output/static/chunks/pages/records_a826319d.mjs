import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, f as renderHead } from '../astro_145b4cb1.mjs';
import 'clsx';
import { $ as $$BaseHead, a as $$Header, S as SITE_TITLE, b as SITE_DESCRIPTION } from './about_9eb0682c.mjs';
import 'html-escaper';
/* empty css                               *//* empty css                           */
const $$Astro = createAstro();
const $$Records = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Records;
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, {})}<div class="root-wrapper" id="sub-page"><div class="root-content text-page"><div class="info-container"><h1>🎶 All Records</h1><p id="collection-count"></p><div id="collection-list"></div></div></div></div></body></html>`;
}, "/Users/johnmanhart/code/opposite-orbit/src/pages/records.astro", void 0);

const $$file = "/Users/johnmanhart/code/opposite-orbit/src/pages/records.astro";
const $$url = "/records";

export { $$Records as default, $$file as file, $$url as url };
