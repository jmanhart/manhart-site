import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_145b4cb1.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/static","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ac0aa374.js"}],"styles":[{"type":"external","src":"/_astro/dark-mode.4c9fe34c.css"},{"type":"inline","content":"header[data-astro-cid-j7pv25f6]{box-sizing:border-box;overflow-x:hidden;position:fixed;top:0;width:100%;padding:1em;display:flex;justify-content:flex-end;border-bottom:1px solid #e6e6e6}@media (min-width: 576px){header[data-astro-cid-j7pv25f6]{background-color:transparent;border-bottom:0px;position:fixed;width:100%;z-index:999}}nav[data-astro-cid-j7pv25f6]{box-sizing:content-box;display:flex;width:100%;align-items:center;justify-content:space-between}.personal-logo[data-astro-cid-j7pv25f6]{width:24px;height:24px;background-color:gray}.hero-content[data-astro-cid-j7pv25f6]{width:75%;max-width:65ch}.root-info-container[data-astro-cid-j7pv25f6]{max-width:40em}.root-social-container[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;padding-top:1em;gap:1em}@media (min-width: 576px){.root-social-container[data-astro-cid-j7pv25f6]{padding-top:3em;flex-direction:row}}.root-social-links[data-astro-cid-j7pv25f6]{font-size:1.5em;cursor:pointer}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.d1dd9c84.js"}],"styles":[{"type":"external","src":"/_astro/dark-mode.4c9fe34c.css"},{"type":"inline","content":"h1[data-astro-cid-kr5chete]{padding:0;margin:0}\n"}],"routeData":{"route":"/product-designer","type":"page","pattern":"^\\/product-designer\\/?$","segments":[[{"content":"product-designer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/product-designer.astro","pathname":"/product-designer","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.d1dd9c84.js"}],"styles":[{"type":"external","src":"/_astro/dark-mode.4c9fe34c.css"},{"type":"inline","content":"h1[data-astro-cid-bl3zq74b]{padding:0;margin:0}\n"}],"routeData":{"route":"/colophon","type":"page","pattern":"^\\/colophon\\/?$","segments":[[{"content":"colophon","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/colophon.astro","pathname":"/colophon","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.5b8a3a3d.js"}],"styles":[{"type":"external","src":"/_astro/dark-mode.4c9fe34c.css"}],"routeData":{"route":"/records","type":"page","pattern":"^\\/records\\/?$","segments":[[{"content":"records","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/records.astro","pathname":"/records","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.d1dd9c84.js"}],"styles":[{"type":"external","src":"/_astro/dark-mode.4c9fe34c.css"},{"type":"inline","content":".title[data-astro-cid-bvzihdzo]{font-size:2em;margin:.25em 0 0}hr[data-astro-cid-bvzihdzo]{border-top:1px solid #ddd;margin:1rem 0}.secondary-info-container[data-astro-cid-bvzihdzo]{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;margin:0 0 .5em}\n"}],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3e7a24df.js"}],"styles":[{"type":"external","src":"/_astro/dark-mode.4c9fe34c.css"},{"type":"inline","content":".root-social-container[data-astro-cid-w7ysibkd]{display:flex;flex-direction:column;gap:1em}.root-social-links[data-astro-cid-w7ysibkd]{font-size:1.5em;cursor:pointer}\n"}],"routeData":{"route":"/social","type":"page","pattern":"^\\/social\\/?$","segments":[[{"content":"social","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/social.astro","pathname":"/social","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.d1dd9c84.js"}],"styles":[{"type":"external","src":"/_astro/dark-mode.4c9fe34c.css"},{"type":"inline","content":"h1[data-astro-cid-kh7btl4r]{padding:0;margin:0}a[data-astro-cid-kh7btl4r]{text-decoration:underline}.mobile-nav-wrapper[data-astro-cid-kh7btl4r]{background-color:#fff;width:100%;height:4em;position:fixed;bottom:0;display:flex;justify-content:space-around;align-items:center;border-top:1px solid #999}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.d1dd9c84.js"}],"styles":[{"type":"external","src":"/_astro/dark-mode.4c9fe34c.css"},{"type":"inline","content":".title[data-astro-cid-bvzihdzo]{font-size:2em;margin:.25em 0 0}hr[data-astro-cid-bvzihdzo]{border-top:1px solid #ddd;margin:1rem 0}.secondary-info-container[data-astro-cid-bvzihdzo]{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;margin:0 0 .5em}\n"}],"routeData":{"route":"/blog/sentry-metal","type":"page","pattern":"^\\/blog\\/sentry-metal\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"sentry-metal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/sentry-metal.md","pathname":"/blog/sentry-metal","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.d1dd9c84.js"}],"styles":[{"type":"external","src":"/_astro/dark-mode.4c9fe34c.css"},{"type":"inline","content":".title[data-astro-cid-bvzihdzo]{font-size:2em;margin:.25em 0 0}hr[data-astro-cid-bvzihdzo]{border-top:1px solid #ddd;margin:1rem 0}.secondary-info-container[data-astro-cid-bvzihdzo]{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;margin:0 0 .5em}\n"}],"routeData":{"route":"/blog/dark-mode","type":"page","pattern":"^\\/blog\\/dark-mode\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"dark-mode","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/dark-mode.md","pathname":"/blog/dark-mode","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.d1dd9c84.js"}],"styles":[{"type":"inline","content":"ul[data-astro-cid-ijnerlr2]{list-style-type:none;padding:unset}li[data-astro-cid-ijnerlr2]{display:flex;margin:0 0 1.5em;flex-direction:row;gap:1em}.blog-datestamp-container[data-astro-cid-ijnerlr2]{display:flex;flex:2 2 0;justify-content:flex-end}.blog-description-container[data-astro-cid-ijnerlr2]{display:flex;flex-direction:column;flex:6}.blog-description-container[data-astro-cid-ijnerlr2] h3[data-astro-cid-ijnerlr2]{margin:0;padding:0}.blog-short-description[data-astro-cid-ijnerlr2],.blog-date-stamp[data-astro-cid-ijnerlr2]{margin:0}.blog-number-count-container[data-astro-cid-ijnerlr2]{display:flex}.blog-number-count[data-astro-cid-ijnerlr2]{margin:0}\n"},{"type":"external","src":"/_astro/dark-mode.4c9fe34c.css"},{"type":"inline","content":".title[data-astro-cid-bvzihdzo]{font-size:2em;margin:.25em 0 0}hr[data-astro-cid-bvzihdzo]{border-top:1px solid #ddd;margin:1rem 0}.secondary-info-container[data-astro-cid-bvzihdzo]{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;margin:0 0 .5em}\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/johnmanhart/code/opposite-orbit/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/johnmanhart/code/opposite-orbit/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["/Users/johnmanhart/code/opposite-orbit/src/pages/colophon.astro",{"propagation":"none","containsHead":true}],["/Users/johnmanhart/code/opposite-orbit/src/pages/blog/dark-mode.md",{"propagation":"none","containsHead":true}],["/Users/johnmanhart/code/opposite-orbit/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["/Users/johnmanhart/code/opposite-orbit/src/pages/blog/sentry-metal.md",{"propagation":"none","containsHead":true}],["/Users/johnmanhart/code/opposite-orbit/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/johnmanhart/code/opposite-orbit/src/pages/product-designer.astro",{"propagation":"none","containsHead":true}],["/Users/johnmanhart/code/opposite-orbit/src/pages/records.astro",{"propagation":"none","containsHead":true}],["/Users/johnmanhart/code/opposite-orbit/src/pages/social.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/product-designer@_@astro":"pages/product-designer.astro.mjs","\u0000@astro-page:src/pages/colophon@_@astro":"pages/colophon.astro.mjs","\u0000@astro-page:src/pages/records@_@astro":"pages/records.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/social@_@astro":"pages/social.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/sentry-metal@_@md":"pages/blog/sentry-metal.astro.mjs","\u0000@astro-page:src/pages/blog/dark-mode@_@md":"pages/blog/dark-mode.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/blog.astro":"chunks/pages/blog_c2089606.mjs","/src/pages/colophon.astro":"chunks/pages/colophon_ca9aee73.mjs","/src/pages/index.astro":"chunks/pages/index_04edbf35.mjs","/src/pages/product-designer.astro":"chunks/pages/product-designer_37d7424f.mjs","/src/pages/records.astro":"chunks/pages/records_8850635a.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_211047e0.mjs","/src/pages/blog/sentry-metal.md":"chunks/pages/sentry-metal_698077a6.mjs","/src/pages/social.astro":"chunks/pages/social_cd1ccde7.mjs","\u0000@astrojs-manifest":"manifest_c5b745d1.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.ac0aa374.js","/astro/hoisted.js?q=1":"_astro/hoisted.5b8a3a3d.js","/astro/hoisted.js?q=2":"_astro/hoisted.3e7a24df.js","/astro/hoisted.js?q=3":"_astro/hoisted.d1dd9c84.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/icon-moon.svg","/icon-sun.svg","/placeholder-about.jpg","/placeholder-hero.jpg","/placeholder-social.jpg","/self-01.png","/self-02.png","/self-03.png","/sitemap-0.xml","/sitemap-index.xml","/_astro/dark-mode.4c9fe34c.css","/_astro/hoisted.3e7a24df.js","/_astro/hoisted.5b8a3a3d.js","/_astro/hoisted.ac0aa374.js","/_astro/hoisted.d1dd9c84.js","/post-images/dark-mode/dark-mode.png","/post-images/sentry-metal/sentry-metal-black-sabbath-cover.png","/post-images/sentry-metal/sentry-metal-options-final.png","/post-images/sentry-metal/sentry-metal-outline.png","/post-images/sentry-metal/sentry-metal-process-illustrator.png","/post-images/sentry-metal/sentry-metal-research.png","/post-images/sentry-metal/sentry-metal-slack-convo.png","/post-images/sentry-metal/sentry-metal-video-fake.png"]});

export { manifest };
