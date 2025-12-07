// app/events/[slug]/page.jsx

/**
 * Fetch a single event from the backend API by slug
 */
async function getEvent(slug) {
  const res = await fetch(`http://localhost:4000/api/events/${slug}`, {
    cache: "no-store"
  });
  if (!res.ok) throw new Error("Failed to load event");
  return res.json();
}


export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = await getEvent(slug);

  return (
    <main className="min-h-screen bg-white text-black font-ibmplex">
      {/* NAVBAR */}
      <header className="w-full bg-white shadow-[0_1px_22px_rgba(0,0,0,0.05)] fixed top-0 left-0 right-0 z-40">
        <div className="max-w-[1156px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight no-underline hover:no-underline"
          >
            The BluePrint Series
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.25em]">
            <a href="#intro" className="font-semibold">
              Intro
            </a>
            <a href="#agenda" className="font-semibold">
              Agenda
            </a>
            <a href="#speakers" className="font-semibold">
              Speakers
            </a>
            <a href="#event" className="font-normal">
              About
            </a>
            <span className="border border-black px-3 py-1">
              Get Tickets
            </span>
          </nav>
        </div>
      </header>

      <div className="pt-[88px]">
        {/* HERO – Figma-style */}
        <section className="relative w-full h-[520px] md:h-[640px] overflow-hidden">
          <img
            src={event.heroImageUrl}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Radial + gradient overlays */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(30,0,255,0.35)_0%,rgba(30,0,255,0)_70%)] mix-blend-lighten" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(30,0,255,0.18)_0%,rgba(30,0,255,0)_70%)] mix-blend-lighten" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          {/* Text block intentionally empty – design text is baked into the image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            {/* No text here; hero image contains typography */}
          </div>
        </section>

        {/* INTRO */}
        <section
          id="intro"
          className="max-w-[1120px] mx-auto px-8 py-20 flex flex-col gap-4"
        >
          <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.25em]">
            <span className="mt-[6px] w-3 h-3 bg-black" />
            <span className="text-[32px] leading-6">
              Introduction of this event
            </span>
          </div>
          <p className="mt-4 text-[24px] leading-[1.3] text-neutral-800 font-normal">
            {event.intro}
          </p>
        </section>

        {/* AGENDA */}
        <section
          id="agenda"
          className="max-w-[1156px] mx-auto px-6 md:px-8 pb-20 md:pb-24"
        >
          <div className="mb-16 text-center">
            <h2 className="text-[56px] md:text-[80px] leading-none font-semibold">
              <span style={{ fontFamily: 'BRSonoma-SemiBold, IBM Plex Sans, sans-serif' }}>Agenda</span>
            </h2>
          </div>

          <div className="space-y-5">
            {event.agenda && event.agenda.length > 0 ? (
              event.agenda.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[220px_minmax(0,1fr)_220px] gap-8 py-6 border-b border-neutral-200 items-start"
                >
                  {/* Left: time + title, fixed width so it doesn't shove the middle column */}
                  <div className="flex flex-col gap-1">
                    <span className="uppercase text-[#111111] text-xl leading-6">
                      {item.time}
                    </span>
                    <span className="uppercase text-[#111111] text-[15px] leading-5 font-bold">
                      {item.title}
                    </span>
                  </div>

                  {/* Middle: stays centered & consistent width */}
                  <div className="text-black text-lg md:text-xl leading-6 max-w-md mx-auto text-center">
                    {item.description || event.description}
                  </div>

                  {/* Right: location, aligned right */}
                  <div className="text-right uppercase text-lg md:text-xl leading-6 text-[#111111]">
                    {item.location}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-neutral-500">Agenda coming soon.</p>
            )}
          </div>
        </section>

        {/* SPEAKERS */}
        {event.speakers && event.speakers.length > 0 && (
          <section
            id="speakers"
            className="max-w-[1156px] mx-auto px-6 md:px-8 pb-20 md:pb-24"
          >
            <div className="mb-16 text-center">
              <h2 className="text-[56px] md:text-[80px] leading-none font-semibold">
                <span style={{ fontFamily: 'BRSonoma-SemiBold, IBM Plex Sans, sans-serif' }}>Speakers</span>
              </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16">
              {event.speakers.slice(0, 3).map((speaker, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center max-w-xs mx-auto"
                >
                  <div className="w-[294px] h-[295px] rounded-full overflow-hidden mb-6 max-w-full">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-2xl font-medium leading-[37px]">
                    {speaker.name}
                  </p>
                  <p className="mt-2 text-2xl uppercase leading-6 text-[#464646] opacity-60">
                    {speaker.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* THE EVENT + PREVIOUS EVENTS */}
        <section
          id="event"
          className="max-w-[1156px] mx-auto px-6 md:px-8 pb-20 md:pb-24"
        >
          <div className="mb-16 text-center">
            <h2 className="text-[56px] md:text-[80px] leading-none font-semibold">
              <span style={{ fontFamily: 'BRSonoma-SemiBold, IBM Plex Sans, sans-serif' }}>The Event</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-[86px] mb-16">
            <div className="md:w-1/2 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-black" />
                <span className="uppercase text-2xl leading-6">
                  introduction of this event
                </span>
              </div>
              <p className="text-2xl leading-[34px]">{event.description}</p>
            </div>

            <div className="md:w-1/2 space-y-5 flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-black" />
                <span className="uppercase text-2xl leading-6">
                  our past events
                </span>
              </div>
              <div className="w-full h-[420px] bg-neutral-100 overflow-hidden flex items-center justify-center">
                <img
                  src={"/assets/theevent4.png"}
                  alt="The Event"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

{event.previousEvents && event.previousEvents.length > 0 && (
  <div className="relative flex flex-row justify-center items-end min-h-[340px] mt-8 mb-12">
    {event.previousEvents.slice(0, 3).map((pe, idx) => {
      const baseClasses =
        "relative w-[350px] h-[332px] overflow-hidden mx-[-40px] flex items-end transform-gpu transition-transform duration-500 ease-out";

      const poseClasses =
        idx === 0
          ? "z-20 rotate-[15deg] -translate-x-6 -translate-y-2 md:-translate-x-8 scale-95"
          : idx === 1
          ? "z-30 scale-[1.08] -translate-y-2"
          : "z-20 -rotate-[15deg] translate-x-6 -translate-y-2 md:translate-x-8 scale-95";

      // Adjust gradient direction based on card rotation
      // Remove gradients and raise text for all cards
      // Move right card text slightly right
      // Adjust object position for better framing
      let objectPosition = "center";
      if (idx === 0) objectPosition = "left center";
      if (idx === 1) objectPosition = "center center";
      if (idx === 2) objectPosition = "right center";

      return (
        <div key={idx} className={`${baseClasses} ${poseClasses}`}>
          {/* Stretched image to fill the shadow card */}
          <img
            src={
              idx === 0 ? '/assets/theevent5.png'
              : idx === 1 ? '/assets/theevent1.png'
              : '/assets/theevent2.png'
            }
            alt={pe.name}
            width={idx === 0 ? 439 : idx === 1 ? undefined : 423}
            height={idx === 0 ? 326 : idx === 1 ? undefined : 320}
            className={`
              absolute inset-0
              w-full h-full
              object-cover
              !shadow-none !outline-none !ring-0
              rounded-xl
              scale-y-[1.6]
              translate-y-4
            `}
            style={{ objectFit: 'cover', objectPosition }}
          />


          {/* text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none">
            <p className="text-base font-medium text-white">{pe.name}</p>
            <p className="text-sm text-neutral-200">{pe.location}</p>
          </div>
        </div>
      );
    })}
  </div>
)}

        </section>

        {/* FAQ */}
        {event.faq && event.faq.length > 0 && (
          <section className="max-w-[1120px] mx-auto px-8 pb-24">
            <h2 className="text-[56px] md:text-[80px] lg:text-[100px] leading-none font-semibold mb-8">
              <span style={{ fontFamily: 'BRSonoma-SemiBold, IBM Plex Sans, sans-serif' }}>FAQ</span>
            </h2>
            <div className="border-t border-neutral-200 text-xs md:text-sm">
              {event.faq.map((item, idx) => (
                <details key={idx} className="border-b border-neutral-200">
                  <summary className="flex justify-between items-center py-4 cursor-pointer">
                    <span>{item.question}</span>
                    <span className="text-xl leading-none">+</span>
                  </summary>
                  <div className="pb-4 text-neutral-700">{item.answer}</div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="border-t border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-8 py-24 text-center">
            <h3 className="text-[56px] md:text-[80px] lg:text-[100px] leading-none font-semibold mb-4">
              <span style={{ fontFamily: 'BRSonoma-SemiBold, IBM Plex Sans, sans-serif' }}>The BluePrint Series</span>
            </h3>
            <p className="text-[16px] uppercase tracking-[0.25em] text-neutral-500">
              © 2025 THE GRADIENT GROUP, LLC
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
