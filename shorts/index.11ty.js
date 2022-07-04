exports.data = {
	"layout": "base.11ty.js",
	"eleventyExcludeFromCollections": true,
	"pagination": {
		"data": "collections.short",
		"size": 12,
		"reverse": true,
		"alias": "shorts"
	}
};

exports.render = function(data) {

	return `
<main class="h-feed">

<h1>Shorts</h1>

${ data.shorts.map(
	( short ) => {
		return `
<article class="h-entry">
	<header>
		<a href="${ short.url }">★</a> 
		<time class="dt-published">${ this.readableDate( short.date ) }</time>
	</header>
${ short.templateContent }
</article>
`;
	}
).join("") }

</main>

${ this.renderPagination( data ) }
`;

};