 $(function() {
  var active, bounceButton = $('.nav-li');
  
    bounceButton.click(function(){
       bounceButton.removeClass('bounce');
       $(this).addClass('bounce');
       

    });

    
  });