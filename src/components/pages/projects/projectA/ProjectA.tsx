"use client"

import { ListChip } from "@/components/generic/listChipElm/ListChipElm";
import { SpanHighlight as Span } from "@/components/generic/spanHighlight/SpanHighlight";
import { projectsWorkArr, projectsWorkRecord } from "@/consts/projectConsts";
import { ChangeCircle, Checklist, Speed } from "@mui/icons-material";
import { Box, Chip, Divider, Icon, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { ListText } from "@/components/generic/listText/ListText";
import LinkNextJS from "next/link";
import { navRoutes } from "@/consts/navigationConsts";

function Link(props: React.ComponentProps<typeof LinkNextJS>) {

  const {
    palette: {
      primary: {
        main,
      }
    }
  } = useTheme();

  return (
    <LinkNextJS
      style={{ color: main }}
      {...props}
    />
  )
}

const linkDiscordBot = navRoutes.projectDiscordBot().path;

export function ProjectA() {
  console.log('ProjectA');

  const {
    palette: {
      primary: {
        main,
      }
    }
  } = useTheme();

  return (
    <Stack
      gap={2}
    >
      <Typography variant="h5">
        {projectsWorkRecord.projectA.label}
      </Typography>

      <Typography>
        This project was my first away from applications I had either maintained for years or built from scratch.
        Myself, two from my current team, and some others from the parent company were working on a application written
        in <Span>Next.js</Span> and <Span>TypeScript</Span> (just like this webpage) and was my introduction to both. 
      </Typography>

      <Typography>
        Given that both these tools were new to me, and I joined the project a few sprints into its development
        I asked if someone could run me through the file stucture and data-flow principles, this was invaluable to allowing
        me to hit the ground running.
      </Typography>

      <Typography>
        I have since compleatly fallen for <Span>TypeScript</Span> and wish that I had learnt it before writing my <Link href={linkDiscordBot}>Discord Bot</Link>,{' '}
        which I wrote in Node.js without TypeScript.
      </Typography>

      <Divider sx={{ opacity: 1 }} color={main} />

      <Typography variant="h6">
        What I learned
      </Typography>

      <ListText
        list={[
          'How Next.js handles routing',
          
          'A bit about monorepos, which the project was within and how this can have various benefits including testing only changed and dependent elements.',

          'Mock Service Worker for simulating API calls in a more programming based way.',

          'Using react-i18next to make the Application translatable into any language.'
        ]}
      />

    </Stack>
  )
}