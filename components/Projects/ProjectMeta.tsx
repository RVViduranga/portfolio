import { ArrowUpRight } from "lucide-react";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { LinkButton } from "@/components/ui/LinkButton";
import type { Project, ProjectStatus } from "@/data/projects";
import { cn, isUsableHref } from "@/lib/links";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "border-success/30 bg-success/10 text-success",
  Completed: "border-success/30 bg-success/10 text-success",
  "In Development": "border-warning/30 bg-warning/10 text-warning",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status],
      )}
    >
      {status}
    </span>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  const { liveUrl, githubUrl } = project;
  if (!isUsableHref(liveUrl) && !isUsableHref(githubUrl)) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {isUsableHref(liveUrl) && (
        <LinkButton href={liveUrl} variant="primary">
          Visit Site
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </LinkButton>
      )}
      {isUsableHref(githubUrl) && (
        <LinkButton href={githubUrl} variant="secondary">
          <SocialIcon kind="github" />
          GitHub
        </LinkButton>
      )}
    </div>
  );
}
