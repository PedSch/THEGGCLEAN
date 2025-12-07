// frontend/app/page.jsx
const EVENTS = [
  {
    slug: "blueprint-rich-tu",
    title: "The BluePrint Series: A Fireside Chat with Rich Tu",
    date: "May 14, 2025",
    location: "Soho House, New York"
  },
  {
    slug: "blueprint-brand-futures",
    title: "The BluePrint Series: Brand Futures Live",
    date: "June 20, 2025",
    location: "Brooklyn, New York"
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black font-ibmplex">
      <header className="w-full bg-white shadow-[0_1px_22px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1156px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight no-underline hover:no-underline"
          >
            The BluePrint Series
          </a>
        </div>
      </header>

      <section className="max-w-[1156px] mx-auto px-6 md:px-8 py-16">
        <h1 className="text-[40px] md:text-[56px] font-semibold mb-8">
          Events
        </h1>

        <div className="space-y-6">
          {EVENTS.map(event => (
            <a
              key={event.slug}
              href={`/events/${event.slug}`}
              className="block border border-neutral-200 p-6 hover:bg-neutral-50 transition"
            >
              <p className="text-xs uppercase tracking-[0.25em] mb-2">
                {event.location} — {event.date}
              </p>
              <h2 className="text-2xl font-semibold">{event.title}</h2>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
