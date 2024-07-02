<script>
	const sections = [
		{ title: 'Basic syntax', href: '/section1' },
		{ title: 'Syntax for reactivity', href: '/section2' },
		{ title: 'Props', href: '/section3' },
	];
</script>

<h1>Svelte - A to Z</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<h2>Contents</h2>
<ol>
	<li><a href={sections[0].href}>{sections[0].title}</a></li>
	<li><a href={sections[1].href}>{sections[1].title}</a></li>
	<li><a href={sections[2].href}>{sections[2].title}</a></li>
</ol>
