<script>
  import { Router, Link } from "svelte-navigator";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="users">Users</Link>
  </nav>

  <slot />

  <footer>Created by Nattapon.</footer>
</Router>

<style>
  nav {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    background-color: cadetblue;
  }

  footer {
    text-align: center;
    width: 100%;
    padding: 10px;
    background-color: darkgray;
  }
</style>
