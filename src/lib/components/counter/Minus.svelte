<script lang="ts">
	import { counter } from '$lib/stores/counter';

	function minus() {
		$counter--;
	}
</script>

<button on:click={minus}>-</button>
