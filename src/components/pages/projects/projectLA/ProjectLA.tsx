"use client"

import { ListChip } from "@/components/generic/listChipElm/ListChipElm";
import { SpanHighlight as Span } from "@/components/generic/spanHighlight/SpanHighlight";
import { projectsWorkArr, projectsWorkRecord } from "@/consts/projectConsts";
import { ChangeCircle, Checklist, Speed } from "@mui/icons-material";
import { Box, Chip, Divider, Icon, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { ListText } from "@/components/generic/listText/ListText";
import { MockupOfProjectLA } from "./MockupOfProjectLA";

export function ProjectLA() {
  console.log('ProjectLA');

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
        {projectsWorkRecord.projectLA.label}
      </Typography>

      <Typography>
        This is one of my favoriate projects I have worked on, however it was not its own project.
      </Typography>

      <Typography>
        In actuality, I was given a project to add a new feature to one of our CRM applications, which had a
        system that would make users unable to acquire a customer to call them based on various locks; this new
        feature was to add a new one. 
      </Typography>

      <Typography>
        Having worked on many tickets from clients from bugs to queries, I was aware of the frequent question of
        why groups of their users would have nobody to contact, the system would simply say they had run out; this
        was ultimatly because the locking system was working as designed.
      </Typography>

      <Typography>
        The problem, I expected that these queries were only going to increase many times over after deployment,
        so while also developing the project's changes I spoke to management, and successfully <Span>negotiated</Span> allowing me to also (as a secondary priority)
        develop a page which would allow certain users to investigate the availablity of the customers assigned to their area.
      </Typography>

      <Typography>
        I was successful in completing the project and this page, both of which got high praise for; the former meeting
        their needs and goals, and the latter for giving them such an overview of their customer's availablity.
      </Typography>

      <MockupOfProjectLA/>

      <Divider sx={{ opacity: 1 }} color={main} />

      <Typography variant="h6">
        What I learned
      </Typography>

      <ListText
        list={[
          'I confirmed my suspicion that depending on the audience, providing the tools to Self-Serve can be as valuable'
          + ' as the project they pay you to complete.',

          'I developed my professional negotiating skills by convincing the project manager that making this screen was not only valuable'
          + ' to the client, but valuable to us in gaining back hours we would have invested in their queries.'
        ]}
      />

    </Stack>
  )
}