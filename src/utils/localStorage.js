export const getItemByKey = key => JSON.parse(localStorage.getItem(key));
export const setItemByKey = (key, value) => localStorage.setItem(key, JSON.stringify(value));