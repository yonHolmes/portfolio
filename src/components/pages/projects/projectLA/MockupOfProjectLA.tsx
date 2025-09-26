
import { Box, Icon as MuiIcon, Stack, styled, Typography, useTheme } from "@mui/material";

type Item = {
  name: string,
  total: number,
  available: number,
  locked: number,
}

const items: Item[] = [
  {
    name: 'Alpha',
    total: 100,
    available: 20,
  },
  {
    name: 'Beta',
    total: 536,
    available: 251.
  }
].map(item => ({
  ...item,
  locked: item.total - item.available,
}));

export function MockupOfProjectLA() {

  const {
    palette: {
      primary: {
        main,
        contrastText,
      }
    }
  } = useTheme();

  return (
    <Box>
      <Box>
        {items.map(({ name, total, available, locked }) => {
          const lockedWidth = Math.floor((locked / total) * 100);
          return (
              <Box
                key={name}
                display="flex"
                flexDirection="row"
                border="1px solid"
                borderColor="white"
                padding={({ spacing }) => spacing(2)}
              >
                <Typography width="25%">
                  {name}
                </Typography>

                <Typography width="25%">
                  {available}/{total}
                </Typography>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  width="50%"
                  sx={{
                    outline: `1px solid ${main}`
                  }}>
                  <Box
                    width={`${lockedWidth}%`}
                    color={contrastText}
                    paddingLeft={1}
                    sx={{ backgroundColor: main }}
                  >
                    {locked}
                  </Box>
                  <Typography marginLeft="auto" marginRight={1}>
                    {available}
                  </Typography>
                </Box>
              </Box>
          )
        })

        }
      </Box>

      <Typography variant="caption">
        Vague Mock-up
      </Typography>
    </Box>
  )
}