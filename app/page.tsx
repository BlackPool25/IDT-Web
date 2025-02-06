import dynamic from "next/dynamic"
import { Suspense } from "react"

// Server components
import Hero from "../components/Hero"
import WhyItMatters from "../components/WhyItMatters"
import Benefits from "../components/Benefits"
import HowItWorks from "../components/HowItWorks"
import Footer from "../components/Footer"

// Client components
const Navigation = dynamic(() => import("../components/Navigation"), { ssr: false })
const VoiceMode = dynamic(() => import("../components/VoiceMode"), { ssr: false })
const NeedHelp = dynamic(() => import("../components/NeedHelp"), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-cream text-text-dark">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </Suspense>
      <main>
        <Hero />
        <WhyItMatters />
        <Benefits />
        <HowItWorks />
        <Suspense fallback={<div>Loading...</div>}>
          <VoiceMode />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <NeedHelp />
      </Suspense>
    </div>
  )
}

