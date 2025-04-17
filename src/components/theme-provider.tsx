import { createContext, useContext, useState } from "react"

type Theme = "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  ...props
}: ThemeProviderProps) {
  const [theme] = useState<Theme>("light")

  const value = {
    theme,
    // Keep setTheme for API compatibility, but it won't change anything
    setTheme: () => {}, 
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
