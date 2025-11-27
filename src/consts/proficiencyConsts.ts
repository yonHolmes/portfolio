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

export enum ProficiencyLevel {
  Novice = "Novice",
  Beginner = "Beginner",
  Competent = "Competent",
  Proficient = "Proficient",
  Expert = "Expert",
}

export const proficiencies: Record<string, ProficiencyInfo> = {
  nodeJS: {
    skill: 'Node.js',
    tooltip: 'Node.js',
    level: ProficiencyLevel.Proficient,
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
    level: ProficiencyLevel.Proficient,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/react-2.svg`,
      alt: 'React Logo',
    }
  },
  mssqlServer: {
    skill: 'Microsoft SQL Server',
    tooltip: 'Microsoft SQL Server',
    level: ProficiencyLevel.Proficient,
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
    level: ProficiencyLevel.Beginner,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/c--4.svg`,
      alt: 'C# Logo',
    },
  },
  java: {
    skill: 'JAVA',
    tooltip: 'JAVA',
    level: ProficiencyLevel.Novice,
    // width: '80px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/java-4.svg`,
      alt: 'Java Logo',
    },
  },
  typeScript: {
    skill: 'TypeScript',
    tooltip: 'TypeScript',
    level: ProficiencyLevel.Competent,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/typescript-2.svg`,
      alt: 'TypeScript Logo',
    },
  },
  aws: {
    skill: 'AWS',
    tooltip: 'AWS',
    level: ProficiencyLevel.Beginner,
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
    level: ProficiencyLevel.Novice,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/fabric_48_color.svg`,
      alt: 'Microsoft Fabric Logo',
    },
  },
  jira: {
    skill: 'Jira',
    tooltip: 'Jira',
    level: ProficiencyLevel.Proficient,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/jira-1.svg`,
      alt: 'Jira',
    },
  },
  mySQL: {
    skill: 'MySQL',
    tooltip: 'MySQL',
    level: ProficiencyLevel.Competent,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/mysql-3.svg`,
      alt: 'MySQL',
    },
  },
  mongoDB: {
    skill: 'MongoDB',
    tooltip: 'MongoDB',
    level: ProficiencyLevel.Beginner,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/mongodb-icon-2.svg`,
      alt: 'MongoDB Logo',
    },
  },
  nextJS: {
    skill: 'NEXT.js',
    tooltip: 'NEXT.js',
    level: ProficiencyLevel.Competent,
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
    level: ProficiencyLevel.Beginner,
    // width: '100px',
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/electron-1.svg`,
      alt: 'Electron Logo',
    },
  },
  versionControl: {
    skill: 'Version Control/GIT',
    tooltip: 'Version Control/GIT',
    level: ProficiencyLevel.Proficient,
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
    level: ProficiencyLevel.Novice,
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
    level: ProficiencyLevel.Beginner,
    image: {
        src: `${IMAGE_BASE_PATH}/proficiencies/godot-logo.svg`,
        alt: 'Godot Logo',
    },
  },
  blender: {
    skill: 'Blender',
    tooltip: 'Blender',
    level: ProficiencyLevel.Novice,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/blender-2.svg`,
      alt: 'Blender Logo',
    },
  },
  videoEditing: {
    skill: 'Video Editing',
    level: ProficiencyLevel.Beginner,
    // width: '120px',
  },
  express: {
    skill: 'Express',
    tooltip: 'Express',
    level: ProficiencyLevel.Novice,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/express.png`,
      alt: 'Express Logo',
    },
    height: 120,
    // width: '140px',
  },
  monorepo: {
    skill: 'Monorepos',
    level: ProficiencyLevel.Novice,
    // width: '120px',
  },
  cypress: {
    skill: 'Cypress',
    tooltip: 'Cypress',
    level: ProficiencyLevel.Beginner,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/cypress.svg`,
      alt: 'Cypress Logo',
    },
    contrastingBackground: true,
  },
  docker: {
    skill: 'Docker',
    tooltip: 'Docker',
    level: ProficiencyLevel.Novice,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/docker.svg`,
      alt: 'Docker Logo',
    },
  },
  vue: {
    skill: 'VUE',
    tooltip: 'VUE',
    level: ProficiencyLevel.Beginner,
    image: {
      src: `${IMAGE_BASE_PATH}/proficiencies/vue-9.svg`,
      alt: 'VUE Logo',
    },
  }
}