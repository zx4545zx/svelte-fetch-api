<script>
  import Fetch from "../../lib/fetch.js";
  import { user } from "../../lib/store.js";
  import { onMount } from "svelte";

  const [data, loading, error, getAll, post] = Fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  onMount(() => getAll());
</script>

<div class="container">
  <h1>Users</h1>
  {#if $loading === "Saving..."}
    <div class="message">{$loading}</div>
  {:else}
    <input
      type="text"
      name="name"
      id="name"
      bind:value={$user.name}
      placeholder="name"
    />
    <button class="buttonClass" on:click={() => post($user)}>
      Add New User
    </button>
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
  input {
    margin-top: 20px;
    padding: 10px;
    border-radius: 50px;
  }

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
