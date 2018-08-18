$(function(){
  $('.search-icon').click(function(event){
    $('.search-bar').addClass('expand');
    setTimeout(() => {
    $('.search-bar input').focus()      
    }, 500);
    event.stopPropagation()
  })
  $(document).click(()=>{$('.search-bar').removeClass('expand');})
  
  $('.search-bar input').click(function(event){
    event.stopPropagation()
  })
})
// 进度条
// (function (){
  var $w = $(window);
  var $pro = $('.progress-indicator');
  var wh = $w.height();
  var bh = $('body').height();
  console.log('body.height = ' + bh);
  
  var sHeight = bh - wh;
  console.log('sHeight = '+ sHeight);
  $w.on('scroll',function(){
    window.requestAnimationFrame(function(){
      var prec = Math.max(0, Math.min(1, $w.scrollTop() / sHeight));
      console.log($w.scrollTop() / sHeight);
      
      updateProgress(prec);
    })
  })

  function updateProgress(prec){
    $pro.css({'width': prec * 100 + '%'})
  }
// }());