$( document ).ready(function() {
  $('#learnmore').on('click', function() {
     $('.modal-wrapper').toggleClass('open');   
     return false;
  });
  $('.btn-close').on('click',function(){
      $('.modal-wrapper').toggleClass('open');  
     return false;
  })
});