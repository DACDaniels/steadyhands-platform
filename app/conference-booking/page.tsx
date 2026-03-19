export default function ConferenceBooking() {
  return (
    <main className="bg-black text-white py-32 px-6 max-w-3xl mx-auto">

      <h1 className="text-5xl text-center mb-12 font-[family-name:var(--font-heading)]">
        Conference & Venue Booking
      </h1>

      <form className="space-y-6">

        <input
          placeholder="Full Name"
          className="w-full p-4 bg-neutral-900 rounded"
        />

        <input
          placeholder="Email"
          className="w-full p-4 bg-neutral-900 rounded"
        />

        <input
          placeholder="Event Date"
          type="date"
          className="w-full p-4 bg-neutral-900 rounded"
        />

        <input
          placeholder="Number of Guests"
          type="number"
          className="w-full p-4 bg-neutral-900 rounded"
        />

        <textarea
          placeholder="Event Details"
          className="w-full p-4 bg-neutral-900 rounded"
        />

        <button className="bg-yellow-500 text-black px-8 py-4 rounded-full">
          Submit Booking
        </button>

      </form>

    </main>
  )
}