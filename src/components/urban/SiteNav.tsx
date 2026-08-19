import { useEffect, useState } from "react";
import { BOOKING_URL, navLinks } from "@/data/urban-living";

export function SiteNav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-espresso/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:px-10">
        <a href="#top" className="min-w-0">
          <span className="block truncate font-display text-lg tracking-[0.32em] text-espresso-foreground uppercase">
            Urban Living
          </span>
        </a>
        <nav className="flex shrink-0 items-center gap-6">
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="eyebrow text-espresso-foreground/75 transition-colors hover:text-brass"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden border border-brass px-5 py-2 eyebrow text-brass transition-colors hover:bg-brass hover:text-primary-foreground sm:block"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}