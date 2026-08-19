import { useCallback, useEffect, useState } from "react";
import { slides } from "@/data/urban-living";
import { MaterialIcon } from "./MaterialIcon";

export function Hero() {
  const [index, setIndex] = useState(0);
  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go]);

  const active = slides[index] ?? slides[0]!;

  return (
    <section id="top" className="relative h-[85svh] min-h-[520px] w-full overflow-hidden bg-espresso">
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            loading={i === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/45 to-espresso/10" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="max-w-xl">
            <p className="font-display text-xl italic text-espresso-foreground/85 md:text-2xl">
              {active.lead}
            </p>
            <h1 className="mt-1 font-display text-5xl leading-[1.05] text-espresso-foreground md:text-7xl">
              {active.title}
            </h1>
            <p className="mt-4 text-sm text-espresso-foreground/80 md:text-base">
              {active.sub}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 mx-auto flex max-w-[1200px] items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              className={`h-[2px] transition-all ${
                i === index ? "w-10 bg-brass" : "w-5 bg-espresso-foreground/40"
              }`}
            />
          ))}
          <span className="ml-3 eyebrow text-espresso-foreground/70">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="grid h-10 w-10 place-items-center border border-espresso-foreground/30 text-espresso-foreground transition-colors hover:border-brass hover:text-brass"
          >
            <MaterialIcon name="arrow_left_alt" className="text-[20px]" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next slide"
            className="grid h-10 w-10 place-items-center border border-espresso-foreground/30 text-espresso-foreground transition-colors hover:border-brass hover:text-brass"
          >
            <MaterialIcon name="arrow_right_alt" className="text-[20px]" />
          </button>
        </div>
      </div>
    </section>
  );
}