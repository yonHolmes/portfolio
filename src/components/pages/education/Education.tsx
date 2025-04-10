"use client"

import { education } from "@/consts/educationConsts";
import { getObjectValues } from "@/helpers/typescriptHelper";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { EducationCard } from "./components/EducationCard";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useMemo } from "react";

const educationArr = getObjectValues(education)
  .sort(({ date: dateA }, { date: dateB }) => dateA > dateB ? -1 : 1)

export function Education() {

  console.log('educationArr', educationArr);
  
  const {
    isMobile,
    points: {
      large: {
        up: largeUp,
      },
      monitor: {
        up: monitorUp,
        // down: monitorDown,
      },
    }
  } = useBreakpoints();

  const desiredColumns = (
    largeUp
      ? 4
      : monitorUp
        ? 3
        : isMobile
          ? 1
          : 2
  );

  console.log(`width: ${100 / desiredColumns}%`)
  return (
    <div>
      <section>
        <Stack gap={1}>
          <Typography variant="h5">
            Education
          </Typography>

          <Typography>
            Here, you'll find various ways I have tried to advance my
            knowledge with some form of education such as Certifications and Courses.
          </Typography>

          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap={2}
          >
            
            {educationArr.map(edu =>
              <Box
                key={edu.education}
                width={`${
                  // 100 / 3 = 33.333 -> 33 / 10 = 3.333 -> 3 * 10 = 30 :)
                  (Math.floor(Math.floor(100 / desiredColumns) / 10) * 10)
                  // some extra flexability
                  - 3
                }%`}
                height="160px"
              >
                <EducationCard  data={edu}/>
              </Box>
            )}
          </Box>

        </Stack>
      </section>
    </div>
  )
}