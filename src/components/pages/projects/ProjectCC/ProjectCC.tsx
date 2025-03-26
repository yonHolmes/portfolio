import { SpanHighlight as Span } from "@/components/generic/spanHighlight.tsx/SpanHighlight";
import { Stack, Typography } from "@mui/material";

export function ProjectCC() {
  console.log('ProjectCC');
  return (
    <div>
      <main>
        <Stack
          gap={1}
        >
          <Typography variant="h6">
            Project CC
          </Typography>
          <Typography>
            This project sometime between 2017 and 2019 was my
            introduction into <Span>React</Span>.
          </Typography>
          <Typography>
            The task we had was to take an Application written in
            pre version 1 <Span>React</Span>, and write it in the latest (which
            would put it at around version 16) due to the age of the
            application's Frontend none of the code was retainable, a complete
            rewrite was the goal with:
          </Typography>
          <ul>
            <li>enhanced performance</li>
            <li>no loss of functionality</li>
            <li>possability of changes/fixes/additions</li>
          </ul>
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
            company.
          </Typography>
        </Stack>
      </main>
    </div>
  )
}