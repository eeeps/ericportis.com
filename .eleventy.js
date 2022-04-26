
module.exports = function(eleventyConfig) {
	
	// Copy the `css` folder to the output
	eleventyConfig.addPassthroughCopy("css");
	
	eleventyConfig.addJavaScriptFunction("readableDate", function( date ) {
		
		const dayNumber = date.getDate();
		const year = date.getFullYear();
		const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'][ date.getMonth() ];
		return `${ monthName } ${ dayNumber }, ${ year }`
		
	} );
	
}
