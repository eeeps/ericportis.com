exports.data = {
	layout: "base.11ty.js"
};

exports.render = function(data) {
	return `

<main>
	
	<section>
		<p>
			Hello, stranger. I live in beautiful Bellingham with my wife Britt and our dog, Wizard. We go on <a href="#TODO">adventures</a>, sometimes.
		</p>
		<p>
			I keep thinking about images and the web. Currently at <a href="https://cloudinary.com">Cloudinary</a>.
		</p>
	</section>
	
	<section>
		<h2>Selected work</h2>
		<p>A few notable things I’ve done, or published:</p>
		<ul>
			<li>Srcset sizes</li>
			<li>?
			<li>??
		</ul>
	</section>
	
	<section>
		<h2>Elsewhere</h2>
		<ul>
			<li><a href="https://twitter.com/etportis">Twitter</a>
			<li><a href="https://instagram.com/etportis">Instagram</a>
			<li><a href="https://github.com/eeeps">GitHub</a>
			<li><a href="mailto:e@ericportis.com">e@ericportis.com</a>
		</ul>
	</section>

	
</main>
	
<footer>
</footer>
	`;
};

