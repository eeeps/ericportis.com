---
layout: base.11ty.js
title: Upload to Cloudinary with a Shortcut
tags: draft
---

Often, I want to take an image that exists locally on my Mac or iPhone and get a URL for it.

- Maybe I want to embed the image on a webpage.
- Maybe I just want to include it in some Markdown.
- Maybe I want to drop a freshly-minted screenshot into a GitHub comment, or bug report.
 - Maybe I want to email a photo without worrying about attachment/storage quotas.

I end up doing this, what – five? ten? – times a week? Here’s what I used to do:

1. Type “cloudinary.com/console” into the nearest URL bar.
2. Enter my username and password.
3. Find my iPhone, launch Google Authenticator; memorize & speed-type six digits (😤).
4. Click “Media Library”.
5. Drag the file into the browser window.
6. Find the newly-uploaded asset and click the li’l 🔗 icon.
7. Done.

Too many steps! Here’s what I do now:

1. Control-click the file.
2. “Quick Actions” → “Upload to Cloudinary”
3. Done!

<video src=TODO>Screencast</video>

How? With this: [Upload to Cloudinary Shortcut, on GitHub](https://github.com/eeeps/upload-to-cloudinary-shortcut).

## How it works

Cloudinary has an [Upload API](https://cloudinary.com/documentation/upload_images). Most folks use it [via an SDK](https://cloudinary.com/documentation/backend_sdks), which makes things (especially [generating authentication signatures](https://cloudinary.com/documentation/upload_images#generating_authentication_signatures)) easier. But! I fear/loathe dependencies and Shortcuts (surprisingly?) provides enough functionality that I managed to craft properly-signed HTTP POST requests, using just Shortcuts.

Let’s walk through it.

First things first, let’s set some variables.

![Screenshot of the first Action block](TODO)

First: an image file. If we don‘t have one already (because the Shortcut was run as a Quick Action or from a Share Sheet, on an existing file/photo), we ask for one, from your Photo Library.

![Screenshot of a few more Action blocks](TODO)

Next up: your account’s Cloud Name, API Key, and API Secret. The first time you install the Shortcut, it asks you for these. Your answers get stored in these Text “Actions”, forevermore. No, I'm not going to show you mine.

![Screenshot of the Endpoint URL action blocks](TODO)

Now we can go about building our POST request. The first thing we’re going to need is a URL. So we stick your Cloud Name (captured earlier) into a string; simple enough.

![Screenshot of the group of Action blocks that generate the current Epoch timestamp](TODO)

Next up: the current [Unix (aka Epoch) timestamp](https://en.wikipedia.org/wiki/Unix_time). I could have shelled out for this (`date '+%s'`) but I don't think that would have worked on iOS (?) and, well, this was more fun.

![Screenshot of the group of Action blocks that generate the required authentication signature](TODO)

And now we come to the dreaded authentication signature. [Cloudinary’s instructions for generating one](https://cloudinary.com/documentation/upload_images#generating_authentication_signatures) sound scary but in this case, at least, all we need is a [SHA-1 hash](https://en.wikipedia.org/wiki/SHA-1) of two things stuck together: ① the timestamp ② our API Secret. Shortcuts can do this! Go Shortcuts, go!

![Screenshot of the action block that actually makes the POST request](TODO)

And now, we fire off an HTTP POST request, with the file, API Key, timestamp, and signature all form-encoded into the body of the request. The first time I ran this, I worried Shortcuts wasn’t smart/flexible enough to wrap a binary file up into a POST request containing [`multipart/form-data`](https://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean/28380690#28380690). But you know what? It is! Go! Shortcuts! Go!

![Screenshot of the action blocks that pull out and present the resulting URL from Cloudinary’s response](TODO)

Then, we wait. Until Cloudinary spits back some JSON, which Shortcuts for some reason calls a “Dictionary,” but is totally equipped to parse and handle. So, we grab the freshly-minted URL out of the returned “Dictionary”, copy it to the clipboard, and alert the user that our work is done (or show the full JSON response if there was an error).

The End!

## Bonus: transformations, too

Once you’ve got a Cloudinary URL, it’s easy enough to start adding transformations to it.

<video src=TODO>Screencast</video>

Ninety-five percent of the time I run this thing, I add [`q_auto`](https://cloudinary.com/documentation/image_optimization#automatic_quality_selection_q_auto) to the URL. Beyond that: need to turn a HEIC from your iPhone into something you can actually share with anyone? Want to turn a 12MP JPEG into an optimized, 1200-pixel-wide AVIF? Heck, need to take a 16:9 something-or-other and smart-crop it to a square around the main subject’s face? All of these abilities, and many more, are just a few keystrokes away.

[Have fun!](https://github.com/eeeps/upload-to-cloudinary-shortcut)

