import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
  title: "KOHO Visual — Architectural Visualization Studio",
  description:
    "High-end CGI renders and animations for developers and architects worldwide.",
};

export default function Home() {
  return (
    <>
      <section
        style={{
          paddingTop: "clamp(7rem, 14vw, 11rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          paddingInline: "clamp(1.25rem, 5vw, 3rem)",
          maxWidth: "72rem",
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
            maxWidth: "18ch",
          }}
        >
          Architectural
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
            Visualization
          </span>
        </h1>
        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "clamp(0.9rem, 1.2vw, 1.0625rem)",
            color: "oklch(58% 0.008 270)",
            maxWidth: "42ch",
            lineHeight: 1.65,
          }}
        >
          High-end CGI renders and animations for developers and architects
          worldwide.
        </p>
      </section>

      <section
        aria-label="Portfolio"
        style={{
          paddingInline: "clamp(1.25rem, 5vw, 3rem)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
          maxWidth: "72rem",
          margin: "0 auto",
        }}
      >
        {projectsData.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              color: "oklch(48% 0.008 270)",
            }}
          >
            <p style={{ fontSize: "0.9375rem", marginBottom: "1rem" }}>
              No projects yet. Add your first project by editing{" "}
              <code
                style={{
                  background: "oklch(16% 0.006 270)",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "4px",
                  fontFamily: "monospace",
                }}
              >
                src/data/projects.json
              </code>
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))",
              gap: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                priority={index < 2}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

type Project = (typeof projectsData)[number];

function ProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority: boolean;
}) {
  return (
    <Link
      href={`/work/${project.id}`}
      aria-label={`View project: ${project.title}`}
      className="project-card"
    >
      <div className="card-img-wrap">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="card-img"
          priority={priority}
        />
        <div className="card-overlay" aria-hidden="true" />
      </div>
      <div
        style={{
          padding: "1rem 1.25rem 1.25rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 600,
              fontSize: "0.9375rem",
              letterSpacing: "0.02em",
              color: "oklch(97% 0.004 270)",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              marginTop: "0.3rem",
              fontSize: "0.75rem",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "oklch(48% 0.008 270)",
            }}
          >
            {project.category}
          </p>
        </div>
        <span
          style={{
            fontSize: "0.75rem",
            color: "oklch(40% 0.008 270)",
            whiteSpace: "nowrap",
            paddingTop: "0.1rem",
          }}
        >
          {project.year}
        </span>
      </div>
      <style>{`
        .project-card {
          display: block;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          background: oklch(16% 0.006 270);
          border: 1px solid oklch(24% 0.008 270);
          text-decoration: none;
        }
        .card-img-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: oklch(20% 0.006 270);
        }
        .card-img {
          object-fit: cover;
          transition: transform 400ms ease;
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(17,17,19,0.85) 0%, rgba(17,17,19,0) 55%);
          opacity: 0;
          transition: opacity 300ms ease;
        }
        .project-card:hover .card-img { transform: scale(1.04); }
        .project-card:hover .card-overlay { opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .card-img, .card-overlay { transition: none !important; }
        }
      `}</style>
    </Link>
  );
}
