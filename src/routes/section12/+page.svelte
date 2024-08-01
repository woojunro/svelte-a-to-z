<script lang="ts">
	import { flip } from 'svelte/animate';

	let items = [1];

	function add() {
		items.unshift(items.length + 1);
		items = [...items];
	}

	function remove() {
		items.shift();
		items = [...items];
	}
</script>

<h1>Section 12: Animation</h1>
<button on:click={add}>Add</button>
<button on:click={remove}>Remove</button>
{#each items as item (item)}
	<p animate:flip>{item}</p>
{/each}
