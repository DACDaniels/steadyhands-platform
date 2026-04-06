"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="bg-[#eae8e1] text-black min-h-screen">

      {/* HERO */}
      <section className="pt-28 pb-16 px-6 text-center">

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Get in Touch
          </h1>

          <p className="text-neutral-600 max-w-xl mx-auto">
            Whether you are planning a corporate event, need catering, or have a general enquiry,
            our team is ready to assist you.
          </p>
        </div>

      </section>

      {/* CONTENT */}
      <section className="px-6 pb-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT — CONTACT INFO */}
          <div className="space-y-8">

            <div>
              <h2 className="text-2xl font-medium mb-4">
                Contact Details
              </h2>
              <p className="text-neutral-600">
                Reach out directly or send us a message using the form.
              </p>
            </div>

            <div className="space-y-6 text-neutral-700">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+263 77 939 3010</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>reservations@steadyhands.co.zw</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Bata Club, Gweru, Zimbabwe</span>
              </div>

            </div>

            {/* QUICK NOTE */}
            <p className="text-sm text-neutral-500">
              For faster responses, you can also reach us via WhatsApp.
            </p>

          </div>

          {/* RIGHT — FORM */}
          <div className="
            bg-white/80 backdrop-blur-md
            rounded-2xl p-8 md:p-10
            shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          ">

            <h2 className="text-2xl font-medium mb-6">
              Send an Enquiry
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-neutral-300"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-neutral-300"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border border-neutral-300"
              />

              {/* TYPE OF ENQUIRY */}
              <select className="w-full p-3 rounded-lg border border-neutral-300">
                <option>General Enquiry</option>
                <option>Catering</option>
                <option>Conference / Corporate Event</option>
                <option>Private Event (Birthday, etc.)</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us what you need..."
                className="w-full p-3 rounded-lg border border-neutral-300"
              />

              <button
                type="submit"
                className="
                  w-full bg-black text-white py-3 rounded-lg
                  hover:bg-neutral-800 transition
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  )
}