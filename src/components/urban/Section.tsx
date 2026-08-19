import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  tone = "light",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  tone?: "light" | "muted" | "dark";
  children: ReactNode;
}) {
  const toneClass =
    tone === "dark"
      ? "bg-espresso text-espresso-foreground"
      : tone === "muted"
        ? "bg-secondary text-foreground"
        : "bg-background text-foreground";

  return (
    <section id={id} className={`${toneClass} py-14 md:py-24`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {(eyebrow || title) && (
          <header className="mb-10 md:mb-14">
            {eyebrow && (
              <p className={`eyebrow ${tone === "dark" ? "text-brass" : "text-muted-foreground"}`}>
                {eyebrow}
              </p>
            )}
            {title && <h2 className="mt-2 font-display text-4xl md:text-5xl">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}