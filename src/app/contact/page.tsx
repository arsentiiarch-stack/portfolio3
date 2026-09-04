import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with KOHO Visual to discuss your architectural visualization project.",
};

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
];

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

      <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {contacts.map(({ label, value, href, external }, i) => (
          <li
            key={label}
            style={{
              borderTop: i === 0 ? "1px solid oklch(24% 0.008 270)" : undefined,
              borderBottom: "1px solid oklch(24% 0.008 270)",
            }}
          >
            <Link
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="contact-row"
              aria-label={`${label}: ${value}`}
            >
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
              <span aria-hidden="true" className="contact-arrow">↗</span>
            </Link>
          </li>
        ))}
      </ul>

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

      <style>{`
        .contact-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.5rem 0;
          text-decoration: none;
          transition: opacity 180ms ease;
        }
        .contact-row:hover { opacity: 0.6; }
        .contact-label {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: oklch(48% 0.008 270);
          min-width: 6rem;
        }
        .contact-value {
          font-family: var(--font-syne);
          font-weight: 500;
          font-size: clamp(1rem, 2vw, 1.375rem);
          color: oklch(97% 0.004 270);
          flex: 1;
        }
        .contact-arrow {
          font-size: 1.125rem;
          color: oklch(48% 0.008 270);
        }
      `}</style>
    </main>
  );
}
