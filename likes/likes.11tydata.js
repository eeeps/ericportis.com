module.exports = {
	"tags": "like",
	"layout": "like.11ty.js",
	eleventyComputed: {
		title: function( data ) { return '❤︎' + this.renderLike( data ).replace( /<\/?[^>]+(>|$)/g, "" ).trim() }
	}
};