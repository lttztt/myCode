var $lottery = $('#lotterys');
var canvas = document.getElementById("lotterys");
var ctx = canvas.getContext("2d");
var _lottery = {
	title: [],			 //奖品名称
	colors: [],			 //奖品区块对应背景颜色
	endColor: '#FF5B5C', //中奖后区块对应背景颜色
	outsideRadius: 170,	 //外圆的半径
	insideRadius: 30,	 //内圆的半径
	textRadius: 105,	 //奖品位置距离圆心的距离
	startAngle: 0,		 //开始角度
	isLock: false		 //false:停止; ture:旋转
};
_lottery.title = ["再来一次", "5元话费", "5元红包", "谢谢参与", '水晶杯', '茶具'];
_lottery.colors = ["#A2EDF8", "#F0FBFC", "#A2EDF8", "#F0FBFC", "#A2EDF8", "#F0FBFC"];
var w,y;
var $img = $('.hidden');
window.onload = function(){
  w = h = $(document).width();
  console.log(w);
  document.getElementById('lotterys').height = h;
  document.getElementById('lotterys').width = w;
  drawLottery();

}
function drawLottery(lottery_index){
  ctx.beginPath();
  var bg_radius = 180;
  ctx.arc(w / 2, h / 2, bg_radius, 0, 360, false); 
  ctx.fillStyle = '#FBCB7E';
  ctx.fill();

  if (canvas.getContext) {
  var arc = Math.PI / (_lottery.title.length / 2); //根据奖品个数计算圆周角度
  // ctx.clearRect(0,0,w,h); //在给定矩形内清空一个矩形
  ctx.strokeStyle = "#FBD075"; //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式  
  ctx.font = '16px Microsoft YaHei'; //font 属性设置或返回画布上文本内容的当前字体属性
  for(var i = 0; i < _lottery.title.length; i++) { 
    var angle =  _lottery.startAngle + i * arc;
    ctx.fillStyle = _lottery.colors[i];
    ctx.beginPath();
    //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）  
    ctx.arc(w / 2, h / 2, _lottery.outsideRadius, angle, angle + arc, false);  
    ctx.arc(w / 2, h / 2, _lottery.insideRadius, angle + arc, angle, true);
    ctx.stroke();
    ctx.fill();
    ctx.save();    
    // ctx.fillStyle = "#fff";
    // var text = _lottery.title[i], line_height = 17, x, y;
    x = w / 2 + Math.cos(angle + arc / 2) * _lottery.textRadius;
    y = h / 2 + Math.sin(angle + arc / 2) * _lottery.textRadius;
    ctx.translate(x, y); //translate方法重新映射画布上的 (0,0) 位置
    ctx.rotate(angle + arc / 2 + Math.PI / 2); //rotate方法旋转当前的绘图
    //添加对应图标??????????
        var img= $img[i];
			  img.onload=function(){  
				  ctx.drawImage(img,-36,-60, 70, 80);      
			  }; 
			  ctx.drawImage(img,-36,-60, 70, 80);
		  
// ?????????????????????
    // ctx.fillText(text, -ctx.measureText(text).width / 2, 0); //measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
    ctx.restore(); //把当前画布返回（调整）到上一个save()状态之前 
    //----绘制奖品结束----
    }     
  }
}


var rotateFn = function(item, angles, txt){
  _lottery.isLock = !_lottery.isLock;
  $lottery.stopRotate();
  $lottery.rotate({
    angle: 0,
    animateTo: angles + 1800,
    // animateTo: angles,
    duration: 6000,
    callback: function(){
      _lottery.isLock = !_lottery.isLock;
      // console.log(txt)
      alert(txt);
    }
  })
}

$('#go').on('click',function(){
  if(_lottery.isLock){console.log('误急');return;}
  // var angles = [60, 120, 180, 240, 300, 360];
  var angles = [240, 180, 120, 60, 0, 300];
  item = btn1()
  rotateFn(item, angles[item], _lottery.title[item]);
})

$('#go2').on('click',function(){
  if(_lottery.isLock){console.log('误急');return;}
  // var angles = [60, 120, 180, 240, 300, 360];
  var angles = [240, 180, 120, 60, 0, 300];
  item = btn2()
  rotateFn(item, angles[item], _lottery.title[item]);
})

function goodLuck(obj, luck) {
  var sum = 0,
      factor = 0,
      random = Math.random();

  for(var i = luck.length - 1; i >= 0; i--) {
      sum += luck[i]; // 统计概率总和
  };
  random *= sum; // 生成概率随机数
  for(var i = luck.length - 1; i >= 0; i--) {
      factor += luck[i];
      if(random <= factor) return obj[i];
  };
  return null;
};


// var a = ["再来一次", "5元话费", "5元红包", "谢谢参与", '水晶杯', '茶具'];
var a = [0, 1, 2, 3, 4, 5];

var b1 = [4, 0, 55, 40, 1, 0];
var b2 = [10, 9.9, 50, 20, 10 ,0.1];
function btn1(){
  return goodLuck(a, b1);
}
function btn2(){
  return goodLuck(a, b2);
}