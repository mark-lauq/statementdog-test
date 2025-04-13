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
 * Format revenue number to string with comma
 *
 * @param revenue number
 * @returns string with comma
 */
export function formatRevenue(revenue: number): string {
  return new Intl.NumberFormat("en-US").format(Number(revenue.toFixed(2)));
}

/**
 * Format date string to YYYYMM
 *
 * @param dateString `YYYY-MM-DD`
 * @returns `YYYYMM`
 */

export function formatDateString(dateString: string): string {
  const [yyyy, mm] = dateString.split("-");

  return yyyy + mm;
}
