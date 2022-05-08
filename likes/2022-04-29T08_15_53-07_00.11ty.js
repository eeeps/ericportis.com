module.exports.data = {
	"url": "https://twitter.com/nhoizey/status/1520057171496644609",
	"date": "2022-04-29T08:15:53-07:00",
	"metadata": {
		"title": "a tweet",
		"authors": [
			{
				"name": "Nicolas Hoizey",
				"url": "https://nicolas-hoizey.com/"
			}
		]
	}
};

exports.render = function( data ) {
	return this.renderLike( data );
}