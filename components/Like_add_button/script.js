var heart = document.querySelector('.heart');

heart.addEventListener('click', function() {
  this.classList.toggle('loved');
}, false);

$('#addGame').click(function(){
  $(this).prop('disabled', true);
  $(this).css('color', '#0069D9');
});