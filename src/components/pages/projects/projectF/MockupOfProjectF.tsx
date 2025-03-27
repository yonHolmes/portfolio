"use client"

import { Box, Icon as MuiIcon, Stack, styled, Typography } from "@mui/material";
import CallSplitIcon from '@mui/icons-material/CallSplit';

const Icon = styled(({ deg, ...rest }: React.ComponentProps<typeof MuiIcon> & { deg: number }) => (
  <MuiIcon {...rest}/>
))`
  & > svg {
      transform: rotate(${({ deg }) => deg}deg);
  }
`;

const BoxFlowCol = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 50px;
  padding: ${({ theme: { spacing } }) => spacing(1)};
`;

const BoxFlowRow = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 50px;
  padding: ${({ theme: { spacing } }) => spacing(1)};
`;

export function MockupOfProjectF() {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        border="1px solid"
        borderColor="white"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          maxWidth="60px"
          padding={1}
        >
          <Typography variant="h5">
            A
          </Typography>
          <Typography variant="h5" color="primary">
            B
          </Typography>
          <Typography variant="h5">
            C
          </Typography>
          <Typography variant="h5">
            D
          </Typography>
          <Typography variant="h5">
            E
          </Typography>
          <Typography variant="h5">
            F
          </Typography>
        </Box>
        
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          maxWidth="50px"
          padding={1}
        >
          <Typography variant="h5">
            B1
          </Typography>
          <Typography variant="h5" color="primary">
            B2
          </Typography>
          <Typography variant="h5">
            B3
          </Typography>
          <Typography variant="h5">
            B4
          </Typography>
        </Box>

        <BoxFlowRow>
          <Typography>
            Q1
          </Typography>
          <Icon deg={90}>
            <CallSplitIcon/>
          </Icon>

          <BoxFlowCol>

            <BoxFlowRow>
              <Typography color="primary">
                Q1.1
              </Typography>
              <Icon deg={90}>
                <CallSplitIcon/>
              </Icon>
            </BoxFlowRow>

            <BoxFlowRow>
              <Typography>
                Q1.2
              </Typography>
              <Icon deg={90}>
                <CallSplitIcon/>
              </Icon>
            </BoxFlowRow>

          </BoxFlowCol>
        </BoxFlowRow>
      </Box>

      <Typography variant="caption">
        Vague Mock-up
      </Typography>
    </Box>
  )
}