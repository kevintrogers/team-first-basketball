 $(function() {

  var bounceButton = $('.nav-li');
  
  $(".button-collapse").sideNav();
    
  bounceButton.click(function(){
     bounceButton.removeClass('bounce');
     $(this).addClass('bounce');
     

  });
  

    
  });