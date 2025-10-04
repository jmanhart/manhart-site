import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

export async function GET(context) {
  const postImportResult = import.meta.glob('./writing/*.{md,mdx}', { eager: true });
  const posts = Object.values(postImportResult);

  return rss({
    // `<title>` field in output xml
    title: 'John Manhart',
    // `<description>` field in output xml
    description: 'Thoughts on design, development, and everything in between',
    // Pull in your project "site" from the endpoint context
    site: context.site,
    // Generate items with full content
    items: await Promise.all(posts.map(async (post) => {
      // Get the compiled content (rendered HTML)
      const compiledContent = await post.compiledContent();
      
      return {
        link: post.url,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.pubDate,
        description: post.frontmatter.description,
        // Include full post content as HTML
        content: sanitizeHtml(compiledContent, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
          allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ['src', 'alt', 'title', 'width', 'height']
          }
        }),
        // Add GUID for proper RSS compliance
        guid: post.url,
      };
    })),
    // RSS best practices
    customData: `
      <language>en-us</language>
      <managingEditor>manhartjohn@gmail.com (John Manhart)</managingEditor>
      <webMaster>manhartjohn@gmail.com (John Manhart)</webMaster>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <ttl>60</ttl>
    `,
  });
}
