"use client"

import { PropsWithChildren, useEffect, useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { AppSidebar } from "@/components/elements/appSidebar/AppSidebar";
import { ApplicationBar } from "../applicationBar/ApplicationBar";
import { navRoutes } from "@/consts/navigationConsts";
import Link from 'next/link';
import { useIsClient } from "usehooks-ts";
import { AppSearchBox } from "@/components/elements/appSearchBox/AppSearchBox";

const routes = [
  {
    path: navRoutes.projects().path,
    label: 'Projects',
  },
  {
    path: navRoutes.softSkills().path,
    label: 'Soft Skills',
  },
];

export function App({ children }: PropsWithChildren) {
  console.log('App');

  const isClient = useIsClient();
  
  const { isMobile } = useBreakpoints();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function handleOpenSidebar() {
    setIsSidebarOpen(true);
  }
  function handleCloseSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <>
      <ApplicationBar
        openSidebar={handleOpenSidebar}
        toolbar={
          // Only try and render, once we're past the first render
          (!isMobile && isClient)
          ? <>
            <Box
              id="ApplicationToolbarContent"
              display="flex"
              justifyContent="flex-start"
              flexDirection="row"
              alignItems="center"
              height="100%"
              width="100%"
              gap={3}
              marginTop={0.6} // Help Align content to 'YH' text
            >
              {routes.map(({ path, label }) =>
                <Link key={label} href={path} style={{ flexShrink: 0 }}>
                  <Typography color="secondary">
                    {label}
                  </Typography>
                </Link>
              )}
              <AppSearchBox/>
            </Box>
          </>
          : null
        }
      />
      <Box component="main">
        {/*
        Toolbar approach from MUI to offset the App Bar's Height for scrolling
        Note if the Actual (AppBar)Toolbar overflows to two lines, then this approach breaks down
        */}
        <Toolbar id="AppBarOffsetToolbar" />
        <Box padding={1}>
          {children}
        </Box>
      </Box>
      
      <AppSidebar
        open={isSidebarOpen}
        onOpen={handleOpenSidebar}
        onClose={handleCloseSidebar}
      />
    </>
  )
}