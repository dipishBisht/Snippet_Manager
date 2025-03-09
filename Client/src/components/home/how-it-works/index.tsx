export default function HowItWorks() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Get started with our snippet manager in just a few simple steps.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                            1
                        </div>
                        <h3 className="text-xl font-bold">Create an account</h3>
                        <p className="text-center text-muted-foreground">
                            Sign up for a free account to get started with our snippet manager.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                            2
                        </div>
                        <h3 className="text-xl font-bold">Add your snippets</h3>
                        <p className="text-center text-muted-foreground">
                            Create and organize your code snippets with our intuitive interface.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                            3
                        </div>
                        <h3 className="text-xl font-bold">Access anywhere</h3>
                        <p className="text-center text-muted-foreground">
                            Access your snippets from any device, anytime, anywhere.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}