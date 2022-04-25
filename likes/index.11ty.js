exports.data = {
	"layout": "base.11ty.js"
};

exports.render = function(data) {

	return `
${ data.likes.reverse().map( ( like, index ) => {

	return `
<article>
	<time>${ like.timestamp }</time>
	<a href="${ like.url }">${ like.url }</a>
</article>
`;

} ).join("\n") }
`;

};