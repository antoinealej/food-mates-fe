import config from '../config';
import fetch from './fetch';

export async function createFoodOrigin(name) {
  const result = await fetch(`${config.backend_url}/food-origin/create`, {
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

  throw new Error('something wrong with createFoodOrigin');
}

export async function listFoodOrigin() {
  const result = await fetch(`${config.backend_url}/food-origin/list`, {
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

  throw new Error('something wrong with listFoodOrigin');
}
