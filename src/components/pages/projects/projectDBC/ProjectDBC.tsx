"use client"

import { ListChip } from "@/components/generic/listChipElm/ListChipElm";
import { ListText } from "@/components/generic/listText/ListText";
import { SpanHighlight as Span } from "@/components/generic/spanHighlight/SpanHighlight";
import { projectsWorkRecord } from "@/consts/projectConsts";
import { ChangeCircle, Checklist, Speed } from "@mui/icons-material";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";


export function ProjectDBC() {
  console.log('ProjectDBC');

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
        {projectsWorkRecord.projectDBC.label}
      </Typography>

      <Typography>
        Back in University in 2014 I wrote a game in Unity using <Span>C#</Span>, now over a decade later I finally
        got around to writing some more C#, this time to write a job that could copy
        data from one database to another.
      </Typography>

      <Typography>
        I made use of <Span>SOLID</Span> principles, <Span>inheritence</Span>, and <Span>interfaces</Span> in order to make the
        code modular in that changing what tables were copied over was made easy to extend
        if new criteria came in. 
      </Typography>

      <Typography>
        At time of writing, tables are copied either in their entirety, or based on a Date Time field
      </Typography>

      <Divider sx={{ opacity: 1 }} color={main} />

      <Typography variant="h6">
        What I learned
      </Typography>

      <ListText
        list={[
          'Some understanding of SOLID principles, I am looking to furthur my usage of them.',

          'Creating Abstract classes that others can implement in order to fit a needed process.',

          'How much I appreciate the type enforcement of C#, just like I do TypeScript.',
        ]}
      />

    </Stack>
  )
}