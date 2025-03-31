import { getObjectValues } from "@/helpers/typescriptHelper";
import { navRoutes } from "./navigationConsts";
import { Description } from "@mui/icons-material";

export type Project = {
  label: string,
  href: string,
  description: string, // `${string}.` - TS can't figure out the string+string
  tags?: string[],
};

export type ProjectWorkKeys = (
    'projectT'
  | 'projectCC'
  | 'projectF'
  | 'projectLA'
  | 'projectA'

  | 'projectDBC'

  | 'projectDevelopmentAssistantApp'
);

export type ProjectHomeKeys = (
    'projectDiscordBot'
  | 'projectMaintainMultiLayeredWabAppAndBot'
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
  projectLA: {
    label: 'Self-Serve Analysis Page',
    href: navRoutes.projectLA().path,
    description: 'One of my proudest projects, I took a common support query a client would ask and made a self-serve page for them.',
    tags: [
      'T-SQL',
      'React',
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
  projectDevelopmentAssistantApp: {
    label: 'Development Assistant Application',
    href: navRoutes.projectDevelopmentAssistantApp().path,
    description: 'My greatest achievement at the company; a tool to make our database changes easier, less error prone, and save the company time.',
    tags: [
      'T-SQL',
      'React',
      'Electron (first project)'
    ],
  },
  projectA: {
    label: 'TypeScript React App',
    href: navRoutes.projectA().path,
    description: 'This project was my introduction to Next.js and TypeScript through a brand new application I had not worked on before.',
    tags: [
      'T-SQL',
      'React',
      'Next.js (first project)',
      'TypeScript (first project)',
    ]
  },
  projectDBC: {
    label: 'Database Copy C# Job',
    href: navRoutes.projectDBC().path,
    description: 'This project was to create a job that would reguarly clone data from one database to another, and perform some post-processing on the copy.',
    tags: [
      'T-SQL',
      'C# (first project)'
    ],
  }
} as const;
/*
Additional Work Projects:
 - C# App that moves data around
*/

export const projectsWorkArr: Project[] = 
  getObjectValues(projectsWorkRecord);

export const projectsHomeRecord: Record<ProjectHomeKeys, Project> = {
  projectDiscordBot: {
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
  projectMaintainMultiLayeredWabAppAndBot: {
    label: 'Maintain a Multi-Layered Web App and Bot',
    href: navRoutes.projectMaintainMultiLayeredWabAppAndBot().path,
    description: 'I maintain a Web App, Discord Bot, API, and Backend for a Friend.',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Discord.js',
      'Express',
      'Konva/Canvas',
      'Leaflet',
      'OAuth',
      'pm2',
    ]
  }
};

export const projectsHomeArr: Project[] = 
  getObjectValues(projectsHomeRecord);