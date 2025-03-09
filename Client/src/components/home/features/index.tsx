import { Code, Search, Share2, Database, Lock, Zap, Layers, Globe, Clock, Tag, Filter, BarChart } from "lucide-react"
import { Link } from "react-router-dom"

export default function FeaturesPage() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Syntax Highlighting",
      description:
        "Support for over 100 programming languages with beautiful syntax highlighting for better readability.",
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Powerful Search",
      description:
        "Find any snippet instantly with our advanced search capabilities including full-text and tag-based search.",
    },
    {
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: "Easy Sharing",
      description:
        "Share your snippets with teammates or make them public with a single click. Control access with fine-grained permissions.",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Cloud Storage",
      description: "Your snippets are securely stored in the cloud and accessible from anywhere, on any device.",
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Private Snippets",
      description: "Keep your code private with end-to-end encryption and access controls. Your data remains yours.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Fast Performance",
      description:
        "Lightning-fast performance with our optimized infrastructure. No lag, no waiting, just productivity.",
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Folder Organization",
      description: "Organize your snippets into folders and collections for better management and accessibility.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Cross-Platform",
      description:
        "Access your snippets from any device - desktop, tablet, or mobile. Native apps available for all platforms.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Version History",
      description:
        "Track changes to your snippets with automatic version history. Restore previous versions at any time.",
    },
    {
      icon: <Tag className="h-8 w-8 text-primary" />,
      title: "Custom Tags",
      description: "Create custom tags to categorize and filter your snippets based on your own organizational system.",
    },
    {
      icon: <Filter className="h-8 w-8 text-primary" />,
      title: "Advanced Filters",
      description: "Filter snippets by language, tags, date, and more to quickly find exactly what you're looking for.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Usage Analytics",
      description: "Track how often you use each snippet and get insights into your coding patterns and productivity.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features for Developers</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our snippet manager comes with all the tools you need to organize, search, and share your code snippets
          efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to boost your productivity?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get Started for Free
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  )
}

