const routes = {
  HOME: "/",
  PROJECT: {
    PATH: "/projects/:project_id",
    BASE: "/projects",
  },
  TIMELINE: "/timeline",
} as const;

export default routes;
