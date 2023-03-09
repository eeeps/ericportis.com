const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

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
	
	// for <updated> dates in RSS...
	eleventyConfig.addNunjucksFilter( "dateStringToRfc3339", (dateString) => { 
		// stole this and the luxon dependency from how eleventy does things internally
		// in getMappedDate(), in /node_modules/@11ty/eleventy/src/Template.js
		const dateObj = DateTime
			.fromISO( dateString, { zone: "utc" } )
			.toJSDate();
		
		// and then the rest is just copied from /node_modules/@11ty/eleventy-plugin-rss/src/dateRfc3339.js
		let s = dateObj.toISOString();

		// remove milliseconds
		let split = s.split(".");
		split.pop();

		return split.join("") + "Z";
	} );
	
	eleventyConfig.addPlugin(pluginRss, {
		posthtmlRenderOptions: {
			closingSingleTag: "default" // opt-out of <img/>-style XHTML single tags
		}
	} );
	
}
