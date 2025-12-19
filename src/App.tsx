import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import FeaturesGrid from './components/FeaturesGrid'
import CampaignsSection from './components/CampaignsSection'
import DemoShowcase from './components/DemoShowcase'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <HowItWorks />
      <FeaturesGrid />
      <CampaignsSection />
      <DemoShowcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App


