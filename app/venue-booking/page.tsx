export default function VenueBookingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-24">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 text-center">
          Venue Booking
        </h1>

        <p className="text-neutral-600 text-center mb-12">
          Host your event with us. Tell us about your plans and we’ll get back to you.
        </p>

        <form className="space-y-6">

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-neutral-400 bg-white text-neutral-900"
              placeholder="John Doe"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-neutral-400 bg-white text-neutral-900"
              placeholder="you@example.com"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-3 rounded-lg border border-neutral-400 bg-white text-neutral-900"
              placeholder="+263..."
            />
          </div>

          {/* EVENT TYPE */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-1">
              Event Type
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-neutral-400 bg-white text-neutral-900"
              placeholder="Birthday, Corporate, Wedding..."
            />
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-1">
              Event Date
            </label>
            <input
              type="date"
              className="w-full p-3 rounded-lg border border-neutral-400 bg-white text-neutral-900"
            />
          </div>

          {/* GUESTS */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-1">
              Estimated Guests
            </label>
            <input
              type="number"
              className="w-full p-3 rounded-lg border border-neutral-400 bg-white text-neutral-900"
              placeholder="50"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-1">
              Additional Details
            </label>
            <textarea
              rows={4}
              className="w-full p-3 rounded-lg border border-neutral-400 bg-white text-neutral-900"
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

    </main>
  )
}