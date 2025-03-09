import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Cta() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to get started?</h2>
                        <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Join thousands of developers who are already using our snippet manager to boost their productivity.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link to="/signup">
                            <Button
                                size="lg"
                                className="gap-1.5 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
                            >
                                Get Started <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button size="lg" variant="outline" className="transition-all duration-300 text-foreground">
                                Log in
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}