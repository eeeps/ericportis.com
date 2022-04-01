exports.render = function(data) {
	return `
<header>
	<nav>
		<ul>
			<li><a href="/">e</a>
	</nav>
</header>

<main>
	<ul>
		${data.collections.all.map(post =>
			`<li><a href="${post.url}">${post.url}</a></li>`
		).join("\n")}
	</ul>
</main>

<footer>
</footer>
	`;
};

