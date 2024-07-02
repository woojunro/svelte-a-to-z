<script>
	import RandomImage from '$lib/components/RandomImage.svelte';
	import IntroduceMyself from '$lib/components/IntroduceMyself.svelte';

	let imgSize = 500;

	function handleSizeUp() {
		imgSize += 100;
	}

	function handleSizeDown() {
		imgSize -= 100;
	}

	const info = {
		name: 'Woojun',
		job: 'Developer',
		website: 'https://github.com/woojunro/svelte-a-to-z',
	};
</script>

<RandomImage {imgSize} />
<div>
	<button on:click={handleSizeUp}>Size Up!</button>
	<button on:click={handleSizeDown}>Size Down...</button>
</div>
<IntroduceMyself {...info} />
