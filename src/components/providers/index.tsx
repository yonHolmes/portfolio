import { PropsWithChildren } from "react";
import { appThemes } from "@/theming";
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStateProvider } from "@/context/GlobalStateContext";

const theme = appThemes["lightBlue"]["dark"];

export function Providers({ children }: PropsWithChildren) {
  console.log('Providers');
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStateProvider>
          {children}
        </GlobalStateProvider>
      </ThemeProvider>
    </>
  )
}