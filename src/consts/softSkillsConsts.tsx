import { ReactNode } from "react";
import { navRoutes } from "./navigationConsts";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import PaletteIcon from '@mui/icons-material/Palette';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import HearingIcon from '@mui/icons-material/Hearing';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import TimerIcon from '@mui/icons-material/Timer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Groups3Icon from '@mui/icons-material/Groups3';
import { projectsWorkRecord } from "./projectConsts";

type QuickLink = {
  label: string,
  href: string,
}

export type SoftSkill = {
  icon?: ReactNode,
  heading: string,
  content: string[],
  links?: QuickLink[],
};

export const softSkills: SoftSkill[] = [
  {
    icon: <ConnectWithoutContactIcon/>,
    heading: 'Communication',
    content: [
      'I always try to be as detailed as possible in my interactions, as well as being'
      + ' mindful of my audience, for instance the apporiate amount of technical detail to go into'
      + ' depending on the Client I was speaking to in the past would vary.',

      'I have had extensive experience with Jira for both internal and external communication,'
      + ' making sure to have a detailed paper-trail of progress, developments, decisions, etc'
      + ' noted down for not only potetional look-back but to aid the team as needed.',
    ],
  },
  {
    icon: <GroupWorkIcon/>,
    heading: 'Collaboration',
    content: [
      'I used to work in a small company that had our own Platform; Backend, Frontend, API, Authentication, Services;'
      + ' different parts across different systems were understood by different people; the Platform team helped us with'
      + ' things like displaying emails sent through the platform on the frontend of the apps, I had \'Subject Matter Expert\''
      + ' level knowledge of the databases (still do).',
      
      'We all worked together, pulled in who we needed, walked over to someone\'s desk when they sounded like they were having'
      + ' trouble, we were a very close and hard working team, and I take that level of collaboration into any job I do'
      + ' if you need help with anything from e.g. TypeScript, to Excel; I\'ll be there.'
    ]
  },
  {
    icon: <AddReactionIcon/>,
    heading: 'Emotional intelligence',
    content: [
      'Whenever cirmstances change, I always try to take a step back to reevalulate; if needed'
      + ' I communicate the changes upstream or out with the wider team to get input and we decide'
      + ' how to tackle the change.',

      'I have worked in a handful of teams and always try to support my colleagues, offering help'
      + ' even if I lack the skillset, sometimes just explaining out a problem can help me find a'
      + ' solution elsewhere for instance who would hold that answer.',
    ],
  },
  {
    icon: <EmojiNatureIcon/>,
    heading: 'Adaptability',
    content: [
      'I try to be adaptable to my environment and requirements, for me a change in cirmstances can be'
      + ' its own challange and as per \'Emotional intelligence\' above, I do my best to re-position and'
      + ' intelligently take on the change to the best of my ability, and if I fall short; be comfortable'
      + ' with asking for assistance.',
    ],
  },
  {
    icon: <PaletteIcon/>,
    heading: 'Creativity',
    content: [
      'I like to think of myself as a Creative person, I have developed a couple of bespoke approachs to'
      + ' different technical situations thankfully they have often met with success or been able to be refined'
      + ' into a solid solution.',

      'One of my favorite tasks is to create frontends in React just like this website you are currently reading.'
      + ' I found creating the \'Proficiency\' tiles on the Home page particarlly enjoyable.'
    ]
  },
  {
    icon: <SyncProblemIcon/>,
    heading: 'Problem solving',
    content: [
      'Whenever I design something be it code or a frontend, it is to solve one problem; but sometimes'
      + ' that journey encounters its own problems during that development. I do my best to lean on technology'
      + ' to assist with problem solving such as strongly typing my code or writing tests to ensure it works as intended',

      'In general, I try to take a systermatic approach to my development, ensuring that each stage of approach is stable,'
      + ' rather than writing 300 lines of code based on a domino of expectations that did not hold true.'
    ]
  },
  {
    icon: <HearingIcon/>,
    heading: 'Patience',
    content: [
      'For interpersonal patience, I always remind myself that the person I am speaking with not attempting'
      + ' to misunderstand/forget/etc, everyone is trying their best and we can only manage so much information'
      + ' at any one time.',

      'If I feel that the communication approach I am using is not working, I will try and take some time to consider'
      + ' a different approach to explain it, perhaps implementing some form of visual aid or metaphor depending on the'
      + ' cirmstances.',

      'As for personal patience, I can be highly critical of myself and be disappointed when I stuggle with something,'
      + ' so I do my best to take a moment, remind myself that not everthing will click 100% of the time, perhaps go make'
      + ' some Tea, and come back to it with a fresher pair of eyes and a reset headspace.'
    ]
  },
  {
    icon: <PsychologyAltIcon/>,
    heading: 'Self-awareness',
    content: [
      'Self-awareness for me can sometimes be difficult, but I try my best to communicate with others'
      + ' when I think I am falling short or "should know something" so that they can either reassure me'
      + ' that I am expecting too much of myself, or that I could be furthur up the curve.',

      'This way while my awareness of myself might miss the mark, I have mechanisms to correct and address it.'
    ]
  },
  {
    icon: <TimerIcon/>,
    heading: 'Time management',
    content: [
      'I have to admit I am a creature of focus, and if I were to choose; I would pick to work on one task at a time,'
      + ' this doesn\'t stop me working on something as far as I can and swapping however.',

      'As for completing a task, I support this through estimations where possible, either solo or as a team we put a number'
      + ' to how much time it should take the assigniee; then when I am working on the task, I can gauge the progress against the'
      + ' time remaining and be at least consious of it.',

      'I had an occasion of project Time management when I identified that the Lead Dev on the project wanted us to re-write APIs'
      + ' as well as re-write the entier frontend of the application; this was of concern to me from my strong grasp of not only the'
      + ' sheer number of APIs but their complexity with the database as well',
    ],
    links: [
      {
        label: projectsWorkRecord.projectCC.label,
        href: navRoutes.projectCC().path,
      },
    ]
  },
  {
    icon: <LocalOfferIcon/>,
    heading: 'Negotiation',
    content: [
      'The only negotiation situations I would find myself in, is negotiating how much time we have for a project'
      + ' some of the best ways to fail a project are to assume you won\'t hit unexpected issues, or to skimp out on'
      + 'QA/Testing/UAT, so where possible I will always strive for a little more time than needed, than too little.'
    ]
  },
  {
    icon: <Groups3Icon/>,
    heading: 'Leadership',
    content: [
      'I have not by role held a Leadership position, but I have always tried to have an eye open on the Team, the Project,'
      + ' the stability of the applications, etc. Where possible and where my skills meet the needs, I try to oversee what I can'
      + ' and voice concerns if I feel any arise (such as the one mentioned in \'Time management\')',
    ]
  }
];