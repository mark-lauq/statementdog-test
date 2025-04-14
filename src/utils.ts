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
 * Format date string to YYYYMM
 *
 * @param dateString `YYYY-MM-DD`
 * @returns `YYYYMM`
 */
export function formatDateString(dateString: string): string {
  return dateString.replace("-", "").slice(0, 6);
}
