// 定义变量
var go1Flag = false, go2Flag = false, angles = [240, 180, 120, 60, 0, 300];
// 需要渲染的变量(幸运抽奖、每日抽奖、是否登录、是否过期)
var luck_times = 5, every_times = 1,isLogin = true, overdue = false;

var _lottery = {
  title: [], //奖品名称
  colors: [], //奖品区块对应背景颜色
  endColor: "#FF5B5C", //中奖后区块对应背景颜色
  outsideRadius: 150, //外圆的半径
  insideRadius: 20, //内圆的半径
  textRadius: 105, //奖品位置距离圆心的距离
  startAngle: 0, //开始角度
  isLock: false //false:停止; true:旋转
};
_lottery.title = ["再来一次", "5元话费", "5元红包", "谢谢参与", "水晶杯", "茶具"];
_lottery.colors = ["#A2EDF8", "#F0FBFC", "#A2EDF8", "#F0FBFC", "#A2EDF8", "#F0FBFC"];
var b1 = [4, 0, 55, 40, 1, 0];
var b2 = [10, 9.9, 50, 20, 10, 0.1];

// 处理按钮的逻辑
$(".lottery_buttons ul").hide();
if (isLogin == false) {
  $(".lottery_buttons .noLogin_status").show();
} else if (overdue == true) {
  $(".lottery_buttons .finish_status").show();
} else {
  $(".lottery_buttons .normal_status").show();
}
// 获取页面元素和canvas
var $lottery = $("#lotterys");
var $dialog = $(".lottery_dialog");
var canvas = document.getElementById("lotterys");
var ctx = canvas.getContext("2d");
var $img = $(".hidden");

window.onload = function() {
  w = h = $(document).width();
  document.getElementById("lotterys").height = h;
  document.getElementById("lotterys").width = w;
  drawLottery();
  $(".relative_li .lottery_times").text(luck_times);
  if (luck_times == 0) {
    $("#go2").hide();
  }
  if (every_times == 0) {
    $("#go").hide();
  }
};

// 画转盘
function drawLottery(lottery_index) {
  if (canvas.getContext) {
    var arc = Math.PI / (_lottery.title.length / 2); //根据奖品个数计算圆周角度
    ctx.clearRect(0, 0, w, h); //在给定矩形内清空一个矩形
    // 外圆背景
    ctx.beginPath();
    var bg_radius = 160;
    ctx.arc(w / 2, h / 2, bg_radius, 0, 360, false);
    ctx.fillStyle = "#FBCB7E";
    ctx.fill();
    ctx.strokeStyle = "#FBD075"; //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
    ctx.font = "16px Microsoft YaHei"; //font 属性设置或返回画布上文本内容的当前字体属性
    for (var i = 0; i < _lottery.title.length; i++) {
      var angle = _lottery.startAngle + i * arc;
      ctx.fillStyle = _lottery.colors[i];
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, _lottery.outsideRadius, angle, angle + arc, false);
      ctx.arc(w / 2, h / 2, _lottery.insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
      ctx.save();
      if (lottery_index != undefined && i == lottery_index) {
        ctx.fillStyle = _lottery.endColor;
        ctx.fill();
      }
      ctx.fillStyle = "#fff";
      x = w / 2 + Math.cos(angle + arc / 2) * _lottery.textRadius;
      y = h / 2 + Math.sin(angle + arc / 2) * _lottery.textRadius;
      ctx.translate(x, y); //translate方法重新映射画布上的 (0,0) 位置
      ctx.rotate(angle + arc / 2 + Math.PI / 2); //rotate方法旋转当前的绘图
      //添加对应图标
      var img = $img[i];
      img.onload = function() {
        ctx.drawImage(img, -32, -40, 60, 70);
      };
      ctx.drawImage(img, -32, -40, 60, 70);
      ctx.restore(); //把当前画布返回（调整）到上一个save()状态之前
      //----绘制奖品结束----
    }
  }
}

// 主要旋转动画
var rotateFn = function(item, angles, txt) {
  _lottery.isLock = !_lottery.isLock;
  $lottery.stopRotate();
  $lottery.rotate({
    angle: 0,
    animateTo: angles + 1800,
    duration: 6000,
    callback: function() {
      _lottery.isLock = !_lottery.isLock;
      drawLottery(item);
      $dialog.find(".main_words").hide();
      if (item == 3) {
        $dialog.show().find(".modal3").show().find(".modal_text span").text(txt);
      } else {
        $dialog.show().find(".modal2").show().find(".modal_text span").text(txt);
      }
      // 如果是再抽一次
      if (item == 0) {
        luck_times++;
      }
      if (go1Flag && item !== 0) {
        $("#go").hide();
        every_times = 0;
        go1Flag = false;
      }
      if (go2Flag && luck_times > 1) {
        luck_times--;
        $(".relative_li .lottery_times").text(luck_times);
        go2Flag = false;
      } else if (go2Flag && luck_times == 1) {
        $(".relative_li .lottery_times").text(0);
        $("#go2").hide();
        go2Flag = false;
      }
    }
  });
};
//记录抽奖和查看记录
function getRecord(item, type) {
  var txt = item;
  if (txt == undefined) {
    $.get('/hd/getHdRecord',function(response){
      if (response.state == 1) {
        $(".modal1 .dialog_ul").html(response.info);
        $dialog.find(".main_words").hide();
        $dialog.show().find(".modal1").show();
      } else {
        showToast("请先登录!");
      }
    })
  } else {
    $.post("/hd/saveHdRecord", { txt: txt, type: type}, function(result) {
      if (result.state == 0) {
        showToast("请先登录!");
      } else if (result.state == 1) {
        drawLottery();
        rotateFn(item, angles[item], _lottery.title[item]);
      }
    });
  }
}
// 每日抽奖、幸运抽奖、抽奖记录、关闭弹窗
$("#go").on("click", function() {
  if (_lottery.isLock) {showToast("心急吃不了热豆腐哦");return;}
  item = random_lottery(b1);
  go1Flag = true;
  getRecord(item, 0);
});
$("#go2").on("click", function() {
  if (_lottery.isLock) {showToast("心急吃不了热豆腐哦");return;}
  item = random_lottery(b2);
  go2Flag = true;
  getRecord(item, 1);
});
$(".jilu").on("click", function() {
  getRecord();
});
$(".lottery_dialog .dialog_close").on("click", function() {
  $dialog.hide();
});
// 随机概率
function goodLuck(obj, luck) {
  var sum = 0,factor = 0,random = Math.random();
  for (var i = luck.length - 1; i >= 0; i--) {
    sum += luck[i]; // 统计概率总和
  }
  random *= sum; // 生成概率随机数
  for (var i = luck.length - 1; i >= 0; i--) {
    factor += luck[i];
    if (random <= factor) return obj[i];
  }
  return null;
}

function random_lottery(item) {
  //["再来一次", "5元话费", "5元红包", "谢谢参与", '水晶杯', '茶具'];
  var a = [0, 1, 2, 3, 4, 5];
  return goodLuck(a, item);
}

//提示框的出现和隐藏
var toast_timer = 0;
function showToast(message) {
  var alert = document.getElementById("toast"),
    toastHTML = "";
  if (alert == null) {
    toastHTML = '<div id="toast">' + message + "</div>";
    document.body.insertAdjacentHTML("beforeEnd", toastHTML);
  } else {
    alert.style.opacity = 0.9;
  }
  toast_timer = setTimeout("hideToast()", 1000);
}
function hideToast() {
  var alert = document.getElementById("toast");
  alert.style.opacity = 0;
  clearTimeout(toast_timer);
}