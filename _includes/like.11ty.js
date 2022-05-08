exports.data = {
	"layout": "base.11ty.js"
};

exports.render = function( data ) {

return `<article class="h-entry">
	<header>
		<a href="${ data.page.url }">★</a> 
		<time class="dt-published">${ this.readableDate( data.page.date ) }</time>
	</header>
${ data.content }
</article>
`;

}