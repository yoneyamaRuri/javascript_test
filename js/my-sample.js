  (function(){
    $('#name').focus(function(){
      $(this).css('background', 'punk');
    })
    $('name').blur(function(){
      $(this).css('background', 'white');
    });
  })();
