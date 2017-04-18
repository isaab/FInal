// var ary_img=['../images/header/header_1.jpg','../images/header/header_2.jpg','../images/header/header_3.jpg'];

$(document).ready(function() {
   $('.dot').click(function(){
      var x=$(this).attr('index');
      console.log(x)
      $('.dots span').each(function(){
          $(this).removeClass('dot-active')
      });
      $(this).addClass('active');
      var img = $(this).data('src');
      console.log(img);
        $(".content_header").css('background-image','url('+img+')');
      
   })
});
