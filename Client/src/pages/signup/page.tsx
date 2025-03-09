import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoadingSpinner } from "@/components/loading-spinner"
import { ThemeToggle } from "@/components/theme-toggle"
import { Link, useNavigate } from "react-router-dom"
import API from "@/utils/axios"
import { handleError, handleSuccess } from "@/utils/handller"

export default function SignupPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { username, email, password, confirmPassword } = formData;

        // Basic validations
        if (!username || !email || !password || !confirmPassword) {
            handleError("All fields are required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            handleError("Please enter a valid email.");
            return;
        }

        if (password.length < 8) {
            handleError("Password must be atleast 8 character long.");
            return;
        }

        if (password !== confirmPassword) {
            handleError("Passwords Don't Match");
            return;
        }

        setIsLoading(true);

        try {
            const response = await API.post("/auth/signup", {
                email: formData.email, username: formData.username.toLowerCase(), password: formData.password
            }
            );

            if (!response.data?.success) {
                handleError(response.data.message);
            }

            handleSuccess("Account Created Successfully !");

            setTimeout(() => {
                navigate("/login");
            }, 2000)

        } catch (error: any) {
            handleError(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };


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
                                <div>
                                    <Label htmlFor="username">Username</Label>
                                    <div className="mt-2">
                                        <Input
                                            id="username"
                                            name="username"
                                            type="text"
                                            autoComplete="given-name"
                                            required
                                            placeholder="John"
                                            value={formData.username}
                                            onChange={handleChange}
                                            className="transition-all duration-200"
                                        />
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

