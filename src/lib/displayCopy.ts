/** Strip ASCII hyphens from user-visible copy (URLs, slugs, and paths stay unchanged). */
export function withoutHyphens(text: string): string {
  return text.replace(/-/g, " ");
}
