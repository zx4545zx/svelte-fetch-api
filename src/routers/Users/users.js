import { writable } from 'svelte/store';
import axios from 'axios';

export default function () {
  const loading = writable(undefined)
	const error = writable(undefined)
	const data = writable([]);

  const url = "https://jsonplaceholder.typicode.com/users"
	
	async function get() {
    loading.set(true)
		error.set(false)

		try {
			const res = await axios.get(url)
			data.set(await res.data)

      console.log('get: ', res.data)
		} catch(e) {
      console.log(e);
      error.set(e.message);
		}

    loading.set(false)
	}

  async function post(user = {}) {
    loading.set('Saving...')
		error.set(false)

    try {
      const res = await axios.post(url, user)
      console.log('save: ', res.data)

      if (res.data) await get()
    } catch (e) {
      console.log(e);
      error.set(e.message);
    }

    loading.set(false)
  }
	
	return [ data, loading, error, get, post]
}