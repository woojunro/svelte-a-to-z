<script lang="ts">
	import RandomImage from '$lib/components/RandomImage.svelte';

	let w: number;
	let h: number;
	let fontSize = 16;

	let div: HTMLDivElement;
	let randomImage: RandomImage;

	function handleDivLogClick() {
		console.log(div);
	}

	function handleRandomImageLogClick() {
		console.log(randomImage);
	}
</script>

<h1>Section 7: Data Binding(Advanced)</h1>

<h2>Dimension</h2>
<div class="inline" bind:clientWidth={w} bind:clientHeight={h}>
	<span style="font-size: {fontSize}px;">FONT</span>
</div>
<div>
	<p>div width: {w}</p>
	<p>div height: {h}</p>
	<input type="range" bind:value={fontSize} min={10} max={100} />
</div>

<h2>This</h2>
<button on:click={handleDivLogClick}>Div Log</button>
<div bind:this={div}>Div</div>
<button on:click={handleRandomImageLogClick}>Random Image Log</button>
<RandomImage bind:this={randomImage} />

<style>
	.inline {
		display: inline-block;
	}
</style>
