"use client"
// AppRouterCacheProvider needs to be on Client

import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';import { Providers } from "../components/providers";
import CssBaseline from '@mui/material/CssBaseline';
import { App } from "@/components/elements/app/App";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('RootLayout');

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}> 
        <AppRouterCacheProvider>
          <Providers>
            <App>
              <CssBaseline />
              {children}
            </App>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
