<script lang="ts">
	import Child from '$lib/components/Child.svelte';
	import { afterUpdate, beforeUpdate, tick } from 'svelte';

	let isChildMounted = false;

	beforeUpdate(() => {
		console.log('beforeUpdate');
	});

	afterUpdate(() => {
		console.log('afterUpdate');
	});

	let text = 'Hello, world!';

	async function handleTabKeyDown(
		this: HTMLTextAreaElement,
		event: KeyboardEvent,
	) {
		if (event.key !== 'Tab') {
			return;
		}

		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);
		const replacement = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();
		text =
			value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
</script>

<h1>Section 8: Life Cycle</h1>

<button on:click={() => (isChildMounted = !isChildMounted)}
	>{isChildMounted ? 'Unmount' : 'Mount'} Child</button
>
{#if isChildMounted}
	<Child />
{/if}

<textarea bind:value={text} on:keydown|preventDefault={handleTabKeyDown} />

<style>
	textarea {
		margin-top: 20px;
		width: 100%;
		height: 200px;
	}
</style>
