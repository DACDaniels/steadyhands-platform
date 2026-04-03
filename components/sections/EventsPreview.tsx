"use client"

export default function EventsPreview() {
  return (
    <section className="py-28 px-6 border-t" style={{ backgroundColor: "#f5f1ec" }}>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-[#1a1a1a] mb-6">
          Upcoming Events
        </h2>

        {/* SUBTEXT */}
        <p className="text-[#6b6b6b] text-center max-w-xl mx-auto mb-16">
          Curated experiences designed to elevate your evenings.
        </p>

        {/* EVENTS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* EVENT 1 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5e0d9] transition hover:shadow-lg">
            <p className="text-xs text-[#8a8a8a] mb-3 tracking-wide">
              SATURDAY
            </p>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
              Live Jazz Night
            </h3>
            <p className="text-sm text-[#6b6b6b]">
              An evening of live music and atmosphere.
            </p>
          </div>

          {/* EVENT 2 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5e0d9] transition hover:shadow-lg">
            <p className="text-xs text-[#8a8a8a] mb-3 tracking-wide">
              FRIDAY
            </p>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
              Wine Tasting
            </h3>
            <p className="text-sm text-[#6b6b6b]">
              Explore curated selections and pairings.
            </p>
          </div>

          {/* EVENT 3 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5e0d9] transition hover:shadow-lg">
            <p className="text-xs text-[#8a8a8a] mb-3 tracking-wide">
              SUNDAY
            </p>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
              Chef’s Special Dinner
            </h3>
            <p className="text-sm text-[#6b6b6b]">
              A signature dining experience for the weekend.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:bg-neutral-800 transition">
            View All Events
          </button>
        </div>

      </div>

    </section>
  )
}