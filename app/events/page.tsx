import Image from "next/image"

const events = [
  {
    title: "Jazz Night",
    image: "/images/gallery1.jpg",
    date: "March 2026"
  },
  {
    title: "Wine Tasting",
    image: "/images/gallery2.jpg",
    date: "February 2026"
  }
]

export default function EventsPage() {
  return (
    <main className="bg-black text-white py-32 px-6">

      <h1 className="text-5xl text-center mb-20 font-[family-name:var(--font-heading)]">
        Events
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {events.map((event, i) => (
          <div key={i} className="bg-neutral-900 rounded-xl overflow-hidden">

            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl mb-2">{event.title}</h3>
              <p className="text-gray-400">{event.date}</p>
            </div>

          </div>
        ))}

      </div>

    </main>
  )
}