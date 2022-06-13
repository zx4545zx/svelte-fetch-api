<script>
  import logo from "../../assets/svelte.png";
  import Counter from "./Counter.svelte";
</script>

<div class="container">
  <h1>Home</h1>
  <img src={logo} alt="svelte" />

  <Counter />
</div>

<style>
  img {
    width: 150px;
  }
</style>
