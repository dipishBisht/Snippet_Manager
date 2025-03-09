import { Code, Mail } from "lucide-react"
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full py-12 md:py-16 bg-muted/30 border-t">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
                            <Code className="h-6 w-6 text-primary" />
                            <span>SnippetManager</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Store, organize, and share your code snippets in one place. Boost your productivity with our powerful
                            snippet manager.
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-9 w-9 text-muted-foreground hover:text-foreground"
                            >
                                <FiTwitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-9 w-9 text-muted-foreground hover:text-foreground"
                            >
                                <FiGithub className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-9 w-9 text-muted-foreground hover:text-foreground"
                            >
                                <FiLinkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-9 w-9 text-muted-foreground hover:text-foreground"
                            >
                                <Mail className="h-4 w-4" />
                                <span className="sr-only">Email</span>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-base font-medium mb-2">Product</h3>
                        <Link to="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </Link>
                        <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Pricing
                        </Link>
                        <Link to="/changelog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Changelog
                        </Link>
                        <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Documentation
                        </Link>
                        <Link
                            to="/integrations"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Integrations
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-base font-medium mb-2">Company</h3>
                        <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            About
                        </Link>
                        <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Blog
                        </Link>
                        <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Careers
                        </Link>
                        <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Contact
                        </Link>
                        <Link to="/partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Partners
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-base font-medium mb-2">Legal</h3>
                        <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                        <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Cookie Policy
                        </Link>
                        <Link to="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Security
                        </Link>
                        <Link to="/compliance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Compliance
                        </Link>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">&copy; {currentYear} SnippetManager. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <Link to="/status" className="hover:text-foreground transition-colors">
                            Status
                        </Link>
                        <span className="text-muted-foreground/40">•</span>
                        <Link to="/sitemap" className="hover:text-foreground transition-colors">
                            Sitemap
                        </Link>
                        <span className="text-muted-foreground/40">•</span>
                        <Link to="/accessibility" className="hover:text-foreground transition-colors">
                            Accessibility
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

