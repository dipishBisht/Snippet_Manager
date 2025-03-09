import { useState, useEffect } from "react"
import { Code, Menu, X, ChevronDown, User, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    {
        href: "#",
        label: "Resources",
        children: [
            { href: "/docs", label: "Documentation" },
            { href: "/blog", label: "Blog" },
            { href: "/tutorials", label: "Tutorials" },
        ],
    },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { pathname } = useLocation()

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Check if user is logged in (in a real app, this would use auth state)
    useEffect(() => {
        // This is just for demo purposes
        setIsLoggedIn(pathname === "/dashboard")
    }, [pathname])

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-200",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl">
                        <Code className="h-6 w-6 text-primary" />
                        <span className="hidden sm:inline-block">SnippetManager</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) =>
                            link.children ? (
                                <DropdownMenu key={link.label}>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="flex items-center gap-1 h-9">
                                            {link.label}
                                            <ChevronDown className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className="w-48">
                                        {link.children.map((child) => (
                                            <DropdownMenuItem key={child.label} asChild>
                                                <Link to={child.href}>{child.label}</Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        pathname === link.href ? "text-primary" : "text-foreground/70",
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ),
                        )}
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        {isLoggedIn ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <User className="h-5 w-5" />
                                        <span className="sr-only">User menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="hidden md:flex items-center gap-2">
                                <Link to="/login">
                                    <Button variant="ghost" size="sm">
                                        Log in
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button
                                        size="sm"
                                        className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
                                    >
                                        Sign up
                                    </Button>
                                </Link>
                            </div>
                        )}

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {navLinks.map((link) =>
                            link.children ? (
                                <div key={link.label} className="flex flex-col gap-2">
                                    <div className="font-medium">{link.label}</div>
                                    <div className="pl-4 flex flex-col gap-2">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                to={child.href}
                                                className="text-sm text-foreground/70 hover:text-primary"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        pathname === link.href ? "text-primary" : "text-foreground/70",
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ),
                        )}

                        {!isLoggedIn && (
                            <div className="flex flex-col gap-2 pt-2 border-t">
                                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                                    <Button variant="ghost" className="w-full justify-start">
                                        Log in
                                    </Button>
                                </Link>
                                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-gradient-to-r from-primary to-primary/90">Sign up</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}

