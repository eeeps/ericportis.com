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
</head>
<body>
<h1>header</h1>
${data.content}
</body>
</html>`;
};