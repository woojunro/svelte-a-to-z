<script lang="ts">
	function longpress(node: HTMLElement, duration: number) {
		let timer: number;

		function handleMousedown() {
			setTimeout(() => {
				node.dispatchEvent(new CustomEvent('longpress'));
			}, duration);
		}

		function handleMouseup() {
			clearTimeout(timer);
		}

		node.addEventListener('mousedown', handleMousedown);
		node.addEventListener('mouseup', handleMouseup);

		return {
			update(newValue: number) {
				duration = newValue;
			},
			destroy() {
				node.removeEventListener('mousedown', handleMousedown);
				node.removeEventListener('mouseup', handleMouseup);
			},
		};
	}

	let duration = 1000;
	function handleLongpress() {
		alert('longpress');
	}
</script>

<h1>Section 13: Action</h1>
<label>
	<input type="range" bind:value={duration} min="1000" max="3000" step="100" />
	{duration}ms
</label>
<button use:longpress={duration} on:longpress={handleLongpress}> Click </button>
