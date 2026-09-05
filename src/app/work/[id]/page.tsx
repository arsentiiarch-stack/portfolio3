import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projectsData.find((p) => p.id === params.id);
  if (!project) notFound();

  const idx = projectsData.findIndex((p) => p.id === params.id);
  const next =
    projectsData.length > 1
      ? projectsData[(idx + 1) % projectsData.length]
      : null;

  return (
    <article style={{ paddingTop: "6rem" }}>
      <div
        style={{
          paddingInline: "clamp(1.25rem, 5vw, 3rem)",
          paddingBottom: "2rem",
          maxWidth: "72rem",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.8125rem",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "oklch(48% 0.008 270)",
          }}
        >
          ← All work
        </Link>
      </div>

      <header
        style={{
          paddingInline: "clamp(1.25rem, 5vw, 3rem)",
          paddingBottom: "clamp(2rem, 4vw, 3rem)",
          maxWidth: "72rem",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "oklch(48% 0.008 270)",
              marginBottom: "0.5rem",
            }}
          >
            {project.category} — {project.year}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "oklch(97% 0.004 270)",
            }}
          >
            {project.title}
          </h1>
        </div>
        <p
          style={{
            maxWidth: "40ch",
            fontSize: "0.9375rem",
            color: "oklch(58% 0.008 270)",
            lineHeight: 1.65,
          }}
        >
          {project.description}
        </p>
      </header>

      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          background: "oklch(16% 0.006 270)",
          marginBottom: "clamp(0.75rem, 1.5vw, 1.25rem)",
        }}
      >
        <Image
          src={project.cover}
          alt={`${project.title} — cover`}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {project.images.length > 0 && (
        <section
          aria-label="Project gallery"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 28rem), 1fr))",
            gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
            paddingInline: "clamp(0.75rem, 1.5vw, 1.25rem)",
            paddingBottom: "clamp(4rem, 8vw, 7rem)",
          }}
        >
          {project.images.map((src, i) => (
            <div
              key={src}
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                background: "oklch(16% 0.006 270)",
                overflow: "hidden",
                borderRadius: "6px",
              }}
            >
              <Image
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </section>
      )}

      {next && (
        <div
          style={{
            borderTop: "1px solid oklch(24% 0.008 270)",
            padding: "clamp(2rem, 4vw, 3rem) clamp(1.25rem, 5vw, 3rem)",
            maxWidth: "72rem",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "oklch(40% 0.008 270)",
              marginBottom: "0.5rem",
            }}
          >
            Next project
          </p>
          <Link
            href={`/work/${next.id}`}
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 600,
              fontSize: "clamp(1.25rem, 3vw, 2rem)",
              color: "oklch(97% 0.004 270)",
              display: "inline-block",
            }}
          >
            {next.title} →
          </Link>
        </div>
      )}
    </article>
  );
}
