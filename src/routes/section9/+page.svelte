<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Minus from '$lib/components/counter/Minus.svelte';
	import Plus from '$lib/components/counter/Plus.svelte';
	import Reset from '$lib/components/counter/Reset.svelte';
	import NameInput from '$lib/components/NameInput.svelte';
	import { counter } from '$lib/stores/counter';
	import { baseTime, elapsed } from '$lib/stores/elapsed';
	import { name } from '$lib/stores/name';
	import { now } from '$lib/stores/now';

	afterNavigate(() => {
		$baseTime = new Date();
		$name = '';
	});
</script>

<h1>Section 9: Store</h1>

<h2>Counter</h2>
<p>Counter: {$counter}</p>
<Plus />
<Minus />
<Reset />

<h2>Now (readable)</h2>
<p>Now: {$now}</p>

<h2>Elapsed time in seconds (derived)</h2>
<p>Elapsed seconds: {$elapsed}</p>

<h2>Store binding</h2>
{#if $name}
	<p>Hello, {$name}!</p>
{:else}
	<p>No one to say hello...</p>
{/if}
<NameInput />
