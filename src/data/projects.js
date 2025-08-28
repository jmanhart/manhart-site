export const projects = [
  {
    slug: "age-when-made",
    tag: "Personal Project",
    href: "/projects/age-when-made",
    title: "Age When Made",
    description:
      "A tool for calculating actors ages now and when movies were made.",
    liveUrl: "https://age-when-made.com",
    liveSiteText: "www.age-when-made.com",
    githubUrl: "https://github.com/jmanhart/age-when-made",
    variant: "default",
  },
  {
    slug: "trad-directory",
    tag: "Personal Project",
    href: "/projects/trad-directory",
    title: "The Trad Directory",
    description: "A directory for finding good trad tattoo artists.",
    liveUrl: "https://trad-directory.com",
    liveSiteText: "trad-directory.com",
    githubUrl: "https://github.com/jmanhart/trad-directory",
    variant: "default",
  },
  {
    slug: "commit-vibes",
    tag: "Personal Project",
    href: "/projects/commit-vibes",
    title: "Commit Vibes",
    description: "An npm package to track your vibes while vibe coding.",
    liveUrl: "https://www.npmjs.com/package/commit-vibes",
    liveSiteText: "npm package",
    githubUrl: "https://github.com/jmanhart/commit-vibes",
    variant: "default",
  },
  {
    slug: "records-app",
    tag: "Personal Project",
    href: "/projects/records-app",
    title: "My Record Collection",
    description: "Keeping my vinyl collection in order",
    liveUrl: "https://records-app.com",
    liveSiteText: "records-app.com",
    githubUrl: "https://github.com/jmanhart/records-app",
    variant: "default",
  },
];

// Helper function to get a project by slug
export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

// Helper function to get all projects
export function getAllProjects() {
  return projects;
}
