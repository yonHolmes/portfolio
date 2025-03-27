import { BASE_PATH } from "./appConsts";

type NavRouteData = {
  path: string,
  fullPath: string,
}

type navKeys = 'home'
  | 'projects'
  | 'projectCC'
  | 'projectF'
  | 'projectT'
  | 'projectLA'

  | 'projectDiscordBot'
  | 'projectMaintainMultiLayeredWabAppAndBot'

  | 'softSkills'
;

type NavRoutes = Record<
  navKeys,
  (...args: unknown[]) => NavRouteData
  >;

export const navRoutes: NavRoutes = {
  home: () => ({
    path: '/',
    fullPath: `/${BASE_PATH}/`,
  }),

  projects: () => ({
    path: '/projects',
    fullPath: `/${BASE_PATH}/projects`
  }),
  projectCC: () => ({
    path: '/projects/projectCC',
    fullPath: `/${BASE_PATH}/projects/projectCC`
  }),
  projectF: () => ({
    path: '/projects/projectF',
    fullPath: `/${BASE_PATH}/projects/projectF`,
  }),
  projectT: () => ({
    path: '/projects/projectT',
    fullPath: `/${BASE_PATH}/projects/projectT`,
  }),
  projectLA: () => ({
    path: '/projects/projectLA',
    fullPath: `/${BASE_PATH}/projects/projectLA`,
  }),

  projectDiscordBot: () => ({
    path: '/projects/discordBot',
    fullPath: `/${BASE_PATH}/projects/discordBot`,
  }),
  projectMaintainMultiLayeredWabAppAndBot: () => ({
    path: '/projects/multiLayeredApp',
    fullPath: `/${BASE_PATH}/projects/multiLayeredApp`,
  }),

  softSkills: () => ({
    path: '/softSkills',
    fullPath: `${BASE_PATH}/softSkills`,
  })
}