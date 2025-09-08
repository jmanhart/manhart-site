import type { AstroInstance } from "astro";

type Opts<T extends Record<string, unknown>> = {
  files: Record<string, T>;
  schema: any;
};

const astroPageType = {
  "draft?": "boolean",
};

const getAstroPages = <T extends Record<string, unknown> & AstroInstance>({
  files,
  schema,
}: Opts<T>) => {
  return Object.entries(files)
    .map(([path, file]) => ({
      ...file,
      id: path.replace(/^.*\/([^/]+)\.astro$/, "$1"),
    }))
    .filter((file) => !file.draft);
};

const schema = {
  title: "string",
  description: "string",
  authors: "string[]",
  publishedAt: "string",
};

type Slide = AstroInstance & typeof schema & { [key: string]: unknown };

export const getSlides = () =>
  getAstroPages<Slide>({
    files: import.meta.glob<true, string, Slide>(["../slides/**/*.astro"], {
      eager: true,
    }),
    schema,
  });
