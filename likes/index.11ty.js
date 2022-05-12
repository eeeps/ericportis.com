exports.data = {
	"layout": "base.11ty.js",
	"eleventyExcludeFromCollections": true,
	"pagination": {
		"data": "collections.like",
		"size": 12,
		"reverse": true,
		"alias": "likes"
	}
};

exports.render = function(data) {

	return `
<main class="h-feed">

<h1>Likes</h1>

${ data.likes.map(
	( like ) => {
		return `
<article class="h-entry">
	<header>
		<a href="${ like.url }">★</a> 
		<time class="dt-published">${ this.readableDate( like.date ) }</time>
	</header>
${ this.renderLike( like.data ) }
</article>
`;
	}
).join("") }

</main>

${ this.renderPagination( data ) }
`;

};