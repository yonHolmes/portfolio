import {
  Typography,
} from "@mui/material";

export type Reference = {
  person: string,
  content: React.ReactNode,
  association: string,
  linkedIn?: string,
};

export const referenceConsts: Reference[] = [
  {
    person: 'Bram peter van Zalk',
    linkedIn: 'https://www.linkedin.com/in/bp-van-zalk/',
    association: 'Old Colleague',
    content: (
      <>
        {[
          `"I had the pleasure of working alongside Yon for a brief time when I was just starting out as a junior developer, in my forties.`,
          `Yon was incredibly supportive and always made time to guide me in the right direction. He was patient, a great listener, and consistently demonstrated strong interpersonal skills and qualities that truly stood out.`,
          `He's an excellent team player: open to others' ideas, yet confident and grounded in his own. He was also excellent at managing client relationships, with a clear understanding of their needs and the ability to respond thoughtfully and effectively.`,
          `Even in the short time we worked together, Yon left a strong impression on me, and I'm truly glad to have had the opportunity to learn from him"`,
        ].map((text, idx) => <Typography key={idx}>{text}</Typography>)}
      </>
    )
  },
  {
    person: 'Aidan Lowson',
    linkedIn: 'https://www.linkedin.com/in/aidanlowson1/',
    association: 'Old Colleague',
    content: (
      <Typography>
        "Yon's a fantastic person to work with, if you're stuck on a problem he will  give you his time and patience ensuring you come away with knowledge of how to fix the problem yourself next time"
      </Typography>
    ),
  },
  {
    person: 'GP',
    linkedIn: 'https://www.linkedin.com/in/grant-pritchard-00401b199/',
    association: 'Old Colleague',
    content: (
      <Typography>
        I worked with Yon for 6 years and he was a pleasure to work with, he always has a positive attitude and he is always happy to give direction and help.
      </Typography>
    )
  }
]