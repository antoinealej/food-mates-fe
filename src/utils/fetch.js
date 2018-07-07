export default function fetch(url, options = {}) {
  const addedOptions = {};

  if (url[0] === '/') {
    addedOptions.credentials = 'same-origin';
  }

  const headers = options.headers || {};
  if (options.method && (options.method.toUpperCase() === 'POST' || options.method.toUpperCase() === 'PUT')) {
    headers['Content-Type'] = 'application/json';
  }

  const fetcher = window.fetch || global.fetch;

  return fetcher(url, {
    ...options,
    headers,
    ...addedOptions
  })
}
