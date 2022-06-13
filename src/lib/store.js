import { writable } from 'svelte/store';

export const user = writable({
  name: "alf",
  username: "test",
  email: "test@test.com",
  address: {
    street: "test",
    suite: "test",
    city: "test",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
});
