/** @format */

export const useStorage = () => {
  const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getFromStorage = (key) => {
    const storedItem = localStorage.getItem(key);
    if (storedItem) {
      return JSON.parse(storedItem);
    } else {
      return null;
    }
  };

  return { saveToStorage, getFromStorage };
};
