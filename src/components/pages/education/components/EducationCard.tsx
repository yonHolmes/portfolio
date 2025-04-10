"use client"

import {
  Box,
  Link,
  Card,
  CardActions,
  CardHeader,
  useTheme,
  Typography,
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '500px',
        height: '100%',
        color: textSecondary,
      }}
    >
      <CardHeader
        title={data.education}
        subheader={data.subText}

        action={
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gap={1}
            marginTop={1}
            marginLeft={2}
          >
            <SpanHighlight>
              {educationTypeToInfo[data.type].name}
            </SpanHighlight>
            <Typography>
              {data.dateStr}
            </Typography>
          </Box>
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
          <Link href={data.verificationURL} target="_blank">
            Verify Completion
          </Link>}
          
          {data.educationURL &&
          <Link href={data.educationURL} target="_blank">
            Page
          </Link>}
        </Box>
      </CardActions>
    </Card>
  )
}