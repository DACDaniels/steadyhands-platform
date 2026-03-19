import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
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
      <FeaturedMenu />
      <GalleryPreview />
      <Experience />
      <EventsPreview />
      <ReservationCTA />
    </>
  )
}