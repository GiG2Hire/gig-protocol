export function getTime(): string {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    return formattedDate;
}