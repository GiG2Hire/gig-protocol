export function getMonthsTillTodayFromDate(currentDate: Date) {
  const years: number = currentDate.getFullYear() - new Date().getFullYear();
  const month: number = currentDate.getMonth();
  return years * 12 + month;
}
