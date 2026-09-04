import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main
      style={{
        paddingTop: "clamp(7rem, 14vw, 11rem)",
        paddingInline: "clamp(1.25rem, 5vw, 3rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
        maxWidth: "64rem",
        margin: "0 auto",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: "clamp(4rem, 12vw, 9rem)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          background:
            "linear-gradient(135deg, oklch(73% 0.18 65), oklch(52% 0.22 25), oklch(45% 0.22 305))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "1.5rem",
        }}
        aria-hidden="true"
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 600,
          fontSize: "clamp(1.25rem, 3vw, 2rem)",
          color: "oklch(97% 0.004 270)",
          marginBottom: "1rem",
          letterSpacing: "-0.01em",
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontSize: "0.9375rem",
          color: "oklch(48% 0.008 270)",
          marginBottom: "2.5rem",
          maxWidth: "36ch",
          lineHeight: 1.65,
        }}
      >
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          fontFamily: "var(--font-syne)",
          fontWeight: 600,
          fontSize: "0.9375rem",
          letterSpacing: "0.06em",
          color: "oklch(97% 0.004 270)",
          textDecoration: "none",
        }}
      >
        ← Back to work
      </a>
    </main>
  );
}
