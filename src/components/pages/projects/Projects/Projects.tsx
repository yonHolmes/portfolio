"use client"
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export function Projects() {
  console.log('Projects');
  
  const router = useRouter();
  return (
    <div>
      <main>
        <Stack
          gap={1}
        >
          <Typography variant="h6">
            Projects
          </Typography>

          <Accordion>
            <AccordionSummary>
              Work Projects
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Due to their nature, I have no material that I can show or
                share here, but I can cover them generically via a
                mostly high level explanation.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>
              Personal Projects
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ...
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </main>
    </div>  
  )
}