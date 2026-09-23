import { ImageIcon } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/links";

interface ProjectPreviewProps {
  project: Project;
  sizes: string;
  className?: string;
}

/**
 * Shows the project's screenshot when one is provided in data/projects.ts,
 * otherwise a clearly labelled placeholder (never a fake screenshot).
 */
export function ProjectPreview({ project, sizes, className }: ProjectPreviewProps) {
  const frame = cn(
    "relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-canvas",
    className,
  );

  if (project.image) {
    return (
      <div className={frame}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes={sizes}
          className="size-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${project.title} preview placeholder, screenshot not yet added`}
      className={cn(frame, "grid place-items-center")}
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <span className="grid size-11 place-items-center rounded-lg border border-line-strong bg-elevated text-subtle">
          <ImageIcon className="size-5" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium text-muted">Project Preview</span>
        <span className="font-mono text-xs text-subtle">Screenshot coming soon</span>
      </div>
    </div>
  );
}
