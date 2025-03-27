"use client"

import { useTheme } from "@mui/material"

export function SpanHighlight({ children }: { children: string }) {
  const {
    spacing,
    palette: {
      info: {
        main,
        contrastText,
      }
    }
  } = useTheme();
  return (
    <span
      style={{
        fontWeight: 500,
        background: main,
        color: contrastText,
        borderRadius: '50px',
        margin: spacing(0, 0.25),
        padding: spacing(0.3, 1),
      }}
    >
      {children}
    </span>
  )
}