import { writable } from 'svelte/store';
import axios from 'axios';

export default function (url = null) {
  const loading = writable()
	const error = writable()
	const data = writable([]);
	
	async function getAll() {
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

  async function post(value = {}) {
    loading.set('Saving...')
		error.set(false)

    try {
      const res = await axios.post(url, value)
      console.log('save: ', res.data)

      if (res.data) await getAll()
    } catch (e) {
      console.log(e);
      error.set(e.message);
    }

    loading.set(false)
  }
	
	return [ data, loading, error, getAll, post]
}