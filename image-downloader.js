var fs = require('fs'),
    request = require('request');

var download = function(callback){
  const uri = images.pop(); // take the last one off
  request.head(uri, function(err, res, body){
    const extension = res.headers['content-type'].split('/').pop();
    const fileName = `${uri.split('/')[3]}.${extension}`;
    console.log("downloading...", fileName);
    request(uri).pipe(fs.createWriteStream('images/screenshots/' + fileName)).on('close', callback);
  });
};


var images = [
"http://wes.io/fovg/content",
"http://wes.io/fop3/content",
"http://wes.io/fw4x/content",
"http://wes.io/fwf8/content",
"http://wes.io/fuyf/content",
];

function start() {
  console.log('done');
  if(images.length) {
    download(start);
  }
}

download(start);
