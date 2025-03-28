"use client"

import { SpanHighlight as Span, SpanHighlight } from "@/components/generic/spanHighlight/SpanHighlight";
import { Divider, Stack, Typography, useTheme } from "@mui/material";
import { MockupOfProjectF } from "./MockupOfProjectF";
import { ListText } from "@/components/generic/listText/ListText";
import { projectsWorkRecord } from "@/consts/projectConsts";
// import { ListChip } from "@/components/generic/listChip/ListChip";


export function ProjectF() {
  console.log('ProjectF');
  
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
        {projectsWorkRecord.projectF.label}
      </Typography>

      <Typography>
        This project was essentially a sizeable and complex Questionaire that the client
        would use to get a breakdown of their customer's information in order to aid them with
        those goals.
      </Typography>

      <Typography>
        My role was to design the data-structure that described the core question journey of the
        application; the design from the client was broken down into around 6 "lanes" of topics, through
        which a customer would answer questions in sequence, with each being furthur broken down into sub-topics.
      </Typography>

      <Typography>
        In addition, as I defined the structure, it was also my task to create "the brain" of the tool, which would work out what questions
        to ask you, how to store the answers, and pass them to the API for submission.
      </Typography>

      <Typography>
        However, some starting questions in a sub-topic would be dependent on the answer to a question in an entierly different
        topic all together; the tool had to handle moving you away to the dependent question, and then return you to either answer
        the question you were originally going to, or if your answer to the dependent made it an invalid question; skip it and move on.
      </Typography>

      <Typography>
        This project was my first exposure to <Span>React Context</Span> following projects that used Reflux and Redux to manage their persistent state,
        clearly I had developed a habit of using a new project to learn something new, and this was no exception.
      </Typography>

      <Typography>
        The app was also praised for its <Span>accessability</Span>; every element of text or control was able
        to be navigated to with the keyboard; which mean't that it also supported screen-readers out the box.
        We made heavy use of custom <Span>aria</Span> labels to make sure that information was well communicated
        by the React components such as State, desired action, etc.
      </Typography>

      <MockupOfProjectF/>

      <Divider sx={{ opacity: 1 }} color={main} />
      
      <Typography variant="h6">
        What I learned
      </Typography>

      <ListText
        list={[
          'The latest (and still) approach to state; React context and Hooks.',

          'During the project I pushed myself harder than I had before to get the "brain" to work'
          + ' flawlessly, it taught me how much I could surpass my limits.',

          'When I designed the data-structure for the questions, it was highly numerical and versionable, however'
          + ' this led to some qwerks or awkwardnesses; if I had gone with a simpler unique key/name system it would have'
          + ' been just as effective, and far more readable.'
        ]}
      />
    </Stack>
  )
}