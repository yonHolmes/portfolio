import { navRoutes } from "./navigationConsts";

export type Project = {
  label: string,
  href: string,
  description: string,
  tags?: string[],
};

type ProjectWorkKeys = (
    'projectT'
  | 'projectCC'
  | 'projectF'
  | 'projectLA'
);

export const projectsWorkRecord: Record<ProjectWorkKeys, Project> = {
  projectT: {
    label: 'App Database I Designed',
    href: navRoutes.projectT().path,
    description: 'This project had me positioned as the sole developer of the SQL database structure and API'
      + ' while my colleagues designed the frontend in React (prior to me learning React)',
    tags: [
      'T-SQL',
    ]
  },
  projectCC: {
    label: 'CRM React Frontend Rewrite',
    href: navRoutes.projectCC().path,
    description: 'This project was to re-write a pre v1 React app in (I believe) v16 React, and was where I learned React.',
    tags: [
      'T-SQL',
      'React (first project)',
      'Node.js (first project)',
    ]
  },
  projectF: {
    label: 'Complex Questionaire',
    href: navRoutes.projectF().path,
    description: 'Creation of a complex Questionaire, I handled the data-structure and the "brain".',
    tags: [
      'T-SQL',
      'React',
      'React Context/Hooks (first project)'
    ]
  },
  projectLA: {
    label: 'Self-Serve Analysis Page',
    href: navRoutes.projectLA().path,
    description: 'One of my proudest projects, I took a common support query a client would ask and made a self-serve page for them.',
    tags: [
      'T-SQL',
      'React',
    ]
  },
} as const;

export const projectsWorkArr: Project[] = [
  projectsWorkRecord.projectT,
  projectsWorkRecord.projectCC,
  projectsWorkRecord.projectF,
  projectsWorkRecord.projectLA,

  /*
  Additional Work Projects:
   - C# App that moves data around
   - Dev Helper Tool(s)
  */
  
];

export const projectsHome: Project[] = [
  {
    label: 'Discord Bot',
    href: navRoutes.projectDiscordBot().path,
    description: 'In early 2022, I decided to create my own Discord Bot, and it is still used and maintained today.',
    tags: [
      'Node.js',
      'MongoDB',
      'Discord.js',
      'Konva/Canvas',
    ]
  },
  {
    label: 'Maintain a Multi-Layered Web App and bot',
    href: navRoutes.projectMaintainMultiLayeredWabAppAndBot().path,
    description: 'I maintain a Web App, Discord Bot, API, and Backend for a Friend.',
    tags: [
      'Node.js',
      'MongoDB',
      'Discord.js',
      'Express',
      'Konva/Canvas',
    ]
  }
]