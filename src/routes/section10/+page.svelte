<script lang="ts">
	import { circInOut } from 'svelte/easing';
	import { spring, tweened } from 'svelte/motion';

	const progress = tweened(0, {
		duration: 2000,
		easing: circInOut,
	});

	const coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.25,
			precision: 0.01,
		},
	);
</script>

<h1>Section 10: Motion</h1>

<h2>Tweened</h2>
<progress value={$progress} />
<button on:click={() => ($progress = 0)}>0%</button>
<button on:click={() => ($progress = 0.25)}>25%</button>
<button on:click={() => ($progress = 0.5)}>50%</button>
<button on:click={() => ($progress = 0.75)}>75%</button>
<button on:click={() => ($progress = 1)}>100%</button>

<h2>Spring</h2>
<svg
	on:mousemove={(e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		$coords = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		};
	}}
	role="img"
>
	<circle cx={$coords.x} cy={$coords.y} r={10} />
</svg>

<style>
	svg {
		width: 100%;
		height: 300px;
	}
	circle {
		color: red;
	}
</style>
