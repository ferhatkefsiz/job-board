"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import Button from "@/components/ui/button"

const ThemeSwitcher = ({ size = "md" }: { size?: "md" | "sm" | "xs" }) => {
  const { setTheme, theme } = useTheme()

  return (
    <Button.Root
      variant="ghost"
      intent="gray"
      size={size}
      className="relative transition-all ease-linear duration-300"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Button.Icon
        type="only"
        size={size}
        className="-rotate-180 scale-150 opacity-0 duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100"
      >
        <Sun />
      </Button.Icon>
      <Button.Icon
        type="only"
        size={size}
        className="absolute inset-0 duration-300 dark:rotate-180 dark:scale-0 dark:opacity-0"
      >
        <Moon />
      </Button.Icon>
    </Button.Root>
  )
}

export default ThemeSwitcher
