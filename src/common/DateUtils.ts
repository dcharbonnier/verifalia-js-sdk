// Adapted from https://stackoverflow.com/a/23593099/904178

export function formatDateToIso8601(date: Date) {
    const month = '' + (date.getMonth() + 1);
    const day = '' + date.getDate();
    const year = date.getFullYear();

    return [
        year,
        month.length < 2 ? '0' + month : month,
        day.length < 2 ? '0' + day : day
    ].join('-');
}