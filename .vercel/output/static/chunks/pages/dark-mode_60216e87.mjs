import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, f as renderHead, b as addAttribute, d as renderSlot, u as unescapeHTML } from '../astro_145b4cb1.mjs';
import 'clsx';
import { $ as $$BaseHead, a as $$Header } from './about_9eb0682c.mjs';
/* empty css                               */
const $$Astro = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    content: {
      title,
      description,
      pubDate,
      updatedDate,
      heroImage,
      location,
      weather,
      count
    }
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head><body data-astro-cid-bvzihdzo>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })}<div class="root-wrapper" id="sub-page" data-astro-cid-bvzihdzo><div class="root-content text-page" data-astro-cid-bvzihdzo><main data-astro-cid-bvzihdzo><article data-astro-cid-bvzihdzo>${heroImage && renderTemplate`<img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`}<h1 class="title" data-astro-cid-bvzihdzo>${title}</h1>${pubDate && renderTemplate`<div class="secondary-info-container" data-astro-cid-bvzihdzo><h4 data-astro-cid-bvzihdzo>${pubDate}<span class="divider" data-astro-cid-bvzihdzo>|</span>${location}${" "}${weather}<span class="divider" data-astro-cid-bvzihdzo>|</span>${count}</h4></div>`}${updatedDate && renderTemplate`<div data-astro-cid-bvzihdzo>
Last updated on <time data-astro-cid-bvzihdzo>${updatedDate}</time></div>`}${renderSlot($$result, $$slots["default"])}</article></main></div></div></body></html>`;
}, "/Users/johnmanhart/code/opposite-orbit/src/layouts/BlogPost.astro", void 0);

const html = "<p>I have always been a light mode guy. In fact, I love full eyeball-melting brightness for all my rectangles. Well, maybe after ten years of drawing boxes professionally, my eyes have partially melted. Who knows, but recently I decided to make the switch and embrace dark mode.</p>\n<p>It first started with Figma, my current daily driver <em>(like every other designer in 2023)</em>. But that slowly rippled out to other tools like Slack, GitHub, Sentry, and eventually, after a few weeks, I was fully in the shadows.\nI know I wasn’t born in the shadows, but I did finally adopt it (sorry for that, I really am).</p>\n<p>Even though I adopted the shadows <em>(last time, I swear)</em>, I know others have not. Also, during this transition, I was heads down building my new portfolio site, website, blog site, ramblings site, whatever you want to call it, but it’s the domain you are currently reading these words on. I wanted to be inclusive to all by giving the option to turn the lights on or off.</p>\n<p>So <strong>hopefully</strong>, you noticed the toggle in the top right corner and have read this post in your preferred mode. If you didn’t notice it until now, apologies for the poor user experience and I hope your eyes didn’t melt.</p>";

				const frontmatter = {"layout":"../../layouts/BlogPost.astro","title":"Adopting Dark Mode","description":"Adding a dark and light mode toggle to this site!","pubDate":"April 15, 2023","location":"Seattle","weather":"🌧️","count":"002"};
				const file = "/Users/johnmanhart/code/opposite-orbit/src/pages/blog/dark-mode.md";
				const url = "/blog/dark-mode";
				function rawContent() {
					return "I have always been a light mode guy. In fact, I love full eyeball-melting brightness for all my rectangles. Well, maybe after ten years of drawing boxes professionally, my eyes have partially melted. Who knows, but recently I decided to make the switch and embrace dark mode.\n\nIt first started with Figma, my current daily driver _(like every other designer in 2023)_. But that slowly rippled out to other tools like Slack, GitHub, Sentry, and eventually, after a few weeks, I was fully in the shadows.\nI know I wasn't born in the shadows, but I did finally adopt it (sorry for that, I really am).\n\nEven though I adopted the shadows _(last time, I swear)_, I know others have not. Also, during this transition, I was heads down building my new portfolio site, website, blog site, ramblings site, whatever you want to call it, but it's the domain you are currently reading these words on. I wanted to be inclusive to all by giving the option to turn the lights on or off.\n\nSo **hopefully**, you noticed the toggle in the top right corner and have read this post in your preferred mode. If you didn't notice it until now, apologies for the poor user experience and I hope your eyes didn't melt.\n\n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const darkMode = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, darkMode as d };
