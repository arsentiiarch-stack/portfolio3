import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        paddingInline: "clamp(1.25rem, 5vw, 3rem)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: "clamp(4rem, 12vw, 8rem)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          background:
            "linear-gradient(135deg, oklch(73% 0.18 65), oklch(52% 0.22 25), oklch(45% 0.22 305))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </p>
      <p
        style={{
          fontSize: "1rem",
          color: "oklch(58% 0.008 270)",
          maxWidth: "30ch",
          lineHeight: 1.6,
        }}
      >
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 600,
          fontSize: "0.9375rem",
          letterSpacing: "0.06em",
          color: "oklch(97% 0.004 270)",
        }}
      >
        ← Back to work
      </Link>
    </main>
  );
}
