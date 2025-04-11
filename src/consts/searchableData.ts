import { navRoutes } from "./navigationConsts";
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
    'Database',
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
    'Csharp',
    'dotNET',
    '.NET',
    'ASP.NET',
    'SOLID',
    'inheritence',
    'interface',
  ],
  mongoDB: [
    'MongoDB',
    'Mongoose',
    'Mongo',
    'Database',
    'NoSQL',
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

function getWorkProjectDataAndCombine(key: ProjectWorkKeys, other: { searchTerms: string[] }) {
  return {
    label: projectsWorkRecord[key].label,
    href: projectsWorkRecord[key].href,
    keyTags: projectsWorkRecord[key].tags,
    ...other,
  }
}

function getHomeProjectDataAndCombine(key: ProjectHomeKeys, other: { searchTerms: string[] }) {
  return {
    label: projectsHomeRecord[key].label,
    href: projectsHomeRecord[key].href,
    keyTags: projectsHomeRecord[key].tags,
    ...other,
  }
}

type SearchData = {
  searchTerms: string[];
  label: string;
  href: string;
  keyTags: string[] | undefined,
};

export const searchableData: SearchData[] = [
  getWorkProjectDataAndCombine('projectT', {
    searchTerms: combineArrays(
      tagGroups.tSQL,
    ),
  }),

  getWorkProjectDataAndCombine('projectCC', {
    searchTerms: combineArrays(
      tagGroups.react,
      tagGroups.tSQL,
    ),
  }),
  
  getWorkProjectDataAndCombine('projectLA', {
    searchTerms: combineArrays(
      tagGroups.react,
      tagGroups.tSQL,
      tagGroups.negotiate,
    ),
  }),

  getWorkProjectDataAndCombine('projectDevelopmentAssistantApp', {
    searchTerms: combineArrays(
      tagGroups.electron,
      tagGroups.tSQL,
      tagGroups.negotiate,
    ),
  }),

  getWorkProjectDataAndCombine('projectF', {
    searchTerms: combineArrays(
      tagGroups.react,
      tagGroups.tSQL,
      tagGroups.accessable,
    ),
  }),

  getWorkProjectDataAndCombine('projectA', {
    searchTerms: combineArrays(
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
    searchTerms: combineArrays(
      tagGroups.tSQL,
      tagGroups.cSharp,
    )
  }),

  getHomeProjectDataAndCombine('projectDiscordBot', {
    searchTerms: combineArrays(
      tagGroups.mongoDB,
      tagGroups.nodeJS,
      [
        'discord',
        'discord.js',
      ]
    ),
  }),

  getHomeProjectDataAndCombine('projectMaintainMultiLayeredWabAppAndBot', {
    searchTerms: combineArrays(
      tagGroups.nodeJS,
      tagGroups.mongoDB,
      tagGroups.react,
      [
        'discord',
        'discord.js',
        'Express',
        'Konva',
        'Canvas',
        'Leaflet',
        'OAuth',
        'Auth',
        'pm2',
        'server',
      ]
    ),
  }),

  // Courses
  {
    label: 'AWS (Zero to Hero)',
    href: navRoutes.education().path,
    keyTags: [
      'Course',
      'AWS',
    ],
    searchTerms: [
      'Course',
      'AWS',
    ]
  },
  {
    label: 'Docker Essentials',
    href: navRoutes.education().path,
    keyTags: [
      'Course',
      'Docker',
    ],
    searchTerms: [
      'Course',
      'Docker',
      'Container',
    ],
  },
  {
    label: 'Foundational C#',
    href: navRoutes.education().path,
    keyTags: [
      'Certification',
      'C#',
    ],
    searchTerms: [
      'Certification',
      'Course',
      ...tagGroups.cSharp,
    ],
  },
]