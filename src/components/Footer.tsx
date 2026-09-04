"use client";

import Link from "next/link";

// Contact links — add/remove items here to show or hide them in the footer.
// To add a phone number later, uncomment the phone entry below.
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
  // Phone — uncomment when ready:
  // {
  //   label: "Phone",
  //   href: "tel:+10000000000",
  //   external: false,
  // },
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
      {/* Brand */}
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

      {/* Contact links */}
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
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.06em",
                  color: "oklch(58% 0.008 270)",
                  textDecoration: "none",
                  transition: "color 180ms cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "oklch(97% 0.004 270)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "oklch(58% 0.008 270)")
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
