<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import Hoverable from '$lib/components/Hoverable.svelte';
</script>

<h1>Section 14: Slot</h1>

<h2>Slot</h2>
<Box>
	<p>Box</p>
</Box>

<h2>Default Slot</h2>
<Box />

<h2>Named Slot</h2>
<Box>
	<p slot="title">Title</p>
	<p slot="content">Content</p>
	<p slot="default">Default</p>
</Box>

<h2>Slot Props</h2>
<Hoverable let:hover={active}>
	<div class:active>
		{#if active}
			Hovered
		{:else}
			Not Hovered
		{/if}
	</div>
</Hoverable>

<style>
	div {
		height: 100px;
		border: 1px solid blue;
	}
	.active {
		background-color: red;
	}
</style>
