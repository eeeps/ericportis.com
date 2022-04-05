exports.render = function(data) {
	return `
<header>
	<nav>
		<ul>
			<li><a href="/">e</a>
			<li><a href="/posts">Posts</a>
			<li><a href="/notes">Notes</a>
			<li><a href="/about">About</a>
		</ul>
	</nav>
</header>

<main>
	
	<h2>Posts</h2>
	<ul>
		${ data.collections.post.map( post =>
			`<li><a href="${ post.url }">${ post.data.title }</a></li>`
		).join( '\n' ) }
	</ul>
	
	<h2>Notes</h2>
	<ul>
		${ data.collections.note.map( note =>
			`<li><a href="${ note.url }">${ note.date }</a></li>`
		).join( '\n' ) }
	</ul>
	
</main>
	
<footer>
</footer>
	`;
};

