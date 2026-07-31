import { ImageAuto, ImageClient } from "@/components/generic/image/ImageClient";
import { IMAGE_BASE_PATH } from "@/consts/appConsts";

export const educationType = {
  certification: 'cert',
  course: 'course',
  learningPath: 'learningPath',
  degree: 'degree',
} as const;

export type EducationType = typeof educationType[keyof typeof educationType];

type EducationTypeInfo = {
  name: string,
};

export const educationTypeToInfo: Record<EducationType, EducationTypeInfo> = {
  [educationType.certification]: {
    name: 'Certification',
  },
  [educationType.course]: {
    name: 'Course',
  },
  [educationType.learningPath]: {
    name: 'Learning Path',
  },
  [educationType.degree]: {
    name: 'Degree',
  },
}

export type EducationInfo = {
  education: string,
  subText?: string,
  educationURL?: string,
  verificationURL?: string,
  images?: Array<{
    src: React.ComponentProps<typeof ImageAuto>["src"],
    alt: React.ComponentProps<typeof ImageAuto>["alt"],
  }>,
  onClick?: (onNav: (path: string) => void) => void,
  type: EducationType,
  skills?: string[],
  date: Date,
  dateStr: string,
  logo?: {
    src: string,
    alt: string,
    text: string,
  }
}

const logos: Record<string, { src: string, alt: string, text: string }> = {
  blender: {
    src: `${IMAGE_BASE_PATH}/proficiencies/blender-2.svg`,
    alt: 'Blender Logo',
    text: 'Blender'
  },
  godot: {
      src: `${IMAGE_BASE_PATH}/proficiencies/godot-logo.svg`,
      alt: 'Godot Logo',
      text: 'Godot',
  },
}

export const education: Record<string, EducationInfo> = {
  
  // Blender First Wave
  blenderModellingForBeginners: {
    education: 'Learn 3D Modelling for Beginners',
    subText: 'GameDev.tv',
    educationURL: 'https://gamedev.tv/courses/complete-blender-creator/view',
    type: educationType.course,
    date: new Date('2026-07-31'),
    dateStr: 'July 2026',
    skills: ['Blender', 'Sculpting', 'Animation', 'Rigging'],
    logo: logos.blender,
  },

  blenderStylisedModels: {
    education: 'Blender Texture Painting: Create Stunning Stylised Models',
    subText: 'GameDev.tv',
    educationURL: 'https://gamedev.tv/courses/blender-texture-painting/view',
    type: educationType.course,
    date: new Date('2026-07-14'),
    dateStr: 'July 2026', // Started July 8th, finished 14th
    skills: ['Blender', 'Modelling', 'Texture Painting'],
    logo: logos.blender,
  },

  // Also did Blender-to-Godot but that's not terribly important to put here
  // https://gamedev.tv/courses/blender-to-godot/view

  // Godot Second Wave
  godotShadersCraftStunningVisuals: {
    education: 'Godot 4 Shaders: Craft Stunning Visuals',
    subText: 'GameDev.tv',
    educationURL: 'https://gamedev.tv/courses/godot-shaders',
    type: educationType.course,
    date: new Date('2026-07-03'),
    dateStr: 'July 2026',
    skills: ['Shaders', 'GDShader', 'Godot', 'Vertex', 'Fragment'],
    logo: logos.godot,
  },
  godotMakeYourOwnOnlineGame: {
    education: 'Godot 4 Multiplayer: Make Your Own Online Game',
    subText: 'GameDev.tv',
    educationURL: 'https://www.gamedev.tv/courses/godot-multiplayer',
    type: educationType.course,
    date: new Date('2026-06-02'),
    dateStr: 'May 2026',
    skills: ['GDScript', 'Godot', 'Multiplayer', 'RPC', 'Authority'],
    logo: logos.godot
  },
  godotActionCombatRPG3D: {
    education: 'Godot 4: Build an Action Combat RPG',
    subText: 'GameDev.tv',
    educationURL: 'https://www.gamedev.tv/courses/godot-rpg',
    type: educationType.course,
    date: new Date('2026-05-14'),
    dateStr: 'Feb-May 2026',
    skills: ['GDScript', 'Godot', 'Persistent Data'],
    logo: logos.godot
  },

  // First Dive into Blender
  blenderAnimeCharacter: {
    education: 'Make 3D Anime Characters in Blender',
    subText: 'GameDev.tv',
    educationURL: 'https://www.gamedev.tv/courses/blender-anime-character/view',
    type: educationType.course,
    date: new Date('2025-12-07'),
    dateStr: 'Oct-Dec 2025',
    skills: ['Blender', 'Shaders', 'Texture Painting', 'Weight Painting', 'Rigging', 'Inverse Kinematics'],
    logo: logos.blender,
  },

  // Godot First Wave
  godotComplete3d: {
    education: 'Complete Godot 3D: Code Your Own 3D Games In Godot 4!',
    subText: 'GameDev.tv',
    educationURL: 'https://www.gamedev.tv/courses/godot-complete-3d',
    type: educationType.course,
    date: new Date('2025-09-10'),
    dateStr: 'Aug-Sep 2025',
    skills: ['GDScript', 'Godot', 'Shaders'],
    logo: logos.godot,
  },
  godotCActionAdventure: {
    education: 'Godot 4 C# Action Adventure: Build your own 2.5D RPG',
    subText: 'GameDev.tv',
    educationURL: 'https://www.gamedev.tv/courses/godot-c-action-adventure',
    type: educationType.course,
    date: new Date('2025-04-12'),
    dateStr: 'Feb-April 2025',
    skills: ['C#', 'Godot'],
    logo: logos.godot,
  },

  // Some C# and others
  foundationalCSharp: {
    education: 'Foundational C#',
    subText: 'Free Code Camp',
    educationURL: 'https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/',
    verificationURL: 'https://www.freecodecamp.org/certification/YonHolmes/foundational-c-sharp-with-microsoft',
    images: [{
      src: `${IMAGE_BASE_PATH}/courses/certification_freeCodeCamp_foundationalCSharp.png`,
      alt: 'Foundational C#'
    }],
    type: educationType.certification,
    date: new Date('2025-02-03'),
    dateStr: 'Feb 2025',
    skills: ['C#'],
  },
  introToComputerNetworking: {
    education: 'Introduction to Computer Networking',
    subText: 'Udemy',
    educationURL: 'https://www.udemy.com/course/networkingbasics/learn/quiz/5866922#overview',
    verificationURL: 'https://www.udemy.com/certificate/UC-98c1cf77-f3b6-4567-b2c2-bf449cf70417/',
    images: [{
      src: `${IMAGE_BASE_PATH}/courses/certification_udmey_introToComputerNetworking.jpg`,
      alt: 'Introduction to Computer Networking'
    }],
    type: educationType.certification,
    date: new Date('2025-03-04'),
    dateStr: 'March 2025',
    skills: ['Computer Networking'],
  },
  awsZeroToHero: {
    education: 'Amazon Web Services (AWS) - Zero to Hero',
    subText: 'Udemy',
    educationURL: 'https://www.udemy.com/share/101spk3@zH7Ee2iQ8LS_6D31LSk9LwQcq1WaslawX7Jurc1uPkjrLA5C3pZGmK0PVkQ2MVgkzQ==/',
    type: educationType.course,
    date: new Date('2025-04-02'),
    dateStr: 'April 2025',
    skills: ['AWS'],
  },
  dockerEssentials: {
    education: 'Docker Essentials',
    subText: 'Udemy',
    educationURL: 'https://www.udemy.com/share/101rq43@3saNlMzkfLGRh3N7SddA5YJY1uL4J4nuYX4IVcgk-WmnJm_a5J-luq1HLf-zZgp4nQ==/',
    type: educationType.course,
    date: new Date('2025-03-10'),
    dateStr: 'March 2025',
    skills: ['Docker'],
  },
  mobileDesktopAppsWithMaui: {
    education: 'Build mobile and desktop apps with .NET MAUI',
    subText: 'Microsoft Learn',
    educationURL: 'https://learn.microsoft.com/en-us/training/paths/build-apps-with-dotnet-maui/',
    type: educationType.learningPath,
    date: new Date('2025-02-01'),
    dateStr: 'Feb 2025',
    skills: ['C#', 'MAUI'],
  },
  learningFabric: {
    education: 'Get started with Microsoft Fabric',
    subText: 'Microsoft Learn',
    educationURL: 'https://learn.microsoft.com/en-us/training/paths/get-started-fabric/',
    verificationURL: 'https://learn.microsoft.com/en-us/users/yonholmes-8039/achievements/3yvup4rh?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    type: educationType.learningPath,
    date: new Date('2024-05-21'),
    dateStr: 'May 2024',
    skills: ['Fabric'],
  },

  // University
  computerScienceDegree: {
    education: 'Computer Science Degree (First Class Honors)',
    subText: 'Oxford Brookes',
    type: educationType.degree,
    date: new Date('2014-06-05'),
    dateStr: '2011 - 2014',
  },
  foundationDegree: {
    education: 'Foundation Technology',
    subText: 'Oxford Brookes',
    type: educationType.degree,
    date: new Date('2011-09-01'),
    dateStr: '2010 - 2011',
  }
}