var request = require('request');
var fs = require('fs');

function downloadFile(uri, filename, callback){
    var stream = fs.createWriteStream(filename);
    request(uri).pipe(stream).on('close', callback); 
}

if (!fs.existsSync('web-sign')) {
    fs.mkdirSync('web-sign');
}

console.log('Start download...');
for (let i = 1; i <= 3; i++) {
    const filename = 'web-sign/web-sign-' + i + '.mp4';
    downloadFile('https://cdn.nodelover.me/video_bucket/web-sign/' + i + '.mp4', filename, function() {
        console.log('Success: ' + filename + ' 下载完成！');
    });
}