import { Code, Database, Lock, Search, Share2, Zap } from "lucide-react";

export default function features() {
  return (
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
  )
}