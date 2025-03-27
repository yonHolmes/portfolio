"use client"
import { SoftSkill, softSkills } from "@/consts/softSkillsConsts";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useIsClient } from "usehooks-ts";
import { GetAccordionReturnObj, useGlobalState } from "@/context/GlobalStateContext";

function getColumns(desiredColumns = 1) {
  // Create an Array, of empty Arrays with <desiredColumns> elements
  const columns: Array<SoftSkill[]> = Array.from({ length: desiredColumns }).map(() => []);
  
  let col = 0;
  for (let i=0; i < softSkills.length; i++) {

    columns[col].push(softSkills[i]);

    col++;
    if (col >= desiredColumns) {
      col = 0;
    }
  }

  return columns;
}

export function SoftSkills() {
  console.log('SoftSkills');

  const isClient = useIsClient();

  const {
    getAccordion,
  } = useGlobalState();
  const accordionDataAndControls = getAccordion(softSkills.map(({ heading }) => heading));
  const accordionHeadingToData = accordionDataAndControls.reduce((ac, cur) => {
    ac[cur.getStateKey()] = cur;
    return ac;
  }, {} as Record<string, GetAccordionReturnObj>);
  
  const router = useRouter();
  function handleNav(path: string) {
    router.push(path);
  }

  const {
    points: {
      large: {
        up: largeUp,
      },
      monitor: {
        up: monitorUp,
        down: monitorDown,
      },
    }
  } = useBreakpoints();

  const skillColumns = useMemo(() => {
    const desiredColumns = (
      largeUp
        ? 4
        : monitorUp
          ? 3
          : 1
    )
    return getColumns(desiredColumns)
  }, [largeUp, monitorUp, monitorDown]);

  return (
    <div>
      <section>
        <Stack gap={1}>
          <Typography variant="h6">
            Soft Skills
          </Typography>

          <Box
            display="flex"
            flexDirection={!isClient ? 'column' : 'row'}
            gap={1}
          >
            {!isClient &&
            <>
              <Skeleton width="100%" height="60px"/>
              <Skeleton width="100%" height="60px"/>
              <Skeleton width="100%" height="60px"/>
            </>
            }

            {isClient &&
            skillColumns.map((skllls, idx) => {
              
              return (
                <Box
                  key={idx}
                  width={`${Math.floor(100 / skillColumns.length)}%`}
                >
                  {skllls.map(skill => {
                    const accordionDC = accordionHeadingToData[skill.heading];
                    return renderSkills(skill, handleNav, accordionDC);
                  })}
                </Box>
              )
            })}
          </Box>

        </Stack>
      </section>
    </div>
  )
}


function renderSkills(
  { icon, heading, content, links }: SoftSkill,
  handleNav: (path: string) => void,
  accordionDataAndControls: GetAccordionReturnObj,
) {
  return (
    <Accordion key={heading} expanded={!!accordionDataAndControls.getState()} onChange={accordionDataAndControls.toggleAccordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
          {icon} {heading}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {content.map((paragraph, pIdx) => {
            return (
              <Typography key={pIdx}>
                {paragraph}
              </Typography>
            )
          })}
        </Box>

        {links &&
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap={1}
        >
          {links.map(({ label, href }) => {
            return (
              <Button key={label} onClick={() => handleNav(href)}>
                {label}
              </Button>
            )
          })}
        </Box>}
      </AccordionDetails>
    </Accordion>
  )
}