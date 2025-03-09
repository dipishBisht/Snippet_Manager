import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            description: "Perfect for individuals just getting started",
            features: ["Up to 50 snippets", "Basic search functionality", "Public sharing", "5 tags", "Community support"],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Pro",
            price: "$9",
            period: "per month",
            description: "For power users who need more snippets and features",
            features: [
                "Unlimited snippets",
                "Advanced search",
                "Private snippets",
                "Team sharing",
                "Unlimited tags",
                "Folder organization",
                "Version history",
                "Priority support",
            ],
            cta: "Start Free Trial",
            popular: true,
        },
        {
            name: "Team",
            price: "$19",
            period: "per user/month",
            description: "For teams that need to collaborate on snippets",
            features: [
                "Everything in Pro",
                "Team management",
                "Advanced permissions",
                "Shared workspaces",
                "Team analytics",
                "SSO authentication",
                "API access",
                "Dedicated support",
            ],
            cta: "Contact Sales",
            popular: false,
        },
    ]

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Choose the plan that's right for you. All plans include a 14-day free trial.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`rounded-lg border bg-card shadow-sm overflow-hidden relative ${plan.popular ? "ring-2 ring-primary" : ""
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                                Most Popular
                            </div>
                        )}
                        <div className="p-6">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.period && <span className="ml-1 text-sm text-muted-foreground">{plan.period}</span>}
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                            <ul className="mt-6 space-y-3">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <Button
                                    className={`w-full ${plan.popular ? "bg-primary" : ""}`}
                                    variant={plan.popular ? "default" : "outline"}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

                <div className="space-y-6">
                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">Can I switch plans later?</h3>
                        <p className="mt-2 text-muted-foreground">
                            Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated
                            for the remainder of your billing cycle.
                        </p>
                    </div>

                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">What happens if I exceed my snippet limit?</h3>
                        <p className="mt-2 text-muted-foreground">
                            On the Free plan, you won't be able to create new snippets once you reach the 50 snippet limit. You'll
                            need to upgrade to the Pro plan for unlimited snippets or delete existing snippets.
                        </p>
                    </div>

                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">Do you offer discounts for annual billing?</h3>
                        <p className="mt-2 text-muted-foreground">
                            Yes, we offer a 20% discount when you choose annual billing. This option is available for both Pro and
                            Team plans.
                        </p>
                    </div>

                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">Is there a limit to how many team members I can add?</h3>
                        <p className="mt-2 text-muted-foreground">
                            No, there's no limit to the number of team members you can add on the Team plan. You'll be billed per user
                            per month.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

