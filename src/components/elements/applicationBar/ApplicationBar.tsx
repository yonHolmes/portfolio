'use client';

import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import { usePathname } from "next/navigation";

type PropsApplicationBar = {
  openSidebar?: () => void,
  toolbar?: React.ReactNode,
}
export function ApplicationBar({ openSidebar, toolbar }: PropsApplicationBar) {
  const {
    spacing,
  } = useTheme();

  return (
    <>
      <AppBar id="AppBar" component="nav">
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: spacing(1),
            gap: 3,
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <IconButton onClick={openSidebar}>
              <Menu color="secondary"/>
            </IconButton>
            <Link href="/">
              <Typography variant="h6" color="primary">
                Yon Holmes
              </Typography>
            </Link>
          </Box>

          {toolbar ?? null}

        </Toolbar>
      </AppBar>
    </>
  )
}