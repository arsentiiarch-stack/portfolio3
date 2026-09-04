import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with KOHO Visual to discuss your architectural visualization project.",
};

// ─── Contact configuration ────────────────────────────────────────────────────
// Add or remove entries here to show / hide contact methods.
// To enable phone later, uncomment the phone block below.
const contacts = [
  {
    label: "Email",
    value: "hello@koho.visual",
    href: "mailto:hello@koho.visual",
    external: false,
  },
  {
    label: "Instagram",
    value: "@koho.visual",
    href: "https://www.instagram.com/koho.visual/",
    external: true,
  },
  {
    label: "Behance",
    value: "behance.net/kohovisual",
    href: "https://www.behance.net/kohovisual",
    external: true,
  },
  // Phone — uncomment when ready:
  // {
  //   label: "Phone",
  //   value: "+1 000 000 0000",
  //   href: "tel:+10000000000",
  //   external: false,
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
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
      {/* Heading */}
      <h1
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "oklch(97% 0.004 270)",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          maxWidth: "16ch",
        }}
      >
        Let&apos;s discuss
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
          your project
        </span>
      </h1>

      {/* Contact list */}
      <ul
        role="list"
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        {contacts.map(({ label, value, href, external }, i) => (
          <li
            key={label}
            style={{
              borderTop:
                i === 0 ? "1px solid oklch(24% 0.008 270)" : undefined,
              borderBottom: "1px solid oklch(24% 0.008 270)",
            }}
          >
            <Link
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.5rem 0",
                textDecoration: "none",
                transition: "opacity 180ms ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
              }
              aria-label={`${label}: ${value}`}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "oklch(48% 0.008 270)",
                  minWidth: "6rem",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 500,
                  fontSize: "clamp(1rem, 2vw, 1.375rem)",
                  color: "oklch(97% 0.004 270)",
                  flex: 1,
                }}
              >
                {value}
              </span>
              <span
                aria-hidden="true"
                style={{
                  fontSize: "1.125rem",
                  color: "oklch(48% 0.008 270)",
                }}
              >
                ↗
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Note */}
      <p
        style={{
          marginTop: "clamp(2.5rem, 5vw, 4rem)",
          fontSize: "0.9375rem",
          color: "oklch(48% 0.008 270)",
          lineHeight: 1.65,
          maxWidth: "44ch",
        }}
      >
        We typically respond within one business day. For project inquiries,
        feel free to share reference images or a brief description of your
        vision.
      </p>
    </main>
  );
}
