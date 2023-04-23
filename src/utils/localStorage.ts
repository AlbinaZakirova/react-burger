

export const getItemByKey = (key: string): any => JSON.parse(localStorage.getItem(key)!);
export const setItemByKey = (key: string, value: any): void => localStorage.setItem(key, JSON.stringify(value));
export const deleteItemByKey = (key: string): void => localStorage.removeItem(key);