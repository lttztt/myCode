var request = require('request');
var fs = require('fs');

function downloadFile(uri, filename, callback){
    var stream = fs.createWriteStream(filename);
    request(uri).pipe(stream).on('close', callback); 
}
if(!fs.existsSync('computer-msg')){
  fs.mkdirSync('computer-msg');
}
console.log('Start download...');
var url = 'https://cdn.nodelover.me/video_bucket/protect-js/1.mp4';
var path = '保护我们的代码.mp4'
downloadFile(url, path ,function(){
  console.log('下载完成！');
})