import { SpanHighlight as Span, SpanHighlight } from "@/components/generic/spanHighlight/SpanHighlight";
import { Stack, Typography } from "@mui/material";
import { MockupOfProjectF } from "./MockupOfProjectF";
// import { ListChip } from "@/components/generic/listChip/ListChip";


export function ProjectF() {
  console.log('ProjectF');

  return (
    <Stack
      gap={2}
    >
      <Typography variant="h6">
        Project F
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

      <MockupOfProjectF/>
    </Stack>
  )
}