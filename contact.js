$(document).ready(function(){
  // jQuery 3 required
  $('.contact').on('input',function(){
      var haris = $(this);
      var length = 11;
      haris.val(haris.val().replace(/[^\d]+/g, ''));
      // if will work for first char should not be 0
      if(haris.val().match(/^0/) && length >= 12){
          haris.val('');
          return false;
      }
      haris.attr('maxlength',length);
      haris.attr('minlength',length);
  });
});
