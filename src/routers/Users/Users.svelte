<script>
  // @ts-nocheck
  import Users from "./users.js";
  import { onMount } from "svelte";
  import users from "./users.js";

  const [data, get, post] = Users();
  const mock_data = {
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
  };

  onMount(() => get());
  const save = async () => await post(mock_data);
</script>

<div class="container">
  <h1>Users</h1>
  <button class="buttonClass" on:click={() => save()}>Add User</button>
  <ul>
    {#each $data as u, i}
      <li>{i + 1}. {u.name}</li>
    {/each}
  </ul>
</div>

<style>
  .buttonClass {
    margin: 20px 0;
    width: 140px;
    height: 50px;
    border: none;
    color: #fff;
    border-radius: 3px;
    box-shadow: inset 0px -3px 7px 0px #29bbff;
    text-shadow: inset 0px 1px 0px #263666;
    background: linear-gradient(#2dabf9, #0688fa);
  }

  .buttonClass:hover {
    background: linear-gradient(#0688fa, #2dabf9);
  }

  ul {
    background-color: aquamarine;
  }

  li {
    list-style: none;
  }
</style>
