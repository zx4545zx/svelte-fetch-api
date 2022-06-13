<script>
  import { Route } from "svelte-navigator";

  import Home from "./routers/Home/Home.svelte";
  import Users from "./routers/Users/Users.svelte";
</script>

<Route path="/" component={Home} />
<Route path="/users" component={Users} />
