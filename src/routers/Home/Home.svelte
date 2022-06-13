<script>
  import Counter from "../../lib/Counter.svelte";
  import logo from "../../assets/svelte.png";
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
