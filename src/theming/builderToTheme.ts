
import { breakpoints } from "./breakpoints";
import { SubThemes, ThemeBuilder, ThemeSchemasKeys } from "./themeTypes";
import { createTheme, Theme } from "@mui/material";

export function builderToSubThemes(builderTheme: ThemeBuilder): SubThemes {
  return {
    light: createTheme(builderToSubTheme(builderTheme, 'light')),
    "light-medium-contrast": createTheme(builderToSubTheme(builderTheme, 'light-medium-contrast')),
    "light-high-contrast": createTheme(builderToSubTheme(builderTheme, 'light-high-contrast')),
    dark: createTheme(builderToSubTheme(builderTheme, 'dark')),
    "dark-medium-contrast": createTheme(builderToSubTheme(builderTheme, 'dark-medium-contrast')),
    "dark-high-contrast": createTheme(builderToSubTheme(builderTheme, 'dark-high-contrast')),
  }
}

function builderToSubTheme(builderTheme: ThemeBuilder, key: ThemeSchemasKeys): Theme {
  const rawTheme = createTheme({
    breakpoints: {
      values: breakpoints,
    },
  });
  const { palette } = rawTheme;

  if (!(key in builderTheme.schemes)) {
    const msg = `Missing Key '${String(key)}' in builderTheme`;
    console.error(msg, builderTheme);
    throw new Error(msg);
  }
  const {
    schemes: {
      [key]: scheme,
    },
  } = builderTheme;

  return {
    ...rawTheme,
    palette: {
      ...rawTheme.palette,
      mode: String(key).startsWith('light') ? 'light' : 'dark',
      primary: palette.augmentColor({
        color: {
          main: scheme.primary,
          contrastText: scheme.onPrimary
        }
      }),
      secondary: palette.augmentColor({
        color: {
          main: scheme.secondary,
          contrastText: scheme.onSecondary
        }
      }),
      text: {
        primary: scheme.onBackground,
        secondary: scheme.onSurface,
        disabled: scheme.onTertiary,
      },
      background: {
        default: scheme.background,
        paper: scheme.surfaceVariant
      },
      error: palette.augmentColor({
        color: {
          main: scheme.error,
          contrastText: scheme.onError
        }
      }),

      // [variant]: {...}
    },
    // components: {...}
  }
}