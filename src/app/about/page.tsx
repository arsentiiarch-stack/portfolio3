import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "KOHO Visual is an architectural visualization studio creating high-end CGI renders and animations for developers and architects worldwide.",
};

export default function AboutPage() {
  return (
    <main
      style={{
        paddingTop: "clamp(7rem, 14vw, 11rem)",
        paddingInline: "clamp(1.25rem, 5vw, 3rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
        maxWidth: "64rem",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "oklch(97% 0.004 270)",
          marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          maxWidth: "16ch",
        }}
      >
        We make
        <br />
        <span
          style={{
            background:
              "linear-gradient(135deg, oklch(73% 0.18 65), oklch(52% 0.22 25), oklch(45% 0.22 305))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          spaces real
        </span>
        <br />
        before they are.
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 26rem), 1fr))",
          gap: "clamp(2rem, 4vw, 4rem)",
          alignItems: "start",
        }}
      >
        <div>
          <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.7, color: "oklch(72% 0.008 270)", marginBottom: "1.25rem" }}>
            KOHO Visual is an architectural visualization studio working with
            developers, architects, and interior designers worldwide. We
            specialise in high-end CGI renders, walkthrough animations, and
            immersive visual content that communicates the full potential of a
            project — before construction begins.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.7, color: "oklch(72% 0.008 270)" }}>
            Every project is treated as a collaboration. We work closely with
            clients from early-stage concepts through final delivery, keeping
            craft and clarity at the centre of every frame.
          </p>
        </div>

        <div>
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(48% 0.008 270)", marginBottom: "1.25rem" }}>
            Services
          </h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Exterior CGI renders",
              "Interior visualization",
              "Aerial & bird's-eye views",
              "Walkthrough animations",
              "Virtual staging",
              "360° panoramas",
            ].map((service) => (
              <li key={service} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.9375rem", color: "oklch(82% 0.006 270)" }}>
                <span aria-hidden="true" style={{ display: "inline-block", width: "4px", height: "4px", borderRadius: "50%", background: "linear-gradient(135deg, oklch(73% 0.18 65), oklch(45% 0.22 305))", flexShrink: 0 }} />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)", paddingTop: "clamp(2rem, 4vw, 3rem)", borderTop: "1px solid oklch(24% 0.008 270)" }}>
        <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", color: "oklch(58% 0.008 270)", marginBottom: "1.5rem" }}>
          Have a project in mind?
        </p>
        <Link href="/contact" className="about-cta">
          Get in touch →
        </Link>
      </div>

      <style>{`
        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-syne);
          font-weight: 600;
          font-size: 0.9375rem;
          letter-spacing: 0.06em;
          color: oklch(97% 0.004 270);
          text-decoration: none;
          transition: opacity 180ms ease;
        }
        .about-cta:hover { opacity: 0.6; }
      `}</style>
    </main>
  );
}
