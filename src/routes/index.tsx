import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/urban/Hero";
import { SiteNav } from "@/components/urban/SiteNav";
import { Section } from "@/components/urban/Section";
import { RoomCard } from "@/components/urban/RoomCard";
import { MaterialIcon } from "@/components/urban/MaterialIcon";
import {
  BOOKING_URL,
  amenities,
  dining,
  gallery,
  info,
  places,
  rooms,
  shops,
} from "@/data/urban-living";

const heroImage = "https://mahsaavenue.com.my/urban_living/assets/Images/lobby.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urban Living at Mahsa Avenue | Rooms, Suites & Amenities" },
      {
        name: "description",
        content:
          "Minimalist rooms and suites at Urban Living, Mahsa Avenue Kuala Lumpur — pool, fitness centre, Pokok KL dining, shops and 24-hour front desk.",
      },
      { property: "og:title", content: "Urban Living at Mahsa Avenue" },
      {
        property: "og:description",
        content:
          "Elegant, minimalistic rooms and suites in Kuala Lumpur with pool, dining, shops and wellness at your doorstep.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="pb-16 md:pb-0">
      <SiteNav />
      <Hero />

      {/* Booking band */}
      <section className="bg-espresso text-espresso-foreground">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-6 py-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-10">
          <div className="min-w-0">
            <p className="eyebrow text-brass">Let's secure your room</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">One step away to paradise</h2>
            <p className="mt-2 text-sm text-espresso-foreground/75">
              Experience a hassle-free stay
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-2 bg-brass px-7 py-3.5 eyebrow text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MaterialIcon name="event" className="text-[18px]" />
            Book with us
          </a>
        </div>
      </section>

      {/* Amenities */}
      <Section id="amenities" eyebrow="Featured amenities" title="Convenience at your fingertips">
        <ul className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {amenities.map((a) => (
            <li
              key={a.label}
              className="flex min-h-[128px] flex-col items-center justify-center gap-3 bg-background px-4 py-6 text-center"
            >
              <MaterialIcon name={a.icon} className="text-[28px] text-brass" />
              <span className="text-xs text-muted-foreground">{a.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {gallery.map((g) => (
            <div key={g.src} className="aspect-[4/3] overflow-hidden">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Rooms */}
      <Section
        id="rooms"
        tone="muted"
        eyebrow="Our elegant and minimalistic"
        title="Rooms & Suites"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {rooms.map((r) => (
            <RoomCard key={r.name} room={r} />
          ))}
        </div>
      </Section>

      {/* Dining */}
      <Section id="dining" eyebrow="Indulge in the flavours of" title="Local Delicacies">
        <div className="grid gap-10 md:grid-cols-2">
          {dining.map((d) => (
            <article key={d.name} className="min-w-0">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-3xl">
                {d.name}
                <span className="ml-2 text-lg italic text-muted-foreground">{d.by}</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Shops */}
      <Section tone="muted" eyebrow="Elevate your stay with" title="Shops & Grocer">
        <div className="grid gap-10">
          {shops.map((s, i) => (
            <article
              key={s.name}
              className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-2 aspect-[16/9] overflow-hidden">
                  <img
                    src={s.images[0]}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                {s.images.slice(1).map((img) => (
                  <div key={img} className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img}
                      alt={s.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="min-w-0">
                <p className="eyebrow text-brass">{s.kicker}</p>
                <h3 className="mt-2 font-display text-4xl">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Places of interest */}
      <Section id="nearby" eyebrow="We got you covered with" title="Places of Interest">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((p) => (
            <article key={p.name} className="group relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl text-espresso-foreground">{p.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-espresso-foreground/80">
                  <MaterialIcon name="distance" className="text-[16px] text-brass" />
                  {p.distance}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Residence information */}
      <Section id="info" tone="dark" eyebrow="Things to know" title="Residence Information">
        <div className="grid gap-px bg-espresso-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {info.map((block) => (
            <div key={block.title} className="bg-espresso p-6">
              <h3 className="font-display text-2xl text-espresso-foreground">{block.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {block.items.map((item, i) => (
                  <li
                    key={`${item.label}-${i}`}
                    className="flex min-w-0 items-start gap-2 text-sm text-espresso-foreground/75"
                  >
                    <MaterialIcon name={item.icon} className="mt-0.5 text-[18px] text-brass" />
                    <span className="min-w-0">
                      <strong className="font-semibold text-espresso-foreground">
                        {item.label}
                      </strong>
                      {item.value ? ` ${item.value}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-espresso px-6 py-3 eyebrow text-espresso-foreground"
        >
          <MaterialIcon name="event" className="text-[18px]" />
          Book room
        </a>
      </div>
    </main>
  );
}
