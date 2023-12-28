function isClient() {
  return typeof window !== "undefined";
}

const save = (key: string, val: string) => {
  isClient() && localStorage.setItem(key, val);
};

const load = (key: string) => {
  return isClient() && localStorage.getItem(key);
};

const saveString = (key: string, val: any) => {
  const str = JSON.stringify(val);
  isClient() && localStorage.setItem(key, str);
};

export { save, load, saveString };
