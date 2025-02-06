import Hero from "../components/Hero"
import Features from "../components/Features"
import Technology from "../components/Technology"
import CTA from "../components/CTA"

function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-emerald-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Features />
        <Technology />
        <CTA />
      </div>
    </div>
  )
}

export default Home

