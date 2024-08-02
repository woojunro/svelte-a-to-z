<script lang="ts">
	import { key, type Context } from '$lib/contexts/key';
	import { getContext } from 'svelte';

	const { name, job } = getContext<Context>(key);
</script>

<h1>Section 15: Context API</h1>

<h2>Context</h2>
<p>{name}</p>
<p>{job}</p>
