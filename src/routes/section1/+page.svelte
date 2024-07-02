<script>
	import RandomImage from '$lib/components/RandomImage.svelte';

	const name = 'Woojun';
	const htmlString = 'This is <strong>HTML!</strong>';
</script>

<h1>Hello, {name}!</h1>
<RandomImage />
<div>{@html htmlString}</div>

<style>
	div {
		margin-top: 2em;
		margin-bottom: 2em;
	}
</style>
