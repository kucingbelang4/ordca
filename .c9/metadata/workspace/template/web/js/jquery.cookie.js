{"filter":false,"title":"jquery.cookie.js","tooltip":"/template/web/js/jquery.cookie.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":3}},"text":"/*!"},{"action":"insertText","range":{"start":{"row":0,"column":3},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":116,"column":0}},"lines":[" * jQuery Cookie Plugin v1.4.1"," * https://github.com/carhartl/jquery-cookie"," *"," * Copyright 2013 Klaus Hartl"," * Released under the MIT license"," */","(function (factory) {","\tif (typeof define === 'function' && define.amd) {","\t\t// AMD","\t\tdefine(['jquery'], factory);","\t} else if (typeof exports === 'object') {","\t\t// CommonJS","\t\tfactory(require('jquery'));","\t} else {","\t\t// Browser globals","\t\tfactory(jQuery);","\t}","}(function ($) {","","\tvar pluses = /\\+/g;","","\tfunction encode(s) {","\t\treturn config.raw ? s : encodeURIComponent(s);","\t}","","\tfunction decode(s) {","\t\treturn config.raw ? s : decodeURIComponent(s);","\t}","","\tfunction stringifyCookieValue(value) {","\t\treturn encode(config.json ? JSON.stringify(value) : String(value));","\t}","","\tfunction parseCookieValue(s) {","\t\tif (s.indexOf('\"') === 0) {","\t\t\t// This is a quoted cookie as according to RFC2068, unescape...","\t\t\ts = s.slice(1, -1).replace(/\\\\\"/g, '\"').replace(/\\\\\\\\/g, '\\\\');","\t\t}","","\t\ttry {","\t\t\t// Replace server-side written pluses with spaces.","\t\t\t// If we can't decode the cookie, ignore it, it's unusable.","\t\t\t// If we can't parse the cookie, ignore it, it's unusable.","\t\t\ts = decodeURIComponent(s.replace(pluses, ' '));","\t\t\treturn config.json ? JSON.parse(s) : s;","\t\t} catch(e) {}","\t}","","\tfunction read(s, converter) {","\t\tvar value = config.raw ? s : parseCookieValue(s);","\t\treturn $.isFunction(converter) ? converter(value) : value;","\t}","","\tvar config = $.cookie = function (key, value, options) {","","\t\t// Write","","\t\tif (value !== undefined && !$.isFunction(value)) {","\t\t\toptions = $.extend({}, config.defaults, options);","","\t\t\tif (typeof options.expires === 'number') {","\t\t\t\tvar days = options.expires, t = options.expires = new Date();","\t\t\t\tt.setTime(+t + days * 864e+5);","\t\t\t}","","\t\t\treturn (document.cookie = [","\t\t\t\tencode(key), '=', stringifyCookieValue(value),","\t\t\t\toptions.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE","\t\t\t\toptions.path    ? '; path=' + options.path : '',","\t\t\t\toptions.domain  ? '; domain=' + options.domain : '',","\t\t\t\toptions.secure  ? '; secure' : ''","\t\t\t].join(''));","\t\t}","","\t\t// Read","","\t\tvar result = key ? undefined : {};","","\t\t// To prevent the for loop in the first place assign an empty array","\t\t// in case there are no cookies at all. Also prevents odd result when","\t\t// calling $.cookie().","\t\tvar cookies = document.cookie ? document.cookie.split('; ') : [];","","\t\tfor (var i = 0, l = cookies.length; i < l; i++) {","\t\t\tvar parts = cookies[i].split('=');","\t\t\tvar name = decode(parts.shift());","\t\t\tvar cookie = parts.join('=');","","\t\t\tif (key && key === name) {","\t\t\t\t// If second argument (value) is a function it's a converter...","\t\t\t\tresult = read(cookie, value);","\t\t\t\tbreak;","\t\t\t}","","\t\t\t// Prevent storing a cookie that we couldn't decode.","\t\t\tif (!key && (cookie = read(cookie)) !== undefined) {","\t\t\t\tresult[name] = cookie;","\t\t\t}","\t\t}","","\t\treturn result;","\t};","","\tconfig.defaults = {};","","\t$.removeCookie = function (key, options) {","\t\tif ($.cookie(key) === undefined) {","\t\t\treturn false;","\t\t}","","\t\t// Must not alter options, thus extending a fresh object...","\t\t$.cookie(key, '', $.extend({}, options, { expires: -1 }));","\t\treturn !$.cookie(key);","\t};",""]},{"action":"insertText","range":{"start":{"row":116,"column":0},"end":{"row":116,"column":4}},"text":"}));"}]}]]},"ace":{"folds":[],"scrolltop":120,"scrollleft":0,"selection":{"start":{"row":116,"column":4},"end":{"row":116,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1405445768138,"hash":"6aedebeeb22958e76df928cd7d81a66883bbc0f1"}