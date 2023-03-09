exports.data = {
	"layout": "base.11ty.js",
	"eleventyExcludeFromCollections": true,
	"pagination": {
		"data": "collections.long",
		"size": 12,
		"reverse": true,
		"alias": "longs"
	}
};

exports.render = function(data) {

	return `
<main class="h-feed">

<h1>Longs</h1>

${ data.longs.map(
	( long ) => {
		return `
<article>
	<header>
		<a href="${ long.url }">${ long.data.title }</a> 
		<time class="dt-published">${ this.readableDate( long.date ) }</time>
	</header>
</article>
`;
	}
).join("") }

</main>

${ this.renderPagination( data ) }
`;

};