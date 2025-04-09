"use client"

import { education } from "@/consts/educationConsts";
import { getObjectValues } from "@/helpers/typescriptHelper";
import {
  Stack,
  Typography,
} from "@mui/material";
import { EducationCard } from "./components/EducationCard";

const educationArr = getObjectValues(education)
  .sort(({ date: dateA }, { date: dateB }) => dateA > dateB ? -1 : 1)

export function Education() {

  console.log('educationArr', educationArr);

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

          {educationArr.map(edu =>
          <EducationCard key={edu.education} data={edu}/>)}


        </Stack>
      </section>
    </div>
  )
}