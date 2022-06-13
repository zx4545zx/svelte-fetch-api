import axios from 'axios';
import { writable } from 'svelte/store';

export default function () {
	const data = writable([]);
	
	async function get() {
		try {
			const res = await axios.get("https://jsonplaceholder.typicode.com/users")
			data.set(await res.data)

      console.log('get: ', res.data)
		} catch(e) {
      console.log(e);
		}
	}

  async function post(user) {
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/users", user)
      console.log('save: ', res.data)

      if (res.data) await get()
    } catch (e) {
      console.log(e);
    }
  }
	
	return [ data, get, post]
}