<script>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('onMount');

		return () => {
			console.log('destroyed');
		};
	});
</script>

<p>Child</p>
