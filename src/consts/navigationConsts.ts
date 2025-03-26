import { BASE_PATH } from "./appConsts";

type NavRouteData = {
  path: string,
  fullPath: string,
}

type navKeys = 'projects'
  | 'projectCC'
  | 'softSkills'
;

type NavRoutes = Record<
  navKeys,
  (...args: unknown[]) => NavRouteData
  >;

export const navRoutes: NavRoutes = {
  projects: () => ({
    path: '/projects',
    fullPath: `/${BASE_PATH}/projects`
  }),
  projectCC: () => ({
    path: '/projects/projectCC',
    fullPath: `/${BASE_PATH}/projects/projectCC`
  }),

  softSkills: () => ({
    path: '/softSkills',
    fullPath: `${BASE_PATH}/softSkills`,
  })
}