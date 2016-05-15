/*!
 * ifteam.github.io 0.2.2 by 
 * Copyright 2015-2016 
 * Licensed under the AGPL-3.0 license
 */
'use strict';

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-74333603-1', 'auto');
ga('send', 'pageview');
//# sourceMappingURL=analytics.js.map

"use strict";

$(document).ready(function () {
    $('.parallax').parallax();
    $('#particles').particleground({
        dotColor: '#ddd',
        lineColor: '#ddd',
        density: 6500
    });
});
//# sourceMappingURL=index.js.map
