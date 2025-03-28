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

export function ProjectDevelopmentAssistantApp() {
  console.log('ProjectDevelopmentAssistantApp');

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
        {projectsWorkRecord.projectDevelopmentAssistantApp.label}
      </Typography>

      <Typography>
        At somepoint, we made our own Platform, everything including how to handle database changes
        was designed by us; the approach settled on was a package that had us describe the changes
        to the <Span>T-SQL</Span> database in <Span>JSON</Span>...of course, humans are not good
        at making JSON from scratch.
      </Typography>

      <Typography>
        Fast forward a while and more than occasionally, 20 minute builds were failing because
        the JSON for a database change wasn't quite perfect, even something as simple as an extra
        comma that you and I know is fine, the change process rejected...how to gain back this lost time?
      </Typography>

      <Typography>
        I had an idea, what if we had a tool that provided a UI for defining the change, a new Table, a new Column,
        a new Index to keep the database fast, nothing existed we could just buy, we'd have to build it.
      </Typography>

      <Typography>
        So, at home I took to finding how I could make a simple frontend, I settled on a JAVA (stay with me here) supplied SDK from Amazon
        and put together a proof-of-concept that created a file for making a table with a set of columns of varying datatypes.
      </Typography>

      <Typography>
        When it was ready, we setup a meeting at work, and I presented the problem, and the solution to the team, and my Boss.
        They loved it, thankfully we had some quieter weeks to months and I was greenlit to implement it in full force.
      </Typography>

      <Typography>
        As a team, we discussed that...none of us really know JAVA and its not a tool we need, but <Span>React</Span> and the
        JavaScript family is, so was there something we could use? Yes there was, one of us was aware of/found <Span>Electron</Span>.
      </Typography>

      <Typography>
        Using <Span>Electron</Span> was perfect, the power of writing and reading files off the file system, and the familuarlity of React
        that all of us had worked on at some stage, anyone could add to this tool, not just database changes, but other features.
      </Typography>

      <Typography>
        By time I left the company this Tool was for, it had been used for hundreds of changes, likly saved us dozens of man hours in
        failed build times, and more after additional features were added that saved us more time in other areas.
      </Typography>

      <Divider sx={{ opacity: 1 }} color={main} />

      <Typography variant="h6">
        What I learned
      </Typography>

      <ListText
        list={[
          'How to create an installable app with Electron, I have since done this again many times with Electron Forge',

          'Another experience of negotiating an idea with my team to get their approval',

          'Dealing with Filesystem Read and Writing operations',
        ]}
      />

    </Stack>
  )
}