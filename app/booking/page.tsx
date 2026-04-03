export default function BookingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-24">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 text-center">
          Book a Table
        </h1>

        <p className="text-neutral-600 text-center mb-12">
          Reserve your dining experience with us. We’ll confirm your booking via email.
        </p>

        {/* FORM */}
        <form className="space-y-6">

            {/* NAME */}
            <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                Full Name
                </label>
                <input
                type="text"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="John Doe"
                />
            </div>

            {/* EMAIL */}
            <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                Email Address
                </label>
                <input
                type="email"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@example.com"
                />
            </div>

            {/* PHONE */}
            <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                Phone Number
                </label>
                <input
                type="tel"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="+263..."
                />
            </div>

            {/* DATE */}
            <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                Date
                </label>
                <input
                type="date"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            {/* TIME */}
            <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                Time
                </label>
                <input
                type="time"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            {/* GUESTS */}
            <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                Number of Guests
                </label>
                <input
                type="number"
                className="w-full p-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="2"
                />
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-neutral-800 transition"
            >
                Confirm Booking
            </button>

            </form>

      </div>

    </main>
  )
}