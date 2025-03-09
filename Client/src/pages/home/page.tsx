import Header from "@/components/home/header"
import FeaturesPage from "@/components/home/features"
import HowItWorks from "@/components/home/how-it-works"
import Testimonials from "@/components/home/testimonials"
import PricingPage from "@/components/home/pricing"
import Faq from "@/components/home/faq"
import Cta from "@/components/home/cta"

export default function Home() {

  return (
    <div className="flex flex-col min-h-[600vh]">
      {/* Hero Section */}
      <Header />

      {/* Features Section */}
      <FeaturesPage />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <PricingPage />

      {/* FAQ Section */}
      <Faq />

      {/* CTA Section */}
      <Cta />
    </div>
  )
}

