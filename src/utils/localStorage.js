export const getItemByKey = key => JSON.parse(localStorage.getItem(key));
export const setItemByKey = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const deletItemByKey = (key, value) => localStorage.removeItem(key, JSON.stringify(value));