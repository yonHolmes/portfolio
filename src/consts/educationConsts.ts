import { ImageAuto, ImageClient } from "@/components/generic/image/ImageClient";
import { Proficiency } from "@/components/generic/proficiency/Proficiency";
import { IMAGE_BASE_PATH } from "@/consts/appConsts";
import { navRoutes } from "./navigationConsts";

export const educationType = {
  certification: 'cert',
  course: 'course',
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
  }
}

export type EducationInfo = {
  education: string,
  educationURL?: string,
  verificationURL?: string,
  image?: {
    src: React.ComponentProps<typeof ImageAuto>["src"],
    alt: React.ComponentProps<typeof ImageAuto>["alt"],
  },
  onClick?: (onNav: (path: string) => void) => void,
  type: EducationType,
  date: Date,
  dateStr: string,
}

export const education: Record<string, EducationInfo> = {
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
    educationURL: '',
    type: educationType.course,
    date: new Date('2025-03-10'),
    dateStr: 'March 2025'
  }
}