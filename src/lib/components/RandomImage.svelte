<script>
	export let imgSize = 500;
	$: src = `https://picsum.photos/${imgSize}`;
	$: alt = `Lorem Picsum ${imgSize}x${imgSize}`;
</script>

<img {src} {alt} />

<style>
	img {
		border-radius: 12%;
	}
</style>
