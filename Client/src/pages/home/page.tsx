import Header from "@/components/home/header"
import FeaturesPage from "@/components/home/features"
import HowItWorks from "@/components/home/how-it-works"
import Testimonials from "@/components/home/testimonials"
import PricingPage from "@/components/home/pricing"
import Faq from "@/components/home/faq"
import Cta from "@/components/home/cta"
import { useContext, useEffect } from "react"
import { UserContext } from "@/context/user/user-context"
import { useNavigate } from "react-router-dom"
import LoginPage from "../login/page"

export default function Home() {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context?.isLoading && context?.user) {
      navigate("/dashboard");
    }
  }, [context?.user, context?.isLoading, navigate]);

  return (
    <div className="flex flex-col min-h-[600vh]">
      {/* Hero Section */}
      <Header />
      <LoginPage/>

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

