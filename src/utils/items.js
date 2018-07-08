import config from '../config';
import fetch from './fetch';

export async function createItem({ file, title, description, category, foodOrigin, expiryDate, usedCondition }) {
  var data = new FormData();
  data.append('photo', file);
  data.append('title', title);
  data.append('description', description);
  data.append('category', category);
  data.append('foodOrigin', foodOrigin);
  data.append('expiryDate', expiryDate);
  data.append('usedCondition', usedCondition);
  const result = await fetch(`${config.backend_url}/item/create`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json',
      'authorization': 'token token'
    },
    body: data
  });

  console.log('what is result', result);

  if (result.ok) {
    const data = await result.json();
    return data;
  }

  throw new Error('something wrong with createItem');
}

export async function listItems() {
  return fetch(`${config.backend_url}/item/list`, {
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
