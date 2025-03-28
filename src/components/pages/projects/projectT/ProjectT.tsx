"use client"

import { ListChip } from "@/components/generic/listChipElm/ListChipElm";
import { SpanHighlight as Span } from "@/components/generic/spanHighlight/SpanHighlight";
import { projectsWorkRecord } from "@/consts/projectConsts";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import HistoryIcon from '@mui/icons-material/History';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { ListText } from "@/components/generic/listText/ListText";


export function ProjectT() {
  console.log('ProjectT');

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
        {projectsWorkRecord.projectT.label}
      </Typography>

      <Typography>
        Before I learn't React, but after I had gained significant experience with <Span>T-SQL</Span> from
        a service-desk kind of role in resolving tickets, this project gave me a chance to be
        creative with those <Span>T-SQL</Span> skills.
      </Typography>

      <Typography>
        The project was also the first of its kind for sometime at the Company (and the first since I joined)
        which was to create a brand new application from the ground up, my task? <span style={{ textDecoration: 'underline' }}>The Database</span>.
      </Typography>

      <Typography>
        The rest of the Team handled the frontend (React) and the middleware (SaaS provided XML format)
        it was my job to create the data, spec it out to them what it would return, how they'll perform
        actions against it, etc.
      </Typography>

      <Typography>
        One of my favoriate moments was when the frontend guys were trying to solve a design approach
        for joining together two data sets visually on the frontend.<br/>
        So I asked about the problem and came up with a solution by returning an extra column in the datasets.
      </Typography>
      
      <Typography>
        I always enjoyed "meeting of the minds" moments, when the sum of your Team produces a greater solution.
      </Typography>

      <Typography variant="h6">
        The Database
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
        
      <ListChip icon={<PersonOutlineOutlinedIcon/>} label="Not all Staff need a Login"/>
        <Typography  marginLeft={2} marginBottom={1}>
          To achieve this, all non-login associated actions were associated to a "Staff" record
          which represented the person on the system; if that individual needed to be able to
          login then a "User" record was made and linked to that "Staff" record.
          Communicating this distinction of not only functionality, but terminology with the Client
          was highly beneficial to future conversations.
        </Typography>

        <ListChip icon={<AccountTreeIcon/>} label="Flexible Staff Hierarchy"/>
        <Typography marginLeft={2} marginBottom={1}>
          This was achieved by each staff having a reference to their parent, creating the Hierarchy.
        </Typography>

        <ListChip icon={<DynamicFormIcon/>} label="Variety of Versionable Forms"/>
        <Typography  marginLeft={2} marginBottom={1}>
          All types of forms saved to a Question/Answer format of an identifier for the Question along with the answer.
        </Typography>

        <ListChip icon={<HistoryIcon/>} label="Historic reporting of Form Submissions"/>
        <Typography  marginLeft={2} marginBottom={1}>
          The answers referenced the version of the Question at the time of submission,
          when questions were changed, we actually had a whole new version put into the database
          so users could look back at past submissions, and their answers.
        </Typography>
      </Box>

      <Divider sx={{ opacity: 1 }} color={main} />

      <Typography variant="h6">
        What I learned
      </Typography>

      <ListText
        list={[
          'I planned the database from the get-go, creating a relationship diagram before'
          + ' I even started writing any SQL code; this allowed me to discuss the requirements'
          + ' with the Team not only as they were set out, but for their agreement; I did not'
          + ' want to implement anything so esoteric that it made their task much harder.',

          'The parent-user relationship approach while successful, did some with some qwerks.'
          + ' If I were to do it over, I might take a slightly different approach such as caching'
          + ' the Hierarchy into the database in a way that was easier to build than the looping code I wrote.',

          'Catching any error be it on the Frontend or Backend and saving it to the database made it very easy'
          + ' to monitor and fix or start investigating bugs. On one occasion I was already planning a fix'
          + ' minutes before the client phoned to ask me directly about the issue.'
        ]}
      />

    </Stack>
  );
}