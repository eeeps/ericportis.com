exports.data = {
  title: "ericportis.com"
};

exports.render = function(data) {
return `
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>${data.title}</title>
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="/css/base.css">
	<link rel="webmention" href="https://webmention.ericportis.com" />
	<link rel="me" href="https://twitter.com/etportis" />
	<link rel="me" href="https://github.com/eeeps" />
</head>
<body>
${data.content}
</body>
</html>`;
};