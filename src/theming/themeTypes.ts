import { Theme } from "@mui/material";
import { themeLightBlue } from "@/theming/sources/material-theme-light-blue";
import { themeToKey } from "./themeConsts";

export type ThemeKeys = typeof themeToKey[keyof typeof themeToKey];

export type ThemeSchemasKeys = keyof typeof themeLightBlue.schemes;

export type SubThemes = Record<ThemeSchemasKeys, Theme>

export type ThemeBuilder = typeof themeLightBlue;