"use client"

import { Toaster } from "sonner"
import { useTheme } from "next-themes"

export function AppToaster() {
  const { theme, systemTheme } = useTheme()

  const currentTheme =
    theme === "system" ? systemTheme : theme

  return (
    <Toaster
      theme={currentTheme as "light" | "dark"}
      richColors
      closeButton
    />
  )
}
