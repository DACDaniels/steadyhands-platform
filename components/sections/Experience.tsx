export default function Experience() {
  return (
    <section className="bg-neutral-50 text-neutral-900 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
          A Dining Experience
        </h2>

        {/* SUBTEXT */}
        <p className="text-neutral-500 text-lg max-w-xl mx-auto mb-16">
          Premium cuisine, curated events, and an atmosphere designed to be remembered.
        </p>

        {/* POINTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

          <div>
            <p className="text-neutral-900 mb-1">Cuisine</p>
            <p className="text-neutral-500">Fresh, refined, consistent.</p>
          </div>

          <div>
            <p className="text-neutral-900 mb-1">Events</p>
            <p className="text-neutral-500">Curated nights and live experiences.</p>
          </div>

          <div>
            <p className="text-neutral-900 mb-1">Atmosphere</p>
            <p className="text-neutral-500">Elegant, relaxed, intentional.</p>
          </div>

        </div>

      </div>
    </section>
  )
}