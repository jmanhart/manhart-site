import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, f as renderHead } from '../astro_145b4cb1.mjs';
import 'clsx';
import { $ as $$BaseHead, a as $$Header, S as SITE_TITLE, b as SITE_DESCRIPTION } from './about_9eb0682c.mjs';
/* empty css                                      */import 'html-escaper';
/* empty css                               *//* empty css                           */
const $$Astro = createAstro();
const $$ProductDesigner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductDesigner;
  return renderTemplate`<html lang="en" data-astro-cid-kr5chete><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-kr5chete": true })}${renderHead()}</head><body data-astro-cid-kr5chete>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-kr5chete": true })}<div class="root-wrapper" id="sub-page" data-astro-cid-kr5chete><div class="root-content" data-astro-cid-kr5chete><h1 data-astro-cid-kr5chete>How I got here</h1><h2 data-astro-cid-kr5chete>Copy and other cool shit.</h2></div></div></body></html>`;
}, "/Users/johnmanhart/code/opposite-orbit/src/pages/product-designer.astro", void 0);

const $$file = "/Users/johnmanhart/code/opposite-orbit/src/pages/product-designer.astro";
const $$url = "/product-designer";

export { $$ProductDesigner as default, $$file as file, $$url as url };
