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
       $('.menu').animate({left: '-40'+"px"}, "slow");
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

    $('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});

   
   $('.dot_second').click(function(){
      var y=$(this).attr('index');
      $('.threedots1 div').each(function(){
          $(this).removeClass('active1')
      });
      $(this).addClass('active1');
      $('.fullsize').animate({left: y*(-100)+'%'});
   })


//       $('.dot_second_2').click(function(){
//       var y=$(this).attr('index');
//       $('.dots_second div').each(function(){
//           $(this).removeClass('active1')
//       });
//       $(this).addClass('active1');
 
//       $('.stage_owl').animate({left: y*(-1180)+'px',});
//    })


      $('.scroll').click(function(){
       $('html, body').animate({ scrollTop: 0 }, "slow")
       return false;
   })

   
    $(".owl-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            }, 1000: {
                items: 3
            }
        }
    });
        $('#sidebar-btn').click(function () {
        console.log($('#sidebar').width());
        $('#sidebar-btn').toggleClass('visible1');
        $('#sidebar').toggleClass('visible');
    });    
    var accordion = document.querySelector('#sidebar');
    accordion.addEventListener('click', function (event) {
        var item = event.target;       
        if (item.nextElementSibling.style.display == 'block') {
            $(".pages").hide();
            $(".galery").hide();
            $(".blog").hide();
        } else {
            $(".pages").hide();
            $(".galery").hide();
            $(".blog").hide();
            item.nextElementSibling.style.display = 'block';
        }
    });
    

    for(var i=0; i<3; i++){
        var ellipse=createEle
$(".ellipse").appendTo("ellipses");

console.log("a")
    }
 });


