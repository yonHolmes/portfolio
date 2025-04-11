"use client"

import { referenceConsts } from "@/consts/referenceConsts";
import {
  Box,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import ArrowCircleLeft from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRight from '@mui/icons-material/ArrowCircleRight';
import { ReferenceItem } from "./components/Reference";
import { Carousel, useCarousel } from 'nuka-carousel';
import { useState } from "react";
import { useBreakpoints } from "@/hooks/useBreakpoints";

const StyledCarousel = styled(Carousel)`
  // max-height: calc(100vh - 250px);
`;

function CustomArrows() {
  const { goBack, goForward } = useCarousel();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      paddingRight={2}
    >
      <IconButton
        color="primary"
        onClick={goBack}
      >
        <ArrowCircleLeft/>
      </IconButton>

      <IconButton
        color="primary"
        onClick={goForward}
      >
        <ArrowCircleRight/>
      </IconButton>
    </Box>
  );
}

export function References() {
  const [isTouched, setIsTouched] = useState(false);

  const {
    points: {
      tablet: {
        up: tabletUp,
      }
    }
  } = useBreakpoints();

  return (
    <div>
      <section>
        <Stack gap={1}>
          <Typography variant="h5">
            References ({referenceConsts.length})
          </Typography>

          {/* <Typography>
            At my request to individuals I have collected some references/testimonies
            to share here, where a LinkedIn profile or name is included, it is included
            with their permission.
          </Typography> */}

          <Box
            // maxHeight="calc(100vh - 250px)"
            width="100vw"
            onTouchStart={() => {
              setIsTouched(true);
            }}
          >
            <StyledCarousel
              title="References"
              showArrows={
                  // Hide arrows when using mobile (state gets broken)
                  !isTouched &&
                  (
                    // Hide arrows if showing 2 and there's only 2
                    // Otherwise I know there's 2 so show them
                    (
                      tabletUp && referenceConsts.length > 2
                    ) || !tabletUp
                  )
              }
              wrapMode="wrap"
              scrollDistance="slide"
              swiping={
                // On Mobile you can still swipe, hence the onTouchStart above
                false
              }
              arrows={<CustomArrows/>}
            >
              {referenceConsts.map((reference, idx) => {
                return (
                  <Box
                    key={idx}
                    width={tabletUp ? '50vw' : '100vw'}
                    // maxWidth="100vw"
                    padding={3}
                    paddingLeft={1}
                    flexShrink={0}
                  >
                    <ReferenceItem
                      reference={reference}
                    />
                  </Box>
                )
              })}
            </StyledCarousel>
          </Box>

        </Stack>
      </section>
    </div>
  )
}