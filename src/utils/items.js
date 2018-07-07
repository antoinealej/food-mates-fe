import config from '../config';
import fetch from './fetch';

export async function createItem(item) {
  const result = await fetch(`${config.backend_url}/item/create`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json',
      'authorization': 'token token'
    },
    body: JSON.stringify(items)
  });

  console.log('what is result', result)

  if (result.ok) {
    const data = await result.json();
    return data;
  }

  throw new Error('something wrong with createItem');
}

export async function listItems() {
  const result = await fetch(`${config.backend_url}/item/list`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json',
      'authorization': 'token token'
    }
  });

  if (result.ok) {
    const data = await result.json();
    return data;
  }

  throw new Error('something wrong with listItems');
}
