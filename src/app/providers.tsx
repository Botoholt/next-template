"use client"

import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider disableTransitionOnChange defaultTheme="system" attribute="data-theme">
      {children}
    </ThemeProvider>
  )
}
