import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoadingSpinner } from "@/components/loading-spinner"
import { ThemeToggle } from "@/components/theme-toggle"
import { Link, useNavigate } from "react-router-dom"
import { handleError, handleSuccess } from "@/utils/handller"
import API from "@/utils/axios"
import { useUser } from "@/context/user/user-context"
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { addToken } = useUser();
  const navigate = useNavigate();

  const handleGoogleSuccess = async (response: any) => {
    try {
      const decoded: any = jwtDecode(response.credential); // Decode token to get user info
      console.log("Google User:", decoded);

      // Send token to your backend to authenticate
      const res = await API.post("/auth/google", { token: response.credential });

      if (res.data.success) {
        addToken(res.data.token); // Store token in context/localStorage
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleGoogleError = () => {
    console.error("Google Login Failed");
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { email, password } = formData;

    // Basic validations
    if (!email || !password) {
      handleError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      handleError("Please enter a valid email.");
      return;
    }

    setIsLoading(true)

    try {

      const response = await API.post("/auth/login", {
        email, password
      });

      if (!response.data?.success)
        handleError(response.data.message);

      handleSuccess("Signup Successfully !");
      addToken(response.data.token);


      setTimeout(() => {
        navigate("/dashboard");
      }, 2000)
    } catch (error: any) {
      handleError(error.response.data.message);
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
            <h1 className="text-2xl font-bold tracking-tight">Sign in to your account</h1>
            <p className="text-sm text-muted-foreground">Enter your email below to sign in to your account</p>
          </div>
          <div className="mt-10">
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="#"
                      className="text-sm font-medium hover:underline underline-offset-4 text-primary/80 hover:text-primary transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="mt-2">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="••••••••"
                      value={formData.password}
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
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      "Sign in"
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
                <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary/80 hover:text-primary hover:underline underline-offset-4 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

