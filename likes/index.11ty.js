exports.data = {
	"layout": "base.11ty.js",
	"eleventyExcludeFromCollections": true,
	"pagination": {
		"data": "collections.like",
		"size": 3,
		"alias": "likes"
	}
};

exports.render = function(data) {



	return `
<main class="h-feed">
<h1>Likes</h1>
${ data.likes.map( ( like, index ) => {

		console.log(like.data.url, like.date);

		const title = like.data.metadata?.title || like.url;

		let authors = false;
		if ( like.data.metadata?.authors ) {
	
			const authorsArray = like.data.metadata.authors.map( a => {
				if ( a.url && a.name ) {
					return `<a href="${ a.url }">${ a.name }</a>`
				} else if ( a.name ) {
					return a.name;
				} else if ( a.url ) {
					return `<a href="${ a.url }">${ a.url }</a>`
				}
			} );
		
			if ( authorsArray.length > 1 ) {
				authorsArray[ authorsArray.length - 1 ] = ` and ${ authorsArray[ authorsArray.length - 1 ] }`
			}
		
			authors = ` by ${ authorsArray.join(', ') }`;
		
		}
	
		return `
<article class="h-entry">
	<header>
		<a href="${ like.url }">★</a> 
		<time class="dt-published">${ this.readableDate( like.date ) }</time>
	</header>
	<a class="u-like-of" href="${ like.data.url }">${ title }</a>${ authors ? authors : '' }
</article>
`; } ).join("\n") }

</main>`;

};