import type { ReactNode } from "react";
import { cn, isExternalHref, isUsableHref } from "@/lib/links";

type Variant = "primary" | "secondary" | "ghost" | "icon";

interface LinkButtonProps {
  href: string | undefined;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Accessible name, required for icon-only buttons. */
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "h-11 px-5 bg-accent-solid text-white hover:bg-accent-solid-hover",
  secondary:
    "h-11 px-5 border border-line-strong bg-surface/60 text-ink hover:border-subtle hover:bg-elevated",
  ghost: "h-9 px-3 text-muted hover:bg-elevated hover:text-ink",
  icon: "size-10 border border-line text-muted hover:border-line-strong hover:bg-elevated hover:text-ink",
};

/**
 * Anchor styled as a button. External links open in a new tab; hrefs that
 * still hold a placeholder render as a disabled, non-interactive element so
 * the site never ships broken links.
 */
export function LinkButton({
  href,
  children,
  variant = "secondary",
  className,
  ariaLabel,
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (!isUsableHref(href)) {
    return (
      <span
        role="link"
        aria-disabled="true"
        aria-label={ariaLabel ? `${ariaLabel} (not yet available)` : undefined}
        title="Link not yet available"
        className={cn(classes, "cursor-not-allowed opacity-45 hover:bg-transparent")}
      >
        {children}
        {!ariaLabel && <span className="sr-only"> (not yet available)</span>}
      </span>
    );
  }

  const external = isExternalHref(href);

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={classes}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      {external && !ariaLabel && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
