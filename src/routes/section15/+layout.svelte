<script lang="ts">
	import { key, type Context } from '$lib/contexts/key';
	import { setContext } from 'svelte';

	const context = {
		name: 'Svelte',
		job: 'Developer',
	};

	setContext<Context>(key, context);
</script>

<slot />
