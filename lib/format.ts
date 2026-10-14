export function formatDate(value: string): string {
  if (!value) return "";

  const normalized = value.trim();

  if (normalized.toLowerCase() === "present") {
    return "Present";
  }

  return normalized.replace(/-(\d{2})$/, ".$1");
}
