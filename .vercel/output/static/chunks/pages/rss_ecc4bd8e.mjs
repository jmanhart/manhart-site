import rss from '@astrojs/rss';
import { S as SITE_TITLE, b as SITE_DESCRIPTION } from './about_9eb0682c.mjs';
import '../astro_145b4cb1.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                               *//* empty css                           */
const get = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: [],
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });

export { get };
