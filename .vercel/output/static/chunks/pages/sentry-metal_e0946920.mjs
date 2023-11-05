import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_145b4cb1.mjs';
import 'clsx';
import { $ as $$BlogPost } from './dark-mode_60216e87.mjs';
import 'html-escaper';
import './about_9eb0682c.mjs';
/* empty css                               *//* empty css                           *//* empty css                               */
const html = "<p>I have always been a metalhead – black, speed, Norwegian, death, DOOM I love it all. So, this year for our annual hackweek I decided to Metalify (is that even a word?) the Sentry logo.</p>\n<p>While researching the origins of metal band logos everything ultimately leads back to one band - Black Sabbath. Mere moments into their debut album, after the church bells had grew to a thunderous cresendo of distorited guitar. A simple question is asked to the listener “What is this that stands before me?“. But the album cover asked this question well before the needle even dropped.</p>\n<p>The cover is features a haunting photo of a woman stand along in the woods, adorned by a creepy, bubbly, psychedelic wordmark pinned to the top corner inspired by black lettering from centuries past. This imagery perfectly captured what was in store for the next 40 minutes.</p>\n<p><img src=\"/post-images/sentry-metal/sentry-metal-black-sabbath-cover.png\" alt=\"Black Sabbath Cover\"></p>\n<p>Metal has evolved considerably over the past 50 years to include hundreds of different sub-genres and artistic styles. Even at Sentry asking <em>“what is your favorite metal genere?”</em> in our  <code>#metal</code> slack channel provided many different results, and a few I have never even heard of.</p>\n<p><img src=\"/post-images/sentry-metal/sentry-metal-slack-convo.png\" alt=\"Slack Metal Convo\"></p>\n<p>Before I even drew a single line I queued up my favorite <a href=\"https://youtu.be/voCRlFlj9yA\">Blood Incantation album</a> turned the volume to twelve and after a sufficent amount of blood had pooled within my ear canals did I feel <strong>fully prepared</strong> to begin drawing.</p>\n<p>My initial rough sketching started in Procreate, but quickly I moved all the work into Illustrator. I knew having the final artwork in a vector format would offer me the greatest degree of flexibility with variations.</p>\n<p><strong>Moodboard of Mayhem</strong>\n<img src=\"/post-images/sentry-metal/sentry-metal-research.png\" alt=\"Moodboard of Mayhem\"></p>\n<p><strong>Illustrator File</strong>\n<img src=\"/post-images/sentry-metal/sentry-metal-process-illustrator.png\" alt=\"Sentry Metal Process, Illustrator view\"></p>\n<p><strong>Final Artwork</strong>\n<img src=\"/post-images/sentry-metal/sentry-metal-options-final.png\" alt=\"Sentry Metal Options\"></p>\n<p>At the end of hackweek the entire company gets together to demo what what we built. The thought of having the entire company watch a video with intense metal music playing in the background greatly ammused me and well enjoy!</p>\n<p><strong>Watch for yourself</strong>\n<a href=\"https://vimeo.com/771728872/7c4f744abc\"><img src=\"/post-images/sentry-metal/sentry-metal-video-fake.png\" alt=\"IMAGE ALT TEXT HERE\"></a></p>";

				const frontmatter = {"layout":"../../layouts/BlogPost.astro","title":"Sentry goes metal","heroImage":"/post-images/sentry-metal/sentry-metal-outline.png","description":"The most metal thing you have ever seen.","pubDate":"Dec 9, 2022","location":"Seattle","count":"001"};
				const file = "/Users/johnmanhart/code/opposite-orbit/src/pages/blog/sentry-metal.md";
				const url = "/blog/sentry-metal";
				function rawContent() {
					return "\nI have always been a metalhead – black, speed, Norwegian, death, DOOM I love it all. So, this year for our annual hackweek I decided to Metalify (is that even a word?) the Sentry logo.\n\nWhile researching the origins of metal band logos everything ultimately leads back to one band - Black Sabbath. Mere moments into their debut album, after the church bells had grew to a thunderous cresendo of distorited guitar. A simple question is asked to the listener \"What is this that stands before me?\". But the album cover asked this question well before the needle even dropped. \n\nThe cover is features a haunting photo of a woman stand along in the woods, adorned by a creepy, bubbly, psychedelic wordmark pinned to the top corner inspired by black lettering from centuries past. This imagery perfectly captured what was in store for the next 40 minutes. \n\n![Black Sabbath Cover](/post-images/sentry-metal/sentry-metal-black-sabbath-cover.png)\n\nMetal has evolved considerably over the past 50 years to include hundreds of different sub-genres and artistic styles. Even at Sentry asking _\"what is your favorite metal genere?\"_ in our  `#metal` slack channel provided many different results, and a few I have never even heard of.\n\n![Slack Metal Convo](/post-images/sentry-metal/sentry-metal-slack-convo.png)\n\nBefore I even drew a single line I queued up my favorite [Blood Incantation album](https://youtu.be/voCRlFlj9yA) turned the volume to twelve and after a sufficent amount of blood had pooled within my ear canals did I feel **fully prepared** to begin drawing.\n\nMy initial rough sketching started in Procreate, but quickly I moved all the work into Illustrator. I knew having the final artwork in a vector format would offer me the greatest degree of flexibility with variations. \n\n**Moodboard of Mayhem**\n![Moodboard of Mayhem](/post-images/sentry-metal/sentry-metal-research.png)\n\n**Illustrator File**\n![Sentry Metal Process, Illustrator view](/post-images/sentry-metal/sentry-metal-process-illustrator.png)\n\n**Final Artwork**\n![Sentry Metal Options](/post-images/sentry-metal/sentry-metal-options-final.png)\n\nAt the end of hackweek the entire company gets together to demo what what we built. The thought of having the entire company watch a video with intense metal music playing in the background greatly ammused me and well enjoy!\n\n**Watch for yourself**\n[![IMAGE ALT TEXT HERE](/post-images/sentry-metal/sentry-metal-video-fake.png)](https://vimeo.com/771728872/7c4f744abc)\n";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
