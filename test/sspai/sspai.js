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