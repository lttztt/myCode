var request = require('request');
var fs = require('fs');

function downloadFile(uri, filename, callback){
  var stream = fs.createWriteStream(filename);
  request(uri).pipe(stream).on('close', callback);
}

if(!fs.existsSync('sequelize')){
  fs.mkdirSync('sequelize');
}
console.log('Start download...');
var txtArr = [
  '1start'
];
var wordArr = [
  '1.连接数据库'
]
for(let i = 0; i <= 15; i++){
  const filename = 'sequelize/' + wordArr[i] + '.mp4';
  downloadFile('https://cdn.nodelover.me/video_bucket/sequelize/' + txtArr[i] + '.mp4', filename, function(){
    console.log('Success: ' + filename + ' 下载完成!');
  })
}