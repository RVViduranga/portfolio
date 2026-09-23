import { Cloud, Database, LayoutPanelTop, Server, type LucideIcon } from "lucide-react";

interface Layer {
  name: string;
  stack: string;
  icon: LucideIcon;
}

const layers: Layer[] = [
  { name: "Client", stack: "React · Next.js · TypeScript", icon: LayoutPanelTop },
  { name: "API", stack: "REST · Node.js / Express · Spring Boot", icon: Server },
  { name: "Data", stack: "MongoDB · PostgreSQL · MySQL", icon: Database },
  { name: "Delivery", stack: "Docker · GitHub Actions · AWS", icon: Cloud },
];

/**
 * Decorative overview of the layers I work across. Pure CSS animation (a
 * single travelling dot), hidden entirely for reduced-motion users.
 */
export function SystemVisual() {
  return (
    <figure className="relative overflow-hidden rounded-xl border border-line bg-surface/80 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-subtle">system-overview</span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="relative">
          {/* Vertical connector between the layers; cards are opaque so it only shows in the gaps. */}
          <div aria-hidden="true" className="absolute top-6 bottom-6 left-8 w-px overflow-hidden bg-line-strong">
            <span className="absolute inset-x-0 top-0 h-1/4 animate-flow bg-linear-to-b from-transparent via-accent to-transparent motion-reduce:hidden" />
          </div>

          <ol className="relative space-y-3">
            {layers.map(({ name, stack, icon: Icon }) => (
              <li
                key={name}
                className="flex items-center gap-4 rounded-lg border border-line/80 bg-elevated px-3.5 py-3"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-md border border-line-strong bg-canvas text-accent">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-ink">{name}</span>
                  <span className="block truncate font-mono text-xs text-subtle">{stack}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <pre
          aria-hidden="true"
          className="mt-5 overflow-hidden rounded-lg border border-line/80 bg-canvas/70 p-4 font-mono text-[0.75rem] leading-relaxed text-muted"
        >
          <code>
            <span className="text-accent">export async function</span>{" "}
            <span className="text-ink">getJobs</span>(query: <span className="text-success">JobQuery</span>) {"{"}
            {"\n  "}
            <span className="text-accent">return</span> api.get&lt;<span className="text-success">Job</span>[]&gt;(
            <span className="text-warning">&quot;/jobs&quot;</span>, {"{ params: query }"});
            {"\n}"}
          </code>
        </pre>
      </div>
      <figcaption className="sr-only">
        Overview of the layers I work across: client, API, data and delivery.
      </figcaption>
    </figure>
  );
}
