const http = require('http');
const url = require('url');
var port = process.argv[2];


if(!port){
  console.log('请输入端口号,如8888!');
  process.exit(1);
}

var server = http.createServer(function(req,res){
  var parsedUrl = url.parse(req.url, true)
  var path = parsedUrl.pathname;
  var method = req.method;

  if(path === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      hello word
      <script src="/main.js"></script>
    </body>
    </html>
    `);
    res.end();
  }else if(path === '/style.css'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    res.write('body{background: red;}');
    res.end();
  }else if(path === '/main.js'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/javascript');
    res.write("console.log('I am javascript')");
    res.end();
  }else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.write('404了,请检查你要请求的资源!');e
    res.end();
  }

})

server.listen(port);
console.log('我监听在127.0.0.1的' + port + '端口!');