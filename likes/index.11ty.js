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

${ data.likes.map( ( like ) => this.renderLike( like.data ) ).join("\n") }

</main>

${ this.renderPagination( data ) }
`;

};