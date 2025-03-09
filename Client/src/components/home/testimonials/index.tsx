export default function Testimonials() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Don't just take our word for it. Here's what our users have to say about our snippet manager.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                    <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                        <div className="space-y-2">
                            <p className="text-muted-foreground">
                                "This snippet manager has completely transformed how I organize my code. I can find any snippet in
                                seconds!"
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="rounded-full bg-muted p-1">
                                <img
                                    src="/placeholder.svg?height=40&width=40"
                                    width={40}
                                    height={40}
                                    alt="User avatar"
                                    className="rounded-full"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Sarah Johnson</p>
                                <p className="text-sm text-muted-foreground">Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                        <div className="space-y-2">
                            <p className="text-muted-foreground">
                                "The sharing feature is a game-changer. I can easily share snippets with my team without any hassle."
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="rounded-full bg-muted p-1">
                                <img
                                    src="/placeholder.svg?height=40&width=40"
                                    width={40}
                                    height={40}
                                    alt="User avatar"
                                    className="rounded-full"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Michael Chen</p>
                                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                        <div className="space-y-2">
                            <p className="text-muted-foreground">
                                "I've tried many snippet managers, but this one stands out with its clean interface and powerful
                                features."
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="rounded-full bg-muted p-1">
                                <img
                                    src="/placeholder.svg?height=40&width=40"
                                    width={40}
                                    height={40}
                                    alt="User avatar"
                                    className="rounded-full"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Emily Rodriguez</p>
                                <p className="text-sm text-muted-foreground">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}