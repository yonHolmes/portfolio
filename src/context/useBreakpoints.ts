import { getObjectKeys } from "@/helpers/typescriptHelper";
import { useMediaQuery, useTheme } from "@mui/material";
import { breakpoints } from "@/theming/breakpoints";

type ReturnType = {
  current: BreakpointKeys,
  isMobile: boolean,
  points: Record<BreakpointKeys, BreakpointInfo>,
}

type BreakpointInfo = {
  up: boolean,
  down: boolean,
  only: boolean,
  not: boolean,
}

type BreakpointKeys = keyof typeof breakpoints;

function getBlankBreakpointInfo() {
  return {
    up: false,
    down: false,
    only: false,
    not: false,
  }
}

export function useBreakpoints(): ReturnType {
  const theme = useTheme();
  const keys = getObjectKeys(theme.breakpoints.values);

  const results = getObjectKeys(breakpoints).reduce((ac, key) => {
    ac[key] = getBlankBreakpointInfo();
    return ac;
  }, {} as ReturnType["points"]);

  let current;
  for (const key of keys) {
    results[key] = {
      up: useMediaQuery(theme.breakpoints.up(key)),
      down: useMediaQuery(theme.breakpoints.down(key)), // this, and below (e.g. sm: <600)
      only: useMediaQuery(theme.breakpoints.only(key)),
      not: useMediaQuery(theme.breakpoints.not(key)),
    }

    // This size is the one we're on, or we've not found one and current is bigger than screen
    if (results[key].only || (!current && results[key].down)) {
      current = key;
    }
  }

  return {
    current: current ?? 'xs',
    // Smaller than "Medium"
    isMobile: results.mobileLarge.down,
    points: results,
  };
}