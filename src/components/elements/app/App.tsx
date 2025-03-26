"use client"

import { PropsWithChildren, useEffect, useState } from "react";
import {
  Box,
  Toolbar,
  // Link,
} from "@mui/material";
import { useBreakpoints } from "@/context/useBreakpoints";
import { AppSidebar } from "@/components/elements/appSidebar/AppSidebar";
import { ApplicationBar } from "../applicationBar/ApplicationBar";
import { navRoutes } from "@/consts/navigationConsts";
import { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Yon Holmes",
  description: "Gamer, turned Developer",
};

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
          !isMobile
          ? <Box
              id="ApplicationToolbarContent"
              display="flex"
              flexDirection="row"
              height="100%"
              gap={3}
              marginTop={0.6} // Help Align content to 'YH' text
            >
              {routes.map(({ path, label }) =>
                <Link key={label} href={path}>
                  {label}
                </Link>
              )}
            </Box>
          : null
        }
      />
      <Box component="main">
        {/*
        Toolbar approach from MUI to offset the App Bar's Height for scrolling
        Note if the Actual (AppBar)Toolbar overflows to two lines, then this approach breaks down
        */}
        <Toolbar />
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