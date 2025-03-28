"use client"

import { ListChip } from "@/components/generic/listChipElm/ListChipElm";
import { ListText } from "@/components/generic/listText/ListText";
import { SpanHighlight as Span } from "@/components/generic/spanHighlight/SpanHighlight";
import { projectsHomeRecord, projectsWorkRecord } from "@/consts/projectConsts";
import { ChangeCircle, Checklist, Speed } from "@mui/icons-material";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";


export function DiscordBot() {
  console.log('DiscordBot');

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
        {projectsHomeRecord.projectDiscordBot.label}
      </Typography>

      <Divider sx={{ opacity: 1 }} color={main} />

      <Typography variant="h6">
        What I learned
      </Typography>

      <ListText
        list={[
        ]}
      />

    </Stack>
  )
}