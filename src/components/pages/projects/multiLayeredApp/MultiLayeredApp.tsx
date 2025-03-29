"use client"

import { ListChip } from "@/components/generic/listChipElm/ListChipElm";
import { ListText } from "@/components/generic/listText/ListText";
import { SpanHighlight as Span } from "@/components/generic/spanHighlight/SpanHighlight";
import { projectsHomeRecord } from "@/consts/projectConsts";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import WebIcon from '@mui/icons-material/Web';
import ApiIcon from '@mui/icons-material/Api';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';


export function MultiLayeredApp() {
  console.log('MultiLayeredApp');

  const {
    palette: {
      primary: {
        main,
      },
    }
  } = useTheme();

  return (
    <Stack
      gap={2}
    >
      <Typography variant="h5">
        {projectsHomeRecord.projectMaintainMultiLayeredWabAppAndBot.label}
      </Typography>

      <Typography>
        I maintain a suite of repos for a friend that supply a variety of functionality
        to an online gaming community, these consist of:
      </Typography>

      <Box display="flex" flexDirection="column" maxWidth="350px" alignItems="flex-start" gap={1}>
        <ListChip icon={<WebIcon/>} label="React Frontend"/>
        <ListChip icon={<ApiIcon/>} label="Express Node.js REST API"/>
        <ListChip icon={<DataUsageIcon/>} label="MongoDB Database"/>
        <ListChip icon={<SmartToyIcon/>} label="Custom Discord Bot (Discord.js)"/>
        <ListChip icon={<CloudIcon/>} label="Running via pm2 process manager"/>
      </Box>

      <Typography>
        The reason I list this suite of tools is not because I wrote them, but because
        I have both added to them, understood them, and maintained them; my ability to
        develop is not limited to just code I wrote.
      </Typography>

      <Typography>
        The frontend makes use of Discord's <Span>OAuth</Span> for authenticating users against the database
        so they can perform actions that are persisted to the Discord Servers they are apart of; these are
        used for collaborative planning and organisation between hundreds of users.
      </Typography>

      <Typography>
        Visually, the frontend makes perticular use of <Span>Konva/Canvas</Span> and <Span>Leaflet</Span>
        for an interactive map which can be annotated
      </Typography>

      <Typography>
        The code is not mine to share, but I will gladly discuss the tools if asked.
      </Typography>

      <Divider sx={{ opacity: 1 }} color={main} />

      <Typography variant="h6">
        What I learned
      </Typography>

      <ListText
        list={[
          'How to work with Leaflet to create or extend functionality, for instance of note I added'
          + ' the ability to click on an icon and create a cone based on a second click, cornered on'
          + ' the icon\'s position; this reflects a "cone of vision" feature available in the Video Game',

          'To understand the app, I had to learn how old Redux worked (the code has existed for sometime)'
          + ' including "Redux Sagas".',

          'I learn\'t some about managing running process with pm2',
        ]}
      />

    </Stack>
  )
}