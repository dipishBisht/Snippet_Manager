export default function Faq() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Find answers to common questions about our snippet manager.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12">
                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">What is a snippet manager?</h3>
                        <p className="mt-2 text-muted-foreground">
                            A snippet manager is a tool that helps you store, organize, and retrieve code snippets. It's like a
                            digital notebook for your code.
                        </p>
                    </div>
                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">Can I use the snippet manager offline?</h3>
                        <p className="mt-2 text-muted-foreground">
                            Yes, our snippet manager has offline capabilities. You can access and edit your snippets even without an
                            internet connection.
                        </p>
                    </div>
                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">How secure are my snippets?</h3>
                        <p className="mt-2 text-muted-foreground">
                            Your snippets are encrypted and stored securely in our cloud infrastructure. We use industry-standard
                            security practices to protect your data.
                        </p>
                    </div>
                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">Can I share my snippets with others?</h3>
                        <p className="mt-2 text-muted-foreground">
                            Yes, you can share your snippets with specific users or make them public. You have full control over who
                            can access your snippets.
                        </p>
                    </div>
                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">What programming languages are supported?</h3>
                        <p className="mt-2 text-muted-foreground">
                            Our snippet manager supports over 100 programming languages, including JavaScript, Python, Java, C++,
                            Ruby, and many more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}