import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Events from "@/components/Events"
import Awards from "@/components/Awards"
import Location from "@/components/Location"
import Coordinators from "@/components/Coordinators"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <Hero />
      <Events />
      <Awards />
      <Location />
      <Coordinators />
      <Footer />
    </main>
  )
}

