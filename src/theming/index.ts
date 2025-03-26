
import { ThemeKeys, ThemeSchemasKeys } from "./themeTypes";
import { Theme } from "@mui/material";
import { themeToKey } from "./themeConsts";
import { builderToSubThemes } from "./builderToTheme";
import {
  themeLightBlue,
  themeYellow,
} from "./sources/allThemes";

export const appThemes: Record<ThemeKeys, Record<ThemeSchemasKeys, Theme>> = {
  [themeToKey.lightBlue]: builderToSubThemes(themeLightBlue),
  [themeToKey.yellow]: builderToSubThemes(themeYellow),
}