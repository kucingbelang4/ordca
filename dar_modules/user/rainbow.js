var crypto = require("crypto");

var color  = [

        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'

];

var hashColor = {},

hash = {},

decodeId = function(crypt){

    return crypto.createHash('md5').update(crypt).digest("hex");

},

getHash = function (encode){



},

setHash = function (id){

    var encode = decodeId(id);
    
    hash[encode] = id;

},

getRainbow = function (id){



},

setRainbow = function (id){
    
    console.log('rainbow.js :: 31 :: setRainbow method');

    setHash(id);

}

module.exports.getRainbow = getRainbow;

module.exports.setRainbow = setRainbow;