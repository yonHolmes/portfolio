"use client"

import { useEffect, useState } from "react";
import {
 Box,
 Typography,
 Button,
} from "@mui/material";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { ImageClient } from "@/components/generic/image/ImageClient";
import { Proficiency } from "@/components/generic/proficiency/Proficiency";
import { proficiencies, ProficiencyInfo } from "@/consts/proficiencyConsts";

const medallionMinWidth = "150px";

const profArray = [
  proficiencies.react,
  proficiencies.nodeJS,
  proficiencies.typeScript,
  proficiencies.mssqlServer,
  proficiencies.mySQL,
  proficiencies.mongoDB,
  proficiencies.cSharp,
  proficiencies.aws,
  proficiencies.electron,
  proficiencies.nextJS,
  proficiencies.monorepo,
  proficiencies.versionControl,
  proficiencies.express,
  proficiencies.jira,
  proficiencies.fabric,
  proficiencies.java,
  proficiencies.googleMaps,
  proficiencies.videoEditing,
];

export function Home() {
  console.log('Home');

  const { isMobile } = useBreakpoints();
  return (
    <>
      <Typography>
        Hello and welcome, this is my Portfolio website covering some of the things I've done, my interests,
        technology I've used, skills gained, and perhaps some lessons learned.
      </Typography>

      <Typography marginTop={2}>
        You can {/*click the tiles below, or*/} browse my portfolio from the Menu via the App Bar
      </Typography>

      <Box
        display="flex"
        flexDirection={isMobile ? 'row' : 'row'}
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignItems={isMobile ? 'flex-end' : 'flex-end'}
        gap={isMobile ? 3 : 4}
        marginTop={2}
      >
        {profArray.map(prof => {
          return (
            <ProficiencyFromConst
              key={prof.skill}
              data={prof}
            />
          )
        })}
      </Box>
    </>
  )
}

function ProficiencyFromConst(props: {
  data: ProficiencyInfo,
  onClick?: () => void,
}) {
  const { data } = props;

  return (
    <Proficiency
      skill={data.skill}
      level={data.level}
      width={medallionMinWidth}
      contrastingBackground={data.contrastingBackground}
      tooltip={data.tooltip}
      onClick={props.onClick}
    >
      {data.image
        ?
        <ImageClient
          width={data.width ?? 120}
          height={data.height ?? 100}
          heightSkeleton={110}
          src={data.image.src}
          alt={data.image.alt}
        />
        :
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height={data.height ?? 100}
        >
          <Typography
            textAlign="center"
          >
            {data.skill}
          </Typography>
        </Box>
      }
    </Proficiency>
  )
}