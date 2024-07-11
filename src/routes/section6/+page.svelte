<script lang="ts">
	let name = 'Ryan';
	let a = 1;
	let isChecked = false;
	let group = 'One';
	const list = ['One', 'Two', 'Three'];
	let checkedItems: string[] = [];

	let text = '';

	const selectList = [
		{ id: 1, name: 'One' },
		{ id: 2, name: 'Two' },
		{ id: 3, name: 'Three' },
	];
	let selected: number[] = [];

	let html = '<p>HTML content</p>';

	let todos = [{ text: 'New TODO', done: false }];
	function addToDo() {
		todos = [...todos, { text: 'New TODO', done: false }];
	}
	function removeToDo(index: number) {
		todos = todos.filter((_, i) => i !== index);
	}
</script>

<h1>Section 6: Data Binding</h1>

<h2>Input</h2>

<input type="text" bind:value={name} />
<p>Your name: {name}</p>

<input type="number" bind:value={a} min={0} max={10} />
<input type="range" bind:value={a} min={0} max={10} />
<p>a = {a}</p>

<input type="checkbox" bind:checked={isChecked} />
<p>Checked: {isChecked ? 'Yes' : 'No'}</p>

<label>
	<input type="radio" value="One" bind:group />
	One
</label>
<label>
	<input type="radio" value="Two" bind:group />
	Two
</label>
<p>{group}</p>

{#each list as item (item)}
	<label>
		<input type="checkbox" bind:group={checkedItems} value={item} />
		{item}
	</label>
{/each}
{#if checkedItems.length > 0}
	<p>Checked items: {checkedItems.join(', ')}</p>
{:else}
	<p>Empty...</p>
{/if}

<h2>Textarea</h2>
<textarea bind:value={text} />
<p>{text}</p>

<h2>Select</h2>
<select bind:value={selected} multiple>
	{#each selectList as item (item.id)}
		<option value={item.id}>{item.name}</option>
	{/each}
</select>
<p>Selected: {selected.join(', ')}</p>

<h2>Contenteditable</h2>
<div contenteditable bind:innerHTML={html}></div>
<pre>{html}</pre>

<h2>Sample: TODO List</h2>
{#each todos as { text, done }, index (index)}
	<div class:done>
		<input type="checkbox" bind:checked={done} />
		<input type="text" bind:value={text} />
		<button on:click={() => removeToDo(index)}>❌</button>
	</div>
{/each}
<button on:click={addToDo}>➕</button>

<style>
	.done {
		opacity: 0.5;
	}
</style>
