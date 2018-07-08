export function storeSession(name, item) {
  return localStorage.setItem(name, item);
}

export function getSession(name) {
  return localStorage.getItem(name);
}