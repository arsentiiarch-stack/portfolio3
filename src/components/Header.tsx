"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background:
          "linear-gradient(to bottom, rgba(17,17,19,0.95) 0%, rgba(17,17,19,0) 100%)",
      }}
    >
      <Link
        href="/"
        aria-label="KOHO Visual — Home"
        style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            background: "linear-gradient(135deg, oklch(73% 0.18 65), oklch(52% 0.22 25), oklch(45% 0.22 305))",
            padding: "2px",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "oklch(12% 0.005 270)",
              fontSize: "0.75rem",
              fontWeight: 700,
              fontFamily: "var(--font-syne)",
              color: "oklch(72% 0.006 270)",
              letterSpacing: "0.05em",
            }}
          >
            K
          </span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 600,
            fontSize: "0.9375rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "oklch(97% 0.004 270)",
          }}
        >
          KOHO
        </span>
      </Link>

      <nav aria-label="Main navigation">
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={active ? "nav-link nav-link--active" : "nav-link"}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.8125rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: active ? "oklch(97% 0.004 270)" : "oklch(58% 0.008 270)",
                    textDecoration: "none",
                    transition: "color 180ms ease",
                    paddingBottom: "2px",
                    borderBottom: active ? "1px solid oklch(73% 0.18 65)" : "1px solid transparent",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <style>{`
        .nav-link:hover { color: oklch(97% 0.004 270) !important; }
      `}</style>
    </header>
  );
}
