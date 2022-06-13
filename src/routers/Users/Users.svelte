<script>
  import Users from "./users.js";
  import { onMount } from "svelte";

  const [data, loading, error, get, post] = Users();
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
  const Save = async () => await post(mock_data);
</script>

<div class="container">
  <h1>Users</h1>
  {#if $loading === "Saving..."}
    <div class="message">{$loading}</div>
  {:else}
    <button class="buttonClass" on:click={() => Save()}>Add New User</button>
  {/if}

  {#if $loading && typeof $loading !== "string"}
    <div class="message">Loading...</div>
  {:else if $error}
    <div class="error">{$error}</div>
  {:else}
    <ul>
      {#each $data as u, i}
        <li>{i + 1}. {u.name}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .buttonClass {
    margin: 20px 0;
    padding: 10px;
    border: none;
    border-radius: 50px;
    background-color: aquamarine;
    color: gray;
    font-weight: 600;
    cursor: pointer;
  }
  .buttonClass:hover {
    background-color: cadetblue;
    color: lavender;
  }

  .message {
    margin: 20px 0;
    color: gray;
  }
  .error {
    color: orangered;
  }

  ul {
    padding: 10px;
    border-radius: 10px;
    background-color: aquamarine;
  }
</style>
