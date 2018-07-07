import config from '../config';
import fetch from './fetch';

export async function login(username, password) {
  console.log("what is username", username)
  const result = await fetch(`${config.backend_url}/auth/login`, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      username,
      password
    })
  });

  console.log('what is result', result)

  if (result.ok) {
    const data = await result.json();
    return data;
  }

  throw new Error('something wrong with login');
}

export async function register(username, password) {
  console.log('in register, password is', password)
  const result = await fetch(`${config.backend_url}/auth/register`, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      username,
      password
    })
  });

  if (result.ok) {
    const data = await result.json();
    return data;
  }

  throw new Error('something wrong with register');
}
