 $(function() {
  
  var active, bounceButton = $('.nav-li');
  
  
  $(".button-collapse").sideNav();
    
  bounceButton.click(function(){
     bounceButton.removeClass('bounce');
     $(this).addClass('bounce');
     

  });
  
  if (!Modernizr.svg) {
  if (Modernizr.canvas) {
      var canvas = document.createElement("canvas");
      canvas.setAttribute("style", "height:500px;width:300px;");
      canvg(canvas, mySVGImage);
      document.body.appendChild(canvas);
  } else {
      // Do something else, perhaps a fallback to PNG?
  }
} else {
  var svgObj = document.createElement('object');
  svgObj.setAttribute('type', 'image/svg+xml');
  svgObj.setAttribute('data', 'data:image/svg+xml,' + 'img/team-first-logo.svg');
  svgObj.setAttribute('height', '500');
  svgObj.setAttribute('width', '300');
  document.body.appendChild(svgObj);
}

    
  });