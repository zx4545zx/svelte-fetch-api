<script>
  import Layout from "./__Layout.svelte";
  import Router from "./__Router.svelte";
</script>

<Layout>
  <Router />
</Layout>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(.container) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin: 0 auto;
    background-color: beige;
  }
</style>
