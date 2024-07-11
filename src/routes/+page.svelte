<script>
	const sections = [
		{ title: 'Basic syntax', href: '/section1' },
		{ title: 'Syntax for reactivity', href: '/section2' },
		{ title: 'Props', href: '/section3' },
		{ title: 'Logic Blocks', href: '/section4' },
	];
</script>

<h1>Svelte - A to Z</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<h2>Contents</h2>
<ol>
	{#each sections as { title, href } (href)}
		<li><a {href}>{title}</a></li>
	{/each}
</ol>
