<script lang="ts">
	interface section {
		title: string;
		href: string;
	}

	const sections: section[] = [
		{ title: 'Basic syntax', href: '/section1' },
		{ title: 'Syntax for reactivity', href: '/section2' },
		{ title: 'Props', href: '/section3' },
		{ title: 'Logic Blocks', href: '/section4' },
		{ title: 'Handling Events', href: '/section5' },
		{ title: 'Data Binding', href: '/section6' },
		{ title: 'Data Binding(Advanced)', href: '/section7' },
		{ title: 'Life Cycle', href: '/section8' },
		{ title: 'Store', href: '/section9' },
		{ title: 'Motion', href: '/section10' },
		{ title: 'Transition', href: '/section11' },
		{ title: 'Animation', href: '/section12' },
		{ title: 'Action', href: '/section13' },
		{ title: 'Slot', href: '/section14' },
		{ title: 'Context API', href: '/section15' },
		{ title: 'Svelte Components', href: '/section16' },
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
