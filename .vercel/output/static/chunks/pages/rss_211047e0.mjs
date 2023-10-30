import rss from '@astrojs/rss';
import { S as SITE_TITLE, b as SITE_DESCRIPTION } from './about_472aee53.mjs';
import '../astro_145b4cb1.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                               *//* empty css                           */
const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: undefined,
		items: /* #__PURE__ */ Object.assign({"./blog/dark-mode.md": () => import('./dark-mode_ac55ed5a.mjs').then(n => n.d),"./blog/sentry-metal.md": () => import('./sentry-metal_698077a6.mjs')}),
	});

export { get };
