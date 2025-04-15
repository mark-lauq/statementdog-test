/**
 * Get recent date string
 *
 * @param { year: number }
 * @returns `YYYY-MM-DD`
 */
export function getRecentDateString({ year }: { year: number }): string {
  const date = new Date();
  const pastYear = date.getFullYear() - year;

  return [
    pastYear,
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

/**
 * Format currency number to string with comma
 *
 * @param currency number
 * @returns string with comma
 */
export function formatCurrency(currency: number): string {
  return new Intl.NumberFormat("en-US").format(Number(currency.toFixed(2)));
}

/**
 * Format date string to different formats
 * 
 * @param dateString Date string in format "YYYY-MM-DD"
 * @param format Format type: "yyyy" | "yyyymm" | "yyyy/mm"
 * @returns Formatted date string
 * 
 * @example
 * formatDateString("2024-03-15", "yyyy") // "2024"
 * formatDateString("2024-03-15", "yyyymm") // "202403"
 * formatDateString("2024-03-15", "yyyy/mm") // "2024/03"
 */
export function formatDateString(
  dateString: string,
  format: "yyyy" | "yyyymm" | "yyyy/mm" = "yyyymm",
): string {
  const [yyyy, mm] = dateString.split("-");

  switch (format) {
    case "yyyy":
      return yyyy;
    case "yyyymm":
      return yyyy + mm;
    case "yyyy/mm":
      return `${yyyy}/${mm}`;
    default:
      return yyyy;
  }
}
