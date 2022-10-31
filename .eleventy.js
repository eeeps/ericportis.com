const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function( eleventyConfig ) {
	
	// Copy the `css` folder to the output
	eleventyConfig.addPassthroughCopy( "css" );
	
	eleventyConfig.addJavaScriptFunction( "readableDate", function( date ) {
		
		const dayNumber = date.getDate();
		const year = date.getFullYear();
		const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'][ date.getMonth() ];
		return `${ monthName } ${ dayNumber }, ${ year }`
		
	} );
	
	eleventyConfig.addFilter( "renderLike", function( data ) {

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

		return `
	<p><a class="u-like-of" href="${ data.url }">${ title }</a>${ authors ? authors : '' }</p>
`;

	} );
	
	eleventyConfig.addJavaScriptFunction( "renderPagination", function( data ) {
		if ( !data.pagination ) {
			return '';
		}
		let previous = '', next = '', center = '';
		if ( data.pagination.href.previous ) {
			previous = `<a href="${ data.pagination.href.previous }">← Newer</a>`;
		}
		if ( data.pagination.href.previous && data.pagination.href.next ) {
			center = ` • `;
		}
		if ( data.pagination.href.next ) {
			next = `<a href="${ data.pagination.href.next }">Older →</a>`;
		}
		return `<nav>${ previous }${ center }${ next }</nav>`;
	} );
	
	eleventyConfig.addPlugin(pluginRss, {
		posthtmlRenderOptions: {
			closingSingleTag: "default" // opt-out of <img/>-style XHTML single tags
		}
	} );
	
}
