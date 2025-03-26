import { PropsWithChildren } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { appThemes } from "@/theming";

const theme = appThemes["lightBlue"]["dark"];

export function Providers({ children }: PropsWithChildren) {
  console.log('Providers');
  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}