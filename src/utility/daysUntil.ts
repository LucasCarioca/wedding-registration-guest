export const daysUntil = (text: string) => {
    const weddingDate = new Date('09/13/2023');
    const todaysDate = new Date();
    const daysTo = weddingDate.getTime() - todaysDate.getTime();
    return `${Math.trunc(daysTo / (1000 * 3600 * 24))} ${text}`;
};