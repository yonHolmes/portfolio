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
  | 'projectA'

  | 'projectDevelopmentAssistantApp'

  | 'projectDBC'

  | 'projectDiscordBot'
  | 'projectMaintainMultiLayeredWabAppAndBot'

  | 'softSkills'

  | 'visited'

  | 'education'

  | 'references'
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
  projectA: () => ({
    path: '/projects/projectA',
    fullPath: `/${BASE_PATH}/projects/projectA`,
  }),

  projectDevelopmentAssistantApp: () => ({
    path: '/projects/projectDevelopmentAssistantApp',
    fullPath: `/${BASE_PATH}/projects/projectDevelopmentAssistantApp`,
  }),

  projectDBC: () => ({
    path: '/projects/projectDBC',
    fullPath: `/${BASE_PATH}/projects/projectDBC`,
  }),

  projectDiscordBot: () => ({
    path: '/projects/projectDiscordBot',
    fullPath: `/${BASE_PATH}/projects/projectDiscordBot`,
  }),
  projectMaintainMultiLayeredWabAppAndBot: () => ({
    path: '/projects/projectMaintainMultiLayeredWabAppAndBot',
    fullPath: `/${BASE_PATH}/projects/projectMaintainMultiLayeredWabAppAndBot`,
  }),

  softSkills: () => ({
    path: '/softSkills',
    fullPath: `${BASE_PATH}/softSkills`,
  }),

  visited: () => ({
    path: '/visited',
    fullPath: `${BASE_PATH}/visited`,
  }),

  education: () => ({
    path: '/education',
    fullPath: `${BASE_PATH}/education`,
  }),

  references: () => ({
    path: '/references',
    fullPath: `${BASE_PATH}/references`,
  }),


}