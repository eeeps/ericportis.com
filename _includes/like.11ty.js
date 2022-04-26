exports.data = {
	"layout": "base.11ty.js"
};

exports.render = function( data ) {

	const title = data.metadata?.title || data.url;

	let authors = false;
	if ( data.metadata?.authors ) {

		const authorsArray = data.metadata.authors.map( a => {
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

	// console.log( data.page );

	return `
	<article class="h-entry">
		<header>
			<a href="${ data.page.url }">★</a> 
			<time class="dt-published">${ this.readableDate( data.page.date ) }</time>
		</header>
		<a class="u-like-of" href="${ data.url }">${ title }</a>${ authors ? authors : '' }
	</article>
	`

}