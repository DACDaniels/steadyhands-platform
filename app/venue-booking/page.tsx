"use client"

import Image from "next/image"

export default function VenueBookingPage() {
  return (
    <main className="bg-[#eae8e1] text-neutral-900">

      {/* HERO / INTRO */}
      <section className="pt-24 md:pt-28 pb-16 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Host Your Event at SteadyHands
          </h1>

          <p className="text-neutral-600 max-w-xl mx-auto">
            From corporate conferences to private celebrations, we provide a refined setting designed for memorable experiences.
          </p>

        </div>

      </section>

      {/* MINI GALLERY */}
      <section className="pb-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="relative h-[220px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image src="/images/kids.webp" alt="Conference setup" fill className="object-cover" />
          </div>

          <div className="relative h-[220px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image src="/images/conf2.webp" alt="Meeting space" fill className="object-cover" />
          </div>

          <div className="relative h-[220px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image src="/images/restaurant-new.webp" alt="Event venue" fill className="object-cover" />
          </div>

        </div>

      </section>

      {/* VALUE SECTION */}
      <section className="pb-20 px-6 text-center">

        <div className="max-w-2xl mx-auto">

          <h2 className="text-2xl md:text-3xl mb-6">
            Why Choose SteadyHands
          </h2>

          <p className="text-neutral-600 leading-relaxed">
            Elegant interiors, tailored catering, and flexible venue layouts make SteadyHands the perfect choice for conferences, workshops, meetings, and private events.
          </p>

        </div>

      </section>

      {/* FORM */}
      <section className="px-4 pb-20">

        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

          <h2 className="text-2xl md:text-3xl font-medium text-center mb-6">
            Make an Enquiry
          </h2>

          <form className="space-y-6">

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white"
                placeholder="John Doe"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white"
                placeholder="you@example.com"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white"
                placeholder="+263..."
              />
            </div>

            {/* EVENT TYPE (DROPDOWN ✅) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Event Type
              </label>
              <select
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white"
                defaultValue=""
              >
                <option value="" disabled>Select event type</option>
                <option>Conference</option>
                <option>Training Workshop</option>
                <option>Meeting</option>
                <option>Birthday</option>
              </select>
            </div>

            {/* DATE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Event Date
              </label>
              <input
                type="date"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white"
              />
            </div>

            {/* GUESTS */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Estimated Guests
              </label>
              <input
                type="number"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white"
                placeholder="50"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Details
              </label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white"
                placeholder="Tell us more about your event..."
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-neutral-800 transition"
            >
              Submit Request
            </button>

          </form>

        </div>

      </section>

    </main>
  )
}