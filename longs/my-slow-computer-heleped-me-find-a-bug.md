---
layout: base.11ty.js
title: My slow computer helped me find a bug
date: 2022-04-05T12:00-07
---

Recently, one of my smarty-pants colleagues ([Yaron Shmueli](https://il.linkedin.com/in/yaron-shmueli-99770b2)) presented some groundbreaking work he’d done on encoding animated AVIFs containing transparency. If [Cloudinary](https://cloudinary.com) could transcode GIFs to animated AVIFs, we could save our customers and our customers’ customers mind-boggling amounts of bandwidth. Amazing! Fantastic!

Except! When I clicked the demo link, well, it looked terrible. Stuttering all over the place. Opening dev tools revealed a sea of dropped frames and long tasks.

Turns out, playing these animated AVIFs took far more CPU (relatively speaking) than the equivalent GIFs, for everybody. But [my machine](https://browser.geekbench.com/macs/macbook-pro-13-inch-mid-2017-intel-core-i5-7267u-3-1-ghz-2-cores) happened to be the oldest; it was the only one that couldn’t keep up with the frame rate. So, I was the only one who “saw” the issue.

Yaron filed [a bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1303388) with Chrome. Which led to [another bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1307888), and a couple of patches. And now animated AVIFs are faster for everyone, forever.

You hear about the importance of testing on slow machines. Good things happen when developers experience their software in the way that it is largely going to be experienced. It was notable and impactful to live this out.

*And also,* [a new M1 MacBook Pro](https://browser.geekbench.com/macs/macbook-pro-13-inch-late-2020) should be arriving at my house sometime this week. I can’t wait.

