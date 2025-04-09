"use client"

import {
  Box,
  Link,
  Card,
  CardActions,
  CardHeader,
  useTheme,
} from "@mui/material";
import { EducationInfo, educationTypeToInfo } from "@/consts/educationConsts"
import { SpanHighlight } from "@/components/generic/spanHighlight/SpanHighlight";

type PropsEducationCard = {
  data: EducationInfo,
};

export function EducationCard({ data }: PropsEducationCard) {

  const {
    palette: {
      text: {
        secondary: textSecondary,
      }
    }
  } = useTheme();

  return (
    <Card
      raised
      variant="outlined"
      sx={{
        maxWidth: '500px',
        color: textSecondary,
      }}
    >
      <Box>
        <CardHeader
          title={data.education}
          subheader={data.dateStr}

          action={
            <SpanHighlight>{educationTypeToInfo[data.type].name}</SpanHighlight>
          }
        />

        <CardActions>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            gap={2}
            width="100%"
          >
            {data.verificationURL &&
            <Link href={data.verificationURL} target="_blank">Verify Completion</Link>}
            
            {data.educationURL &&
            <Link href={data.educationURL} target="_blank">Location</Link>}
          </Box>
        </CardActions>
      </Box>
    </Card>
  )
}