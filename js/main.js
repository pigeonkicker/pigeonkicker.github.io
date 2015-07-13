/* carousel code */ 

$('.carousel').carousel({
  interval: 3000
})

/* slide show code */ 

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

/* slide show 2 code */ 

$('span.ofNo').html($('.section').length);

    $('span.next').click(function(){
      if($('.active').is('.section:last-child')){
          $('.active').removeClass('active');
                $('div.section').first().addClass('active');           
        }else{  
          $('div.active').removeClass('active').next().addClass('active'); 
        }
      
      $('span.current').html($('.active').index()+1);

    });

    $('span.prev').click(function(){
      if($('.active').is('.section:first-child')){
          $('.active').removeClass('active');
                $('div.section').last().addClass('active');           
        }else{  
          $('div.active').removeClass('active').prev().addClass('active'); 
        }
       $('span.current').html($('.active').index()+1);
    });