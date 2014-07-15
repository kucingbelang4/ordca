{"filter":false,"title":"route.js","tooltip":"/dar_modules/route/route.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":24},"end":{"row":3,"column":25}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":25},"end":{"row":3,"column":26}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":26},"end":{"row":3,"column":27}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":23},"end":{"row":3,"column":27}},"text":"conn"},{"action":"insertText","range":{"start":{"row":3,"column":23},"end":{"row":3,"column":30}},"text":"connect"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":33},"end":{"row":4,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":14,"column":0}},"nl":"\n","lines":["","// configure express","","app.configure(function () {","  //hiding other express configuration","  app.use(cookieParser);","  app.use(express.session({ store: sessionStore }));"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":5,"column":0},"end":{"row":7,"column":0}},"nl":"\n","lines":["var cookieParser = express.cookieParser('your secret sauce')","  , sessionStore = new connect.middleware.session.MemoryStore();"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "},{"action":"removeLines","range":{"start":{"row":3,"column":0},"end":{"row":4,"column":0}},"nl":"\n","lines":["    connect = require('connect');"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":20},"end":{"row":3,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":19},"end":{"row":2,"column":20}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":19},"end":{"row":2,"column":20}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":3,"column":0}},"nl":"\n","lines":["var express = require(\"express\"),","    path = require(\"path\"),","    app = express();"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":2,"column":0},"end":{"row":14,"column":0}},"nl":"\n","lines":["// route app","","app.get('/', function(req, res){","    ","    res.sendfile('template/web/index.html');","  ","});","","app.get('/*', function(req, res){","    ","    res.sendfile('template/web'+req.url);","  "]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":3,"column":0},"end":{"row":4,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":2,"column":0},"end":{"row":3,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":18},"end":{"row":0,"column":19}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"f"},{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":25}},"text":"function"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":25},"end":{"row":0,"column":27}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":27},"end":{"row":0,"column":28}},"text":"{"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":28},"end":{"row":0,"column":29}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":28},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"lines":["    "]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":4},"end":{"row":2,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":4},"end":{"row":3,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":4},"end":{"row":2,"column":16}},"text":"// route app"},{"action":"insertText","range":{"start":{"row":2,"column":16},"end":{"row":3,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":3,"column":0},"end":{"row":14,"column":0}},"lines":["","app.get('/', function(req, res){","    ","    res.sendfile('template/web/index.html');","  ","});","","app.get('/*', function(req, res){","    ","    res.sendfile('template/web'+req.url);","  "]},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":26},"end":{"row":0,"column":27}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":27},"end":{"row":0,"column":28}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":26},"end":{"row":0,"column":28}},"text":"ex"},{"action":"insertText","range":{"start":{"row":0,"column":26},"end":{"row":0,"column":33}},"text":"express"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":33},"end":{"row":0,"column":34}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":34},"end":{"row":0,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":35},"end":{"row":0,"column":36}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":36},"end":{"row":0,"column":37}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":37},"end":{"row":0,"column":38}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":35},"end":{"row":0,"column":38}},"text":"pat"},{"action":"insertText","range":{"start":{"row":0,"column":35},"end":{"row":0,"column":41}},"text":"path()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":40},"end":{"row":0,"column":41}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":39},"end":{"row":0,"column":41}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":39},"end":{"row":0,"column":40}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":40},"end":{"row":0,"column":41}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":41},"end":{"row":0,"column":42}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":41},"end":{"row":0,"column":42}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":41},"end":{"row":0,"column":42}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":42},"end":{"row":0,"column":43}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":43},"end":{"row":0,"column":44}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":2},"end":{"row":16,"column":3}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":1},"end":{"row":16,"column":2}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":44},"end":{"row":0,"column":45}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":45},"end":{"row":0,"column":46}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":7},"end":{"row":15,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":4},"end":{"row":16,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":4},"end":{"row":16,"column":5}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":5},"end":{"row":16,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":6},"end":{"row":16,"column":7}},"text":"q"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":7},"end":{"row":16,"column":8}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":8},"end":{"row":16,"column":9}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":9},"end":{"row":16,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":10},"end":{"row":16,"column":11}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":10},"end":{"row":16,"column":11}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":9},"end":{"row":16,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":8},"end":{"row":16,"column":9}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":7},"end":{"row":16,"column":8}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":6},"end":{"row":16,"column":7}},"text":"q"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":6},"end":{"row":16,"column":7}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":7},"end":{"row":16,"column":8}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":8},"end":{"row":16,"column":9}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":9},"end":{"row":16,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":9},"end":{"row":16,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":8},"end":{"row":16,"column":9}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":8},"end":{"row":16,"column":9}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":9},"end":{"row":16,"column":10}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":10},"end":{"row":16,"column":11}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":11},"end":{"row":16,"column":12}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":12},"end":{"row":16,"column":13}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":13},"end":{"row":16,"column":14}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":14},"end":{"row":16,"column":15}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":31},"end":{"row":20,"column":32}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":32},"end":{"row":20,"column":33}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":33},"end":{"row":20,"column":34}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":34},"end":{"row":20,"column":35}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":23}},"text":"path = require(\"path\"),"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":22},"end":{"row":0,"column":23}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":1}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":1},"end":{"row":0,"column":2}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":2},"end":{"row":0,"column":3}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":3},"end":{"row":0,"column":4}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":26},"end":{"row":0,"column":27}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":35},"end":{"row":2,"column":39}},"text":"path"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":34},"end":{"row":2,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":33},"end":{"row":2,"column":34}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":26},"end":{"row":2,"column":35}},"text":"express, "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":13}},"text":"'use strict';"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":7},"end":{"row":12,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1405425595580,"hash":"01ed8917ad82d022cc9890fdd9251164e11016cf"}