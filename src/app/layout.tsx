"use client"
// AppRouterCacheProvider needs to be on Client

import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';import { Providers } from "../components/providers";
import CssBaseline from '@mui/material/CssBaseline';
import { App } from "@/components/elements/app/App";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        {/* {<link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        />} */}
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        ></script>
      </Head>
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
