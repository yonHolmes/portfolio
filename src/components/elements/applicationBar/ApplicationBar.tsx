'use client';

import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import { Contact } from "../contact/Contact";

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
            flexShrink: 0,
            gap: 3,
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            flexShrink="0"
            gap={1}
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

          <Contact box={{
            marginLeft: 'auto',
          }}/>

        </Toolbar>
      </AppBar>
    </>
  )
}