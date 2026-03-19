"use client"

export default function EventsPreview() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-center mb-16">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-neutral-900 p-8 rounded-xl">
            <h3 className="text-xl mb-2">Live Jazz Night</h3>
            <p className="text-gray-400">Saturday Evening</p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl">
            <h3 className="text-xl mb-2">Wine Tasting</h3>
            <p className="text-gray-400">Friday Night</p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl">
            <h3 className="text-xl mb-2">Chefs Special Dinner</h3>
            <p className="text-gray-400">Sunday</p>
          </div>

        </div>

      </div>

    </section>
  )
}