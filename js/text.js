(function(){
  function funcColorName(colorName){
    $("#q48").css('color', colorName);
  }

  $("button").click(function(){
    funcColorName('red');
  });
})();
// 色名（例：red）を代入した変数名「colorName」を引数に入れたら
// id名「q48」の文字色をcolorName変数の色に変えるユーザー定義関数名「funcColorName」を作成
// class名「button」をクリックしたら「funcColorName」関数を発動せよ
