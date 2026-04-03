import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import IntroSection from "@/components/sections/IntroSection"
import InfoSection from "@/components/sections/InfoSection"
import FeaturedMenu from "@/components/sections/FeaturedMenu"
import GalleryPreview from "@/components/sections/GalleryPreview"
import Experience from "@/components/sections/Experience"
import EventsPreview from "@/components/sections/EventsPreview"
import ReservationCTA from "@/components/sections/ReservationCTA"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroSection />
      <InfoSection />
      <FeaturedMenu />
      <GalleryPreview />
      <Experience />
      <EventsPreview />
      <ReservationCTA />
    </>
  )
}