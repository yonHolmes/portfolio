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
import { IMAGE_BASE_PATH } from "@/consts/appConsts";

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

      {(data.images?.length ?? 0) > 0 &&
      <CardContent style={{ height: '100px' }}>
        {data.images?.map(image => {
          return (
            <Box key={image.alt} display="flex" justifyContent="flex-end" height="100%">
              <>
                {typeof image.src === 'string' ?
                <Link href={image.src} target="_blank">
                  <Image
                    alt={image.alt ?? data.education}
                    src={image.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: '100%' }} // optional
                  />
                </Link> : 
                <Image
                  alt={image.alt ?? data.education}
                  src={image.src}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 'auto', height: '100%' }} // optional
                />}
              </>
            </Box>
          )
        })}
      </CardContent>}

      <CardActions>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          paddingLeft={1}
        >
          {data.skills != null &&
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={2}
            marginRight={2}
          >
            {data.logo != null &&
            <Image
              alt={data.logo.alt}
              src={data.logo.src}
              title={data.logo.text}
              width={24 * 1.5}
              height={24 * 1.5}
            />}
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              flexWrap="wrap"
              rowGap={0.5}
              columnGap={1}
              marginRight={2}
            >
              {data.skills.map((skill, idx) =>
                <Typography
                  key={skill}
                  variant="caption"
                  fontStyle="italic"
                >
                  {skill}{(data.skills?.length ?? 0) > idx + 1 ? ', ' : ''}
                </Typography>
              )}
            </Box>
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