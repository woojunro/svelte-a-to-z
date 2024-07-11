<script lang="ts">
	import Hello from '$lib/components/Hello.svelte';

	let isMouseEntered = false;

	function handleMouseEnter() {
		isMouseEntered = true;
	}

	function handleMouseLeave() {
		isMouseEntered = false;
	}

	function handleClickMe() {
		alert('You clicked me!');
	}

	function handleMessage(event: CustomEvent<{ text: string }>) {
		alert(event.detail.text);
	}
</script>

<h1>Section 5: Handling Events</h1>

<h2>DOM Events</h2>
<div
	class={isMouseEntered ? 'mouseEnterDiv' : 'mouseLeaveDiv'}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	role="presentation"
>
	<p>{isMouseEntered ? 'Enter' : 'Leave'}</p>
</div>

<h2>Event Modifiers</h2>
<button on:click|once={handleClickMe}> Click me (only once) </button>

<h2>Component Events</h2>
<Hello on:message={handleMessage} />

<style>
	.mouseEnterDiv {
		width: 200px;
		height: 200px;
		background-color: paleturquoise;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.mouseLeaveDiv {
		width: 200px;
		height: 200px;
		background-color: palevioletred;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
