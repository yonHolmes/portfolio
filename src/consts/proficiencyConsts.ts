import { ImageAuto, ImageClient } from "@/components/generic/image/ImageClient";
import { Proficiency } from "@/components/generic/proficiency/Proficiency";
import { IMAGE_BASE_PATH } from "@/consts/appConsts";
import { navRoutes } from "./navigationConsts";

export type ProficiencyInfo = {
  skill: React.ComponentProps<typeof Proficiency>["skill"]
  level: React.ComponentProps<typeof Proficiency>["level"]
  height?: React.ComponentProps<typeof ImageClient>["height"],
  width?: React.ComponentProps<typeof ImageClient>["width"],
  contrastingBackground?: React.ComponentProps<typeof Proficiency>["contrastingBackground"],
  tooltip?: React.ComponentProps<typeof Proficiency>["tooltip"],
  image?: {
    src: React.ComponentProps<typeof ImageAuto>["src"],
    alt: React.ComponentProps<typeof ImageAuto>["alt"],
  },
  onClick?: (onNav: (path: string) => void) => void,
}

export const proficiencies: Record<string, ProficiencyInfo> = {
  nodeJS: {
    skill: 'Node.js',
    tooltip: 'Node.js',
    level: 8,
    // width: '156px',
    contrastingBackground: true,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/nodejs.svg`,
      alt: 'Node.js Logo',
    }
  },
  react: {
    skill: 'React',
    tooltip: 'React',
    level: 8,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/react-2.svg`,
      alt: 'React Logo',
    }
  },
  mssqlServer: {
    skill: 'Microsoft SQL Server',
    tooltip: 'Microsoft SQL Server',
    level: 6,
    // width: '156px',
    contrastingBackground: true,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/microsoft-sql-server-1.svg`,
      alt: 'Microsoft SQL Server Logo',
    },
  },
  cSharp: {
    skill: 'C#',
    tooltip: 'C#',
    level: 3,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/c--4.svg`,
      alt: 'C# Logo',
    },
  },
  java: {
    skill: 'JAVA',
    tooltip: 'JAVA',
    level: 2,
    // width: '80px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/java-4.svg`,
      alt: 'Java Logo',
    },
  },
  typeScript: {
    skill: 'TypeScript',
    tooltip: 'TypeScript',
    level: 5,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/typescript-2.svg`,
      alt: 'TypeScript Logo',
    },
  },
  aws: {
    skill: 'AWS',
    tooltip: 'AWS',
    level: 4,
    // width: '100px',
    contrastingBackground: true,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/aws-2.svg`,
      alt: 'AWS Logo',
    },
  },
  fabric: {
    skill: 'Fabric',
    tooltip: 'Microsoft Fabric',
    level: 2,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/fabric_48_color.svg`,
      alt: 'Microsoft Fabric Logo',
    },
  },
  jira: {
    skill: 'Jira',
    tooltip: 'Jira',
    level: 5,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/jira-1.svg`,
      alt: 'Jira',
    },
  },
  mySQL: {
    skill: 'MySQL',
    tooltip: 'MySQL',
    level: 5,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/mysql-3.svg`,
      alt: 'MySQL',
    },
  },
  mongoDB: {
    skill: 'MongoDB',
    tooltip: 'MongoDB',
    level: 4,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/mongodb-icon-2.svg`,
      alt: 'MongoDB Logo',
    },
  },
  nextJS: {
    skill: 'NEXT.js',
    tooltip: 'NEXT.js',
    level: 4,
    // width: '100px',
    contrastingBackground: true,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/next-js.svg`,
      alt: 'NEXT.js Logo',
    },
  },
  electron: {
    skill: 'Electron',
    tooltip: 'Electron',
    level: 6,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/electron-1.svg`,
      alt: 'Electron Logo',
    },
  },
  versionControl: {
    skill: 'Version Control/GIT',
    tooltip: 'Version Control/GIT',
    level: 7,
    contrastingBackground: true,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/git.svg`,
      alt: 'GIT Logo',
    },
    // width: '120px',
  },
  googleMaps: {
    skill: 'Google Maps',
    tooltip: 'Google Maps',
    level: 2,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/google-maps-logo-2020.svg`,
      alt: 'Google Maps Logo 2020',
    },
    onClick: (handleNav) => handleNav?.(navRoutes.visited().path),
    // width: '130px',
  },
  godot: {
    skill: 'Godot',
    tooltip: 'Godot',
    level: 5,
    image: {
        src: `${IMAGE_BASE_PATH}/proficiencies/godot-logo.svg`,
        alt: 'Godot Logo',
    },
  },
  videoEditing: {
    skill: 'Video Editing',
    level: 4,
    // width: '120px',
  },
  express: {
    skill: 'Express',
    tooltip: 'Express',
    level: 3,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/express.png`,
      alt: 'Express Logo',
    },
    height: 120,
    // width: '140px',
  },
  monorepo: {
    skill: 'Monorepos',
    level: 3,
    // width: '120px',
  },
  cypress: {
    skill: 'Cypress',
    tooltip: 'Cypress',
    level: 2,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/cypress.svg`,
      alt: 'Cypress Logo',
    },
    contrastingBackground: true,
  },
  docker: {
    skill: 'Docker',
    tooltip: 'Docker',
    level: 3,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/docker.svg`,
      alt: 'Docker Logo',
    },
  },
  vue: {
    skill: 'VUE',
    tooltip: 'VUE',
    level: 4,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/vue-9.svg`,
      alt: 'VUE Logo',
    },
  }
}