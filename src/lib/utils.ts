export const addZero = (num: number) => (num < 10 ? `0${num}`: `${num}`);

export const getTime = (dateToConvert: string):string => {
    const date = new Date(dateToConvert);
    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
}