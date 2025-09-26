"use client"

import {
  Box,
  Link,
  Card,
  CardActions,
  CardHeader,
  useTheme,
  Typography,
  CardContent,
} from "@mui/material";
import { EducationInfo, educationTypeToInfo } from "@/consts/educationConsts"
import { SpanHighlight } from "@/components/generic/spanHighlight/SpanHighlight";
import Image from "next/image";

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
        title={<Typography variant="h6">{data.education}</Typography>}
        subheader={<Typography variant="subtitle2">{data.subText}</Typography>}

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

      {data.image &&
      <CardContent style={{ height: '100px' }}>
        <Box display="flex" justifyContent="flex-end" height="100%">
          <>
            {typeof data.image.src === 'string' ?
            <Link href={data.image.src} target="_blank">
              <Image
                alt={data.education}
                src={data.image.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '100%' }} // optional
              />
            </Link> : 
            <Image
              alt={data.education}
              src={data.image.src}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: '100%' }} // optional
            />}
          </>
        </Box>
      </CardContent>}

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
                key={skill}
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