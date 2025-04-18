import { ImageAuto, ImageClient } from "@/components/generic/image/ImageClient";
import { Proficiency } from "@/components/generic/proficiency/Proficiency";
import { IMAGE_BASE_PATH } from "@/consts/appConsts";
import { navRoutes } from "./navigationConsts";

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
  image?: {
    src: React.ComponentProps<typeof ImageAuto>["src"],
    alt: React.ComponentProps<typeof ImageAuto>["alt"],
  },
  onClick?: (onNav: (path: string) => void) => void,
  type: EducationType,
  skills?: string[],
  date: Date,
  dateStr: string,
}

export const education: Record<string, EducationInfo> = {
  godotCActionAdventure: {
    education: 'Godot 4 C# Action Adventure: Build your own 2.5D RPG',
    subText: 'GameDev.tv',
    educationURL: 'https://www.gamedev.tv/courses/godot-c-action-adventure',
    type: educationType.course,
    date: new Date('2025-04-12'),
    dateStr: 'Feb-April 2025',
    skills: ['C#', 'Godot'],
  },
  foundationalCSharp: {
    education: 'Foundational C#',
    educationURL: 'https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/',
    verificationURL: 'https://www.freecodecamp.org/certification/YonHolmes/foundational-c-sharp-with-microsoft',
    image: {
      src: `${IMAGE_BASE_PATH}/courses/certification_freeCodeCamp_foundationalCSharp.png`,
      alt: 'Foundational C#'
    },
    type: educationType.certification,
    date: new Date('2025-02-03'),
    dateStr: 'Feb 2025',
    skills: ['C#'],
  },
  introToComputerNetworking: {
    education: 'Introduction to Computer Networking',
    educationURL: 'https://www.udemy.com/course/networkingbasics/learn/quiz/5866922#overview',
    verificationURL: 'https://www.udemy.com/certificate/UC-98c1cf77-f3b6-4567-b2c2-bf449cf70417/',
    image: {
      src: `${IMAGE_BASE_PATH}/courses/certification_udmey_introToComputerNetworking.jpg`,
      alt: 'Introduction to Computer Networking'
    },
    type: educationType.certification,
    date: new Date('2025-03-04'),
    dateStr: 'March 2025',
    skills: ['Computer Networking'],
  },
  awsZeroToHero: {
    education: 'Amazon Web Services (AWS) - Zero to Hero',
    educationURL: 'https://www.udemy.com/share/101spk3@zH7Ee2iQ8LS_6D31LSk9LwQcq1WaslawX7Jurc1uPkjrLA5C3pZGmK0PVkQ2MVgkzQ==/',
    type: educationType.course,
    date: new Date('2025-04-02'),
    dateStr: 'April 2025',
  },
  dockerEssentials: {
    education: 'Docker Essentials',
    educationURL: 'https://www.udemy.com/share/101rq43@3saNlMzkfLGRh3N7SddA5YJY1uL4J4nuYX4IVcgk-WmnJm_a5J-luq1HLf-zZgp4nQ==/',
    type: educationType.course,
    date: new Date('2025-03-10'),
    dateStr: 'March 2025',
    skills: ['Docker'],
  },
  mobileDesktopAppsWithMaui: {
    education: 'Build mobile and desktop apps with .NET MAUI',
    educationURL: 'https://learn.microsoft.com/en-us/training/paths/build-apps-with-dotnet-maui/',
    type: educationType.learningPath,
    date: new Date('2025-02-01'),
    dateStr: 'Feb 2025',
    skills: ['C#', 'MAUI'],
  },
  learningFabric: {
    education: 'Get started with Microsoft Fabric',
    educationURL: 'https://learn.microsoft.com/en-us/training/paths/get-started-fabric/',
    verificationURL: 'https://learn.microsoft.com/en-us/users/yonholmes-8039/achievements/3yvup4rh?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    type: educationType.learningPath,
    date: new Date('2024-05-21'),
    dateStr: 'May 2024',
    skills: ['Fabric'],
  },
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