exports.data = {
	"url": "https://twitter.com/nhoizey/status/1520060184965570568",
	"date": "2022-04-29T08:30:03-07:00",
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