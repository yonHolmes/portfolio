import { ProjectHomeKeys, projectsHomeRecord, projectsWorkRecord, ProjectWorkKeys } from "./projectConsts";

const tagGroups = {
  react: [
    'React',
    'Frontend',

    'JavaScript',
    'Script',
  ],
  tSQL: [
    'T-SQL',
    'SQL',
  ],
  electron: [
    'Electron',

    'React',
    'Frontend',

    'Standalone',
    'Installer',
    'EXE',
    'Installable',

    'JavaScript',
    'Script',
  ],
  accessable: [
    'Accessability',
    'Screen reader',
    'Screenreader',
    'Text-to-Speect',
    'Text to Speech',
    'Speech',
  ],
  translation: [
    'react-i18next',
    'Translation',
    'Translate',
    'i18next',
    'i18n',
  ],
  negotiate: [
    'negotiate',
    'negotiation',
    'negotiated',
    'negotiating',
  ],
  cSharp: [
    'C#',
    'dotNET',
    '.NET',
    'SOLID',
    'inheritence',
    'interface',
  ],
  mongoDB: [
    'MongoDB',
    'Mongoose',
    'Mongo',
  ],
  nodeJS: [
    'Node.js',
    'Node',
  ]
};

function combineArrays(...args: Array<string[]>) {
  return args.reduce((ac, cur) => {
    // Went with push, so we're not creating a new Array all the time
    ac.push(...cur);
    return ac;
  }, []);
}

function getWorkProjectDataAndCombine(key: ProjectWorkKeys, other: { tags: string[] }) {
  return {
    label: projectsWorkRecord[key].label,
    href: projectsWorkRecord[key].href,
    ...other,
  }
}

function getHomeProjectDataAndCombine(key: ProjectHomeKeys, other: { tags: string[] }) {
  return {
    label: projectsHomeRecord[key].label,
    href: projectsHomeRecord[key].href,
    ...other,
  }
}


export const searchableData = [
  getWorkProjectDataAndCombine('projectT', {
    tags: combineArrays(
      tagGroups.tSQL,
    ),
  }),

  getWorkProjectDataAndCombine('projectCC', {
    tags: combineArrays(
      tagGroups.react,
      tagGroups.tSQL,
    ),
  }),
  
  getWorkProjectDataAndCombine('projectLA', {
    tags: combineArrays(
      tagGroups.react,
      tagGroups.tSQL,
      tagGroups.negotiate,
    ),
  }),

  getWorkProjectDataAndCombine('projectDevelopmentAssistantApp', {
    tags: combineArrays(
      tagGroups.electron,
      tagGroups.tSQL,
      tagGroups.negotiate,
    ),
  }),

  getWorkProjectDataAndCombine('projectF', {
    tags: combineArrays(
      tagGroups.react,
      tagGroups.tSQL,
      tagGroups.accessable,
    ),
  }),

  getWorkProjectDataAndCombine('projectA', {
    tags: combineArrays(
      tagGroups.react,
      tagGroups.translation,
      [
        'TypeScript',
        'Mock Service Worker',
        'Mock',
      ]
    ),
  }),

  getWorkProjectDataAndCombine('projectDBC', {
    tags: combineArrays(
      tagGroups.tSQL,
      tagGroups.cSharp,
    )
  }),

  getHomeProjectDataAndCombine('projectDiscordBot', {
    tags: combineArrays(
      tagGroups.mongoDB,
      tagGroups.nodeJS,
    ),
  }),

  getHomeProjectDataAndCombine('projectMaintainMultiLayeredWabAppAndBot', {
    tags: combineArrays(
      tagGroups.mongoDB,
      tagGroups.nodeJS,
    ),
  })
]