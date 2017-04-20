// var ary_img=['../images/header/header_1.jpg','../images/header/header_2.jpg','../images/header/header_3.jpg'];




var pic = document.getElementsByClassName('pic');


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


   $('.menutab').click(function(){
       $('.menu').animate({left: '0'}, "slow");
   })
   $('.fa-times').click(function(){
       $('.menu').animate({left: '-400'}, "slow");
   })
   
    $('.add').click(function(){
       if($('.nameinput').val()=='' && $('.emailinput').val()==''){
           $('.nameinput').attr('value','The text field is required.').css('color','red');
           $('.emailinput').attr('value','The email is required.').css('color','red');
       }else if($('.nameinput').val()==''){
           $('.nameinput').attr('value','The text field is required.').css('color','red');
       }else if($('.emailinput').val()==''){
           $('.emailinput').attr('value','The email is required.').css('color','red');
       }
    });
   
   $('.dot_second').click(function(){
      var y=$(this).attr('index');
      $('.threedots1 div').each(function(){
          $(this).removeClass('active1')
      });
      $(this).addClass('active1');
      $('.fullsize').animate({left: y*(-100)+'%'});
   })


      $('.dot_second').click(function(){
      var y=$(this).attr('index');
      $('.dots_second div').each(function(){
          $(this).removeClass('active1')
      });
      $(this).addClass('active1');
 
      $('.stage_owl').animate({left: y*(-100)+'%'});
      console.log( $('.stage_owl').position())
   })
 });
