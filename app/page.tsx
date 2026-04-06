import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import IntroSection from "@/components/sections/IntroSection"
import FeaturedMenu from "@/components/sections/FeaturedMenu"
import ConferencePreview from "@/components/sections/ConferencePreview"
import BarExperience from "@/components/sections/Bar"
import GalleryPreview from "@/components/sections/GalleryPreview"
import Experience from "@/components/sections/Experience"
import EventsPreview from "@/components/sections/EventsPreview"
import InfoSection from "@/components/sections/InfoSection"
import ReservationCTA from "@/components/sections/ReservationCTA"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroSection />
      <FeaturedMenu />
      <ConferencePreview />
      <BarExperience />
      <GalleryPreview />
      <Experience />
      <EventsPreview />
      <InfoSection />
      <ReservationCTA />
    </>
  )
}