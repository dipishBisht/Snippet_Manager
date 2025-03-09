import { ArrowRight, Code, Database, Lock, Search, Share2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[600vh]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 via-background to-primary/5 animate-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-primary/70">
                  Organize your code snippets with ease
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Store, organize, and share your code snippets in one place. Boost your productivity with our powerful
                  snippet manager.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="/signup">
                  <Button
                    size="lg"
                    className="gap-1.5 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="/login">
                  <Button size="lg" variant="outline" className="transition-all duration-300">
                    Log in
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-10 blur-xl"></div>
                <div className="relative glass-effect rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
                  <div className="p-4 border-b bg-muted/50">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-sm font-medium">snippet-manager.js</div>
                    </div>
                  </div>
                  <div className="p-4 font-mono text-sm overflow-hidden">
                    <pre className="text-xs md:text-sm">
                      <code className="language-javascript">
                        {`// Snippet Manager
const snippetManager = {
  snippets: [],
  
  addSnippet(title, code, language) {
    const id = Date.now();
    this.snippets.push({
      id,
      title,
      code,
      language,
      createdAt: new Date(),
    });
    return id;
  },
  
  getSnippet(id) {
    return this.snippets.find(
      snippet => snippet.id === id
    );
  },
  
  getAllSnippets() {
    return this.snippets;
  },
  
  updateSnippet(id, updates) {
    const index = this.snippets.findIndex(
      snippet => snippet.id === id
    );
    if (index !== -1) {
      this.snippets[index] = {
        ...this.snippets[index],
        ...updates,
        updatedAt: new Date(),
      };
      return true;
    }
    return false;
  },
  
  deleteSnippet(id) {
    const index = this.snippets.findIndex(
      snippet => snippet.id === id
    );
    if (index !== -1) {
      this.snippets.splice(index, 1);
      return true;
    }
    return false;
  }
};`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Everything you need to manage your snippets
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our snippet manager comes with all the tools you need to organize, search, and share your code snippets
                efficiently.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Syntax Highlighting</h3>
              <p className="text-center text-muted-foreground">
                Support for over 100 programming languages with beautiful syntax highlighting.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Powerful Search</h3>
              <p className="text-center text-muted-foreground">
                Find any snippet instantly with our advanced search capabilities.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Easy Sharing</h3>
              <p className="text-center text-muted-foreground">
                Share your snippets with teammates or make them public with a single click.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Cloud Storage</h3>
              <p className="text-center text-muted-foreground">
                Your snippets are securely stored in the cloud and accessible from anywhere.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Private Snippets</h3>
              <p className="text-center text-muted-foreground">
                Keep your code private with end-to-end encryption and access controls.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fast Performance</h3>
              <p className="text-center text-muted-foreground">
                Lightning-fast performance with our optimized infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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

      {/* Testimonials Section */}
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

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that's right for you. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border bg-card shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Free</h3>
                <div className="mt-4 text-4xl font-bold">$0</div>
                <p className="mt-1 text-sm text-muted-foreground">Forever free</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Up to 50 snippets
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Basic search
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Public sharing
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/signup">
                    <Button className="w-full" variant="outline">
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border bg-card shadow-sm relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Popular
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">Pro</h3>
                <div className="mt-4 text-4xl font-bold">$9</div>
                <p className="mt-1 text-sm text-muted-foreground">Per month, billed annually</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Unlimited snippets
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Advanced search
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Private snippets
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Team sharing
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/signup">
                    <Button className="w-full">Get Started</Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border bg-card shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Team</h3>
                <div className="mt-4 text-4xl font-bold">$19</div>
                <p className="mt-1 text-sm text-muted-foreground">Per user/month, billed annually</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Team management
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Advanced permissions
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Priority support
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/signup">
                    <Button className="w-full" variant="outline">
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* CTA Section */}
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
              <a href="/signup">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-1.5 bg-white text-primary hover:bg-white/90 transition-all duration-300"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300"
                >
                  Log in
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

