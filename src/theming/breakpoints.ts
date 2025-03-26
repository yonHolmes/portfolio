

export const breakpoints = {
  // xs: 0,
  // sm: 600,
  // md: 900,
  // lg: 1200,
  // xl: 1536,
  xs: 0,
  mobile: 600,
  mobileLarge: 800,
  tablet: 900,
  monitor: 1200,
  desktop: 1900,
  large: 2200,
} as const;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    // xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;

    xs: true,
    mobile: true,
    mobileLarge: true,
    tablet: true,
    monitor: true,
    desktop: true,
    large: true,
  }
}