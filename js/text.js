(function(){
  //1.headerを1秒後hideで消す
  $('header').hide(1000);

  //2.headerを1秒後showで表示
  $('header').show(1000);

  //3.btn_3のボタンをダブルクリックでfooterに文字を入れる
  $("#btn_3") .dblclick(function(){
    $('footer').text("ボタンをダブルクリックしましたね(・∀・)？");
  });

  //4.btn_4をクリックしたらid="result"に対して点滅するように記述
  //追加:"id="resultの下に文字を追加する
  $("#btn_4").click(function(){
    setTimeout(function() {
    $('#result').fadeOut('slow', function() {
      $(this).fadeIn('slow');
      $(this).text('Now Loading...');
    });
  }, 2000);
  });

  //5.btn_5をクリックするとliの文字を赤とフォントを10px
  $("#btn_5").click(function(){
    $('li').css({'color': '#fff', 'font-size': '10'});
  });

  //6.btn_6をクリックするとliの四角を角丸に変更
  //※あとで答え確認する
  $("#btn_6").click(function(){
    $('#menu li').addClass('changed');
  });

  //7.btn_7をクリックするとliの背景をskyblueに変更
  $("#btn_7").click(function(){
    $('li').css('background', 'skyblue');
  });

  //8.btn_8をクリックするとliの背景をgrayにし、クリックをoffにする
  $("#btn_8").click(function(){
    $("li").css('background', 'gray');
    $("#btn_8").replaceWith('<div>背景をgrayにし、クリックをoff</div>');
  });

})();
