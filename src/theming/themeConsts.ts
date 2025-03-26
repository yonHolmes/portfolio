import { ThemeSchemasKeys } from "./themeTypes";


export const themeToKey = {
  lightBlue: 'lightBlue',
  yellow: 'yellow',
} as const;

export const subThemeToKey: Record<ThemeSchemasKeys, ThemeSchemasKeys> = {
  light: 'light',
  "light-medium-contrast": 'light-medium-contrast',
  "light-high-contrast": 'light-high-contrast',
  dark: 'dark',
  "dark-medium-contrast": 'dark-medium-contrast',
  "dark-high-contrast": 'dark-high-contrast',
}

export const subThemeToLabel: Record<ThemeSchemasKeys, string> ={
  light: 'Light',
  "light-medium-contrast": 'Light Medium Contrast',
  "light-high-contrast": 'Light High Contrast',
  dark: 'Dark',
  "dark-medium-contrast": 'Dark Medium Contrast',
  "dark-high-contrast": 'Dark High Contrast',
}