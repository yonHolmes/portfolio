"use client"

import { navRoutes } from "@/consts/navigationConsts";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';

import { useRouter } from "next/navigation";
import { projectsHome, projectsWorkArr } from "@/consts/projectConsts";
import { ProjectCard } from "./ProjectCard";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useGlobalState } from "@/context/GlobalStateContext";

export function Projects() {
  console.log('Projects');

  const {
    isMobile,
  } = useBreakpoints();

  const {
    getAccordion,
  } = useGlobalState();
  const [
    { getState: getStateWorkProjects, toggleAccordion: toggleWorkProjects, },
    { getState: getStateHomeProjects, toggleAccordion: toggleHomeProjects, },
  ] = getAccordion([
    'projectsWorkProjects',
    'projectsHomeProjects',
  ]);

  
  return (
    <Stack gap={1}>
      <Typography variant="h6">
        Projects
      </Typography>

      <Accordion expanded={!!getStateWorkProjects()} onChange={toggleWorkProjects}>
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <BusinessIcon/> Work Projects
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Due to their confidential nature, I have no material that I can show or
            share here, but I can cover them generically via a mostly high level explanation.
          </Typography>

          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            marginTop={1}
            gap={1}
          >
            {projectsWorkArr.map(({ label, href, description, tags }) => {
              return (
                <ProjectCard
                  key={href}
                  label={label}
                  href={href}
                  description={description}
                  tags={tags}
                  showNavButton={isMobile}
                />
              )
            })}
          </Box>

        </AccordionDetails>
      </Accordion>

      <Accordion expanded={!!getStateHomeProjects()} onChange={toggleHomeProjects}>
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <HomeIcon/> Home Projects
          </Box>
        </AccordionSummary>
        <AccordionDetails>

          <Typography>
            These projects are of my own creation, as such I can go into greater depth than I can work projects.
          </Typography>
          <Typography>
            As a gamer, I would only occasionally invest time into my side projects, I have been giving this a shuffle
            and investing much more time into new things I want to learn, or create; <span style={{ textDecoration: 'underline' }}>not all of them are listed here</span>.
          </Typography>

          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            marginTop={1}
            gap={1}
          >
            {projectsHome.map(({ label, href, description, tags }) => {
              return (
                <ProjectCard
                  key={href}
                  label={label}
                  href={href}
                  description={description}
                  tags={tags}
                />
              )
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
      
    </Stack>
  )
}