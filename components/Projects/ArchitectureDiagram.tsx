import { ArrowDown } from "lucide-react";
import type { ArchitectureLayer } from "@/data/projects";

interface ArchitectureDiagramProps {
  title: string;
  layers: ArchitectureLayer[];
}

/** Layered request flow, from the UI down to the database. */
export function ArchitectureDiagram({ title, layers }: ArchitectureDiagramProps) {
  return (
    <ol aria-label={`${title} architecture, from user interface to database`} className="flex flex-col">
      {layers.map((layer, index) => (
        <li key={layer.label} className="flex flex-col items-stretch">
          {index > 0 && (
            <ArrowDown aria-hidden="true" className="mx-auto my-1 size-3.5 text-subtle" />
          )}
          <div className="flex items-baseline justify-between gap-4 rounded-md border border-line bg-canvas/70 px-3.5 py-2.5">
            <span className="flex items-baseline gap-3">
              <span className="font-mono text-[0.7rem] text-subtle" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-ink">{layer.label}</span>
            </span>
            <span className="hidden text-right text-xs text-muted sm:block">{layer.detail}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
