export const saveToLocalStorage = (name, itemToSave) => {
  return localStorage.setItem(name, itemToSave);
};
export const saveJsonItemToLocalStorage = (name, itemToSave) => {
  return localStorage.setItem(name, JSON.stringify(itemToSave));
};
export const getFromLocalStorage = (name) => {
  return localStorage.getItem(name);
};
export const getJsonItemFromLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name));
};
export const clearLocalStorage = () => {
  return window.localStorage.clear();
};
export function accumulate(data) {
  let arr = [];
  data.map((item) => {
    return arr.push(Number(item.unit));
  });
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
