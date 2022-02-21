const ROUTES = {
  HOME: '/',
  PROJECT: {
    PATH: '/projects/:project_id',
    BASE: '/projects',
    OVERVIEW: '/projects/overview',
  },
  TIMELINE: '/timeline',
  ABOUT: '/about',
  RESOURCES: '/resources',
} as const;

export default ROUTES;
