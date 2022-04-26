exports.data = {
	"layout": "base.11ty.js"
};

exports.render = function(data) {

	return `
${ data.likes.reverse().map( ( like, index ) => {

	const title = like.title || like.url;
	let authors = false;
	if ( like.authors ) {
		authors = ` by ${
			like.authors.map( a => {
				if ( a.url && a.name ) {
					return `<a href="${ a.url }">${ a.name }</a>`
				} else if ( a.name ) {
					return a.name;
				} else if ( a.url ) {
					return `<a href="${ a.url }">${ a.url }</a>`
				}
			} ).join(', ')
		}`;
	}
	return `
<article>
	<time>${ like.timestamp }</time>
	<a href="${ like.url }">${ title }</a>${ authors ? authors : '' }
</article>
`;

} ).join("\n") }
`;

};