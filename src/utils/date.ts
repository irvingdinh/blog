import { SITE } from "../site";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export function formatDateYMD(date: Date, timeZone: string = SITE.timezone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((p) => p.type === "year")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const day = parts.find((p) => p.type === "day")?.value;

  if (year && month && day) return `${year}-${month}-${day}`;

  // Fallback (should never hit unless Intl fails)
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}


