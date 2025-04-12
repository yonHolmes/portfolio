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
          justifyContent="space-between"
          width="100%"
          paddingLeft={1}        >
          {data.skills &&
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={2}
          >
            {data.skills.map(skill =>
              <Typography
                variant="caption"
                fontStyle="italic"
              >
                {skill}
              </Typography>
            )}
          </Box>}

          
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={2}
            marginLeft="auto"
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
        </Box>
      </CardActions>
    </Card>
  )
}