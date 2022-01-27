const ROUTES = {
  HOME: '/',
  PROJECT: {
    PATH: '/projects/:project_id',
    BASE: '/projects',
    // might replace the base with overview if base url isn't used
    OVERVIEW: '/projects/overview',
  },
  TIMELINE: '/timeline',
  ABOUT: '/about',
  RESOURCES: '/resources',
} as const;

export default ROUTES;
