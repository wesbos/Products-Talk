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
"http://wes.io/fiJ1/content",
"http://wes.io/fif3/content",
"http://wes.io/fi6D/content",
"http://wes.io/fiWU/content",
"http://wes.io/fi97/content",
"http://wes.io/fiXu/content",
"http://wes.io/fiMm/content",
"http://wes.io/fiNl/content",
"http://wes.io/fi4v/content",
"http://wes.io/fi2a/content",
"http://wes.io/fhzK/content",
"http://wes.io/fiFu/content",
"http://wes.io/fiLx/content",
"http://wes.io/fi1M/content",
"http://wes.io/fi0r/content",
"http://wes.io/fi1b/content",
"http://wes.io/fiYI/content",
"http://wes.io/fiAX/content",
"http://wes.io/ff1g/content",
"http://wes.io/ff95/content",
"http://wes.io/feqZ/content",
"http://wes.io/ff4H/content",
"http://wes.io/fnLG/content",
"http://wes.io/fn9f/content",
"http://wes.io/fnL7/content",
"http://wes.io/ffK7/content",
"http://wes.io/fmxy/content",
];

function start() {
  console.log('done');
  if(images.length) {
    download(start);
  }
}

download(start);
