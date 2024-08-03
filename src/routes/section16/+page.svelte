<script lang="ts">
	import Blue from '$lib/components/color/Blue.svelte';
	import Green from '$lib/components/color/Green.svelte';
	import Red from '$lib/components/color/Red.svelte';
	import Folder from '$lib/components/file/Folder.svelte';
	import { files } from '$lib/data/files';

	const options = [
		{ name: 'Red', component: Red },
		{ name: 'Blue', component: Blue },
		{ name: 'Green', component: Green },
	];

	let selected = options[0];

	let key: string;

	function handleKeydown(event: KeyboardEvent) {
		key = event.key;
	}

	let innerWidth: number;
	let innerHeight: number;

	let clientX = 0;
	let clientY = 0;

	function handleMousemove(event: MouseEvent) {
		clientX = event.clientX;
		clientY = event.clientY;
	}

	let isTitleChanged = false;

	function toggleTitle() {
		isTitleChanged = !isTitleChanged;
	}
</script>

<h1>Section 16: Svelte Components</h1>

<h2>svelte:self</h2>
<Folder name="Home" {files} expanded />

<h2>svelte:component</h2>
<select bind:value={selected}>
	{#each options as option (option.name)}
		<option value={option}>{option.name}</option>
	{/each}
</select>
<svelte:component this={selected.component} />

<h2>svelte:window</h2>
<svelte:window on:keydown={handleKeydown} bind:innerWidth bind:innerHeight />
{#if key}
	<p>You pressed: {key}</p>
{:else}
	<p>Press any key...</p>
{/if}
<p>Width: {innerWidth}</p>
<p>Height: {innerHeight}</p>

<h2>svelte:body</h2>
<svelte:body on:mousemove={handleMousemove} />
<p>Mouse X: {clientX}</p>
<p>Mouse Y: {clientY}</p>

<h2>svelte:head</h2>
<button on:click={toggleTitle}>Toggle Title</button>
<svelte:head>
	{#if isTitleChanged}
		<title>Title Changed!</title>
	{:else}
		<title>Svelte: A to Z</title>
	{/if}
</svelte:head>
