<script lang="ts">
	import { counter } from '$lib/stores/counter';

	function reset() {
		$counter = 0;
	}
</script>

<button on:click={reset}>reset</button>
