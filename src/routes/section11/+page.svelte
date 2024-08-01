<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let isVisible = true;
	let status = '';
</script>

<h1>Section 11: Transition</h1>

<label>
	<input type="checkbox" bind:checked={isVisible} />
	visible
</label>

<h2>Fade</h2>
<div>
	{#if isVisible}
		<p transition:fade>Hello!</p>
	{/if}
</div>

<h2>In - Out</h2>
<div>
	{#if isVisible}
		<p in:fade out:fly={{ x: 200 }}>I fade in and fly out!</p>
	{/if}
</div>

<h2>Transition events</h2>
<p>Status: {status}</p>
<div>
	{#if isVisible}
		<p
			transition:fade
			on:introstart={() => (status = 'intro start')}
			on:introend={() => (status = 'intro end')}
			on:outrostart={() => (status = 'outro start')}
			on:outroend={() => (status = 'outro end')}
		>
			Hello!
		</p>
	{/if}
</div>

<style>
	div {
		height: 100px;
	}
</style>
