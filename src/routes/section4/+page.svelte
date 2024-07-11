<script lang="ts">
	let x = 0;

	function addX() {
		x++;
	}

	let list = [
		{ id: 1, text: 'test 1' },
		{ id: 2, text: 'test 2' },
		{ id: 3, text: 'test 3' },
	];

	function addItem() {
		list = [...list, { id: list.length + 1, text: `test ${list.length + 1}` }];
	}

	function removeItem() {
		list = list.slice(0, -1);
	}

	function resetList() {
		list = [
			{ id: 1, text: 'test 1' },
			{ id: 2, text: 'test 2' },
			{ id: 3, text: 'test 3' },
		];
	}

	function hello(): Promise<string> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve('Hello');
			}, 2000);
		});
	}

	let promise: Promise<string>;
	function getHello() {
		promise = hello();
	}
</script>

<h1>Section 4: Logic Blocks</h1>

<h2>If Block</h2>
<button on:click={addX}>Add 1</button>
{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if x > 5}
	<p>{x} is greater than 5</p>
{:else}
	<p>{x} is less than or equal to 5</p>
{/if}

<h2>Each Block</h2>
<button on:click={addItem}>Add Item</button>
<button on:click={removeItem}>Remove Item</button>
<button on:click={resetList}>Reset List</button>
<ul>
	{#each list as { id, text }, i (id)}
		<li>Index {i}: {id}, {text}</li>
	{/each}
</ul>

<h2>Await Block</h2>
<button on:click={getHello}>Get Hello</button>
{#await promise}
	<p>Loading...</p>
{:then value}
	<p>{value || 'Not yet...'}</p>
{:catch error}
	<p>{error.message}</p>
{/await}
