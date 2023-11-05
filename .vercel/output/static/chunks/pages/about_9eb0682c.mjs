import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, d as renderSlot, e as renderComponent, f as renderHead } from '../astro_145b4cb1.mjs';
import 'clsx';
/* empty css                               *//* empty css                           */
const $$Astro$3 = createAstro();
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://fonts.googleapis.com/css?family=Eczar:400,500,600,700,800|Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet"><link rel="shortcut icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Hotjar Tracking Code for my site -->`;
}, "/Users/johnmanhart/code/opposite-orbit/src/components/BaseHead.astro", void 0);

const $$Astro$2 = createAstro();
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} id="internal-link"${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/johnmanhart/code/opposite-orbit/src/components/HeaderLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a || (_a = __template(["", "<header data-astro-cid-3ef6ksr2><nav data-astro-cid-3ef6ksr2>", "", "", '<button id="toggle-button" data-astro-cid-3ef6ksr2><img src="/icon-moon.svg" class="icon-moon" alt="moon" id="toggle-button-icon" data-astro-cid-3ef6ksr2><img src="/icon-sun.svg" class="icon-sun" alt="sun" id="toggle-button-icon" data-astro-cid-3ef6ksr2></button></nav><script type="text/javascript">\n    const storedTheme = localStorage.getItem("theme") || "light-theme";\n    document.body.classList.add(storedTheme);\n  <\/script></header>'])), maybeRenderHead(), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Writing` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`About` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/social", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Social Links` }));
}, "/Users/johnmanhart/code/opposite-orbit/src/components/Header.astro", void 0);

const SITE_TITLE = "Manhart Site";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<html lang="en" data-astro-cid-kh7btl4r><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-kh7btl4r": true })}${renderHead()}</head><body data-astro-cid-kh7btl4r>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-kh7btl4r": true })}<div class="root-wrapper" id="sub-page" data-astro-cid-kh7btl4r><div class="root-content text-page" data-astro-cid-kh7btl4r><div class="info-container" data-astro-cid-kh7btl4r><h1 data-astro-cid-kh7btl4r>Lets keep this brief...</h1></div><p data-astro-cid-kh7btl4r>
Hello! I'm John I love to draw boxes, think about drawing boxes, and talk
          about efficient ways to draw boxes. I recently relocated to the
          Seattle after a few decades in the middle of the US. I currently
          design for <a href="https://sentry.io/about/" data-astro-cid-kh7btl4r>Sentry</a> and have been
          there for the past three years. Before that I worked in house as a UX Designer
          for
<a href="https://connect.garmin.com/" data-astro-cid-kh7btl4r>Garmin</a> and before that I was
          at a full service digital agency as a UX Engineer designing and developing
          for brands like Starbucks and Unilever.
</p><p data-astro-cid-kh7btl4r>
If you would like to know more
<a href="mailto:manhartjohn@gmail.com" data-astro-cid-kh7btl4r>manhartjohn@gmail.com</a></p></div></div></body></html>`;
}, "/Users/johnmanhart/code/opposite-orbit/src/pages/about.astro", void 0);

const $$file = "/Users/johnmanhart/code/opposite-orbit/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, SITE_TITLE as S, $$Header as a, SITE_DESCRIPTION as b, about as c };
