import { ListChip } from "@/components/generic/listChip/ListChip";
import { SpanHighlight as Span } from "@/components/generic/spanHighlight/SpanHighlight";
import { projectsWorkArr, projectsWorkRecord } from "@/consts/projectConsts";
import { ChangeCircle, Checklist, Speed } from "@mui/icons-material";
import { Box, Chip, Stack, Typography } from "@mui/material";

export function ProjectCC() {
  console.log('ProjectCC');
  return (
    <Stack
      gap={2}
    >
      <Typography variant="h6">
        {projectsWorkRecord.projectCC.label}
      </Typography>

      <Typography>
        This project sometime between 2017 and 2019 was my
        introduction into <Span>React</Span>.
      </Typography>
      <Typography>
        The task we had was to take a large CRM Application written in
        pre version 1 <Span>React</Span>, and write it in the latest (which
        would put it at around version 16) due to the age of the
        application's Frontend none of the code was retainable, a complete
        rewrite was required with the following goals:
      </Typography>
      <Box display="flex" flexDirection="column" maxWidth="350px" alignItems="flex-start" gap={1}>
        <ListChip icon={<Speed/>} label="Enhanced Performance"/>
        <ListChip icon={<Checklist/>} label="No loss of Functionality"/>
        <ListChip icon={<ChangeCircle/>} label="Opportunity for Changes/Fixes/Additions"/>
      </Box>
      <Typography>
        In addition, was provided the opportunity to
        move our middleware from a SaaS provided XML format
        to <Span>NodeJS</Span>, a large task of making sure no functionality was
        lost during this conversion
      </Typography>
      <Typography>
        For myself, I learn't <Span>React</Span> by analysing and understanding the
        code written by my colleagues, leading to a "light bulb"
        moment in which it clicked. The result of which was I was
        assigned one of (if not) the most important pages of the application
        to re-create (and improve upon) to which I did a good job of for
        someone new to React.
      </Typography>
      <Typography>
        Beneath this Application's Frontend and the Middleware sat a mammoth <Span>T-SQL</Span> database
        which I had come to learn inside and out (and still remember today) since joining the
        company; this was invaluable so that I could work with the team on how the existing behavior not only worked
        on the frontend, but what it did to the backend so if needed we could bring in improvements or new features.
      </Typography>
    </Stack>
  )
}