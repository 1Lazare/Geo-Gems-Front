export const isNullish = (obj: any) => {
    return Object.values(obj).every((value) => {
        return value === null || typeof value === 'undefined';
    });
};
