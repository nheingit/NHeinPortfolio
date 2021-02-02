<script>
	import {Route} from 'tinro'; 
	import HomeRouteView from "./HomeRouteView.svelte";
	import Tailwindcss from './Tailwindcss.svelte';
	import AboutRouteView from "./AboutRouteView.svelte";
</script>

		<Tailwindcss/>
		<Route path='/'>
			<HomeRouteView/>
		</Route>
		<Route path='/about'>
			<AboutRouteView/>
		</Route>








