import config from '../config';
// import fetch from './fetch';

export async function createCategory(name) {
  const result = await fetch(`${config.backend_url}/category/create`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json',
      'authorization': 'token token'
    },
    body: JSON.stringify(name)
  });

  console.log('what is result', result)

  if (result.ok) {
    const data = await result.json();
    return data;
  }

  throw new Error('something wrong with createCategory');
}

export async function listCategories() {
  return fetch(`${config.backend_url}/category/list`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    }
  }).then(res => {
    if (res.ok) {
      return res.json().then((data) => {
        return data;
      });
    } else {
      console.log("Looks like the response wasn't perfect, got status", res.status);
      return [];
    }
  });
}
