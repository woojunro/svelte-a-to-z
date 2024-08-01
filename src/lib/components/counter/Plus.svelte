<script lang="ts">
	import { counter } from '$lib/stores/counter';

	function plus() {
		$counter++;
	}
</script>

<button on:click={plus}>+</button>
