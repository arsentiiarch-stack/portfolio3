"use client";

import Link from "next/link";

const contactLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/koho.visual/",
    external: true,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/kohovisual",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:hello@koho.visual",
    external: false,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "3rem 2rem",
        borderTop: "1px solid oklch(24% 0.008 270)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 600,
          fontSize: "0.8125rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "oklch(48% 0.008 270)",
        }}
      >
        © {year} KOHO Visual
      </span>

      <nav aria-label="Contact and social links">
        <ul
          style={{
            display: "flex",
            gap: "1.75rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            flexWrap: "wrap",
          }}
        >
          {contactLinks.map(({ label, href, external }) => (
            <li key={label}>
              <Link
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="footer-link"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <style>{`
        .footer-link {
          font-size: 0.8125rem;
          letter-spacing: 0.06em;
          color: oklch(58% 0.008 270);
          text-decoration: none;
          transition: color 180ms ease;
        }
        .footer-link:hover {
          color: oklch(97% 0.004 270);
        }
      `}</style>
    </footer>
  );
}
