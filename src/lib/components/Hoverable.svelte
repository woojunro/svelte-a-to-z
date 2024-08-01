<script lang="ts">
	let hover = false;

	function enter() {
		hover = true;
	}

	function leave() {
		hover = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave} role="banner">
	<slot {hover} />
</div>
