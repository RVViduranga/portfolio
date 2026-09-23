const USABLE_HREF = /^(https?:\/\/|mailto:[^@\s]+@|#|\/)/;

/**
 * False when an href is missing or still holds a placeholder value such as
 * `GITHUB_URL_HERE` or `mailto:EMAIL_HERE`, so it must not be rendered as a
 * working link.
 */
export function isUsableHref(href: string | undefined): href is string {
  return !!href && USABLE_HREF.test(href);
}

export function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
