import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light";

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: "light",
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "light",
    storageKey = "snippet-manager-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        // Avoid accessing localStorage directly on initial render
        if (typeof window !== "undefined") {
            return (localStorage.getItem(storageKey) as Theme) || defaultTheme
        }
        return defaultTheme
    })

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")

        if (theme === "light") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            root.classList.add(prefersDark ? "dark" : "light")
        } else {
            root.classList.add(theme)
        }
    }, [theme])

    const value = {
        theme,
        setTheme: (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme)
            setTheme(newTheme)
        },
    }   

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

    return context
}

