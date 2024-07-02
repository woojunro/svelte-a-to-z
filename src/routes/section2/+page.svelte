<script>
	let count = 0;
	$: doubled = count * 2;
	$: if (count >= 10) {
		alert('You clicked the button too much!');
		count = 9;
	}

	function handleClick() {
		count++;
	}

	let numbers = [1, 2, 3, 4, 5];
	$: sum = numbers.reduce((acc, num) => acc + num, 0);

	function addNumber() {
		// Caution! numbers.push does not trigger reactivity
		numbers = [...numbers, numbers.length + 1];

		// Caution! sum is not updated yet
		console.log(sum);
	}
</script>

<button on:click={handleClick}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
<p>
	{count} x 2 = {doubled}
</p>
<p>
	{numbers.join(' + ')} = {sum}
</p>
<button on:click={addNumber}> Add a number </button>
