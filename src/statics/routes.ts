const ROUTES = {
  HOME: '/',
  PROJECT: {
    PATH: '/projects/:project_id/',
    BASE: '/projects',
    OVERVIEW: '/projects/overview',
    NAV:'/projects/projects/:project_name/:project_nav',
  },
  TIMELINE: '/timeline',
  ABOUT: '/about',
  RESOURCES: '/resources',
  PROJECT_DESCRIPTION: '/project_description',
  JOIN_THE_TEAM: '/join_the_team',
  TEAM: '/team',
  CONTACT: '/contact',
} as const;

export default ROUTES;
