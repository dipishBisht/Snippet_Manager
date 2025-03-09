"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { LoadingSpinner } from "@/components/loading-spinner"
import { ThemeToggle } from "@/components/theme-toggle"
import { useToast } from "@/hooks/use-theme"
import { Link } from "react-router-dom"

export default function SignupPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
    })
    const { toast } = useToast()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, terms: checked }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            toast({
                title: "Passwords don't match",
                description: "Please make sure your passwords match.",
                variant: "destructive",
            })
            return
        }

        setIsLoading(true)

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500))

            // For demo purposes, just show a success toast
            toast({
                title: "Account created",
                description: "Welcome to Snippet Manager!",
                variant: "success",
            })

            // In a real app, you would redirect to the dashboard
            window.location.href = "/dashboard"
        } catch (error) {
            toast({
                title: "Sign up failed",
                description: "There was a problem creating your account.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen flex-col">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="flex flex-col space-y-2 text-center">
                        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium">
                            <ArrowLeft className="h-4 w-4" />
                            Back to home
                        </Link>
                        <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
                        <p className="text-sm text-muted-foreground">Enter your information below to create your account</p>
                    </div>
                    <div className="mt-10">
                        <div className="mt-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="firstName">First name</Label>
                                        <div className="mt-2">
                                            <Input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                autoComplete="given-name"
                                                required
                                                placeholder="John"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="transition-all duration-200"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="lastName">Last name</Label>
                                        <div className="mt-2">
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                autoComplete="family-name"
                                                required
                                                placeholder="Doe"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="transition-all duration-200"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="email">Email address</Label>
                                    <div className="mt-2">
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            placeholder="name@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <div className="mt-2">
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="new-password"
                                            required
                                            placeholder="••••••••"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="confirmPassword">Confirm password</Label>
                                    <div className="mt-2">
                                        <Input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            autoComplete="new-password"
                                            required
                                            placeholder="••••••••"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" checked={formData.terms} onCheckedChange={handleCheckboxChange} required />
                                    <Label htmlFor="terms" className="text-sm">
                                        I agree to the{" "}
                                        <Link
                                            to="#"
                                            className="font-medium text-primary/80 hover:text-primary hover:underline underline-offset-4 transition-colors"
                                        >
                                            Terms of Service
                                        </Link>{" "}
                                        and{" "}
                                        <Link
                                            to="#"
                                            className="font-medium text-primary/80 hover:text-primary hover:underline underline-offset-4 transition-colors"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </Label>
                                </div>

                                <div>
                                    <Button
                                        type="submit"
                                        className="w-full transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <LoadingSpinner size="sm" />
                                                <span>Creating account...</span>
                                            </div>
                                        ) : (
                                            "Create account"
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <Button variant="outline" className="w-full transition-all duration-200 hover:bg-muted/50">
                                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                        <path d="M1 1h22v22H1z" fill="none" />
                                    </svg>
                                    Google
                                </Button>
                                <Button variant="outline" className="w-full transition-all duration-200 hover:bg-muted/50">
                                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                                        />
                                    </svg>
                                    GitHub
                                </Button>
                            </div>
                        </div>

                        <div className="mt-6 text-center text-sm">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-primary/80 hover:text-primary hover:underline underline-offset-4 transition-colors"
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

