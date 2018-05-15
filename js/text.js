(function(){
  $("p.button").click(function(){
      var aaa = $("#q50_box00").children("div").length;
      //「#q50_box00」要素内の子要素divのidを判別
      var i = 0;
      while (i < aaa){
          funcReturnDiv();
          i++;
        }
      });

      function funcReturnDiv(){
        var divID = $("#q50_box00 div:last-child").attr("id").substr(0,5);
        switch (divID){
        case "q50_a":
            var returnDiv = $("#q50_box01").after();
        break;
        case "q50_b":
            var returnDiv = $("#q50_box02").after();
        break;
        case "q50_c":
            var returnDiv = $("#q50_box03").after();
        break;
      }
      $("#q50_box00").children("div:last-child").prependTo(returnDiv);
      }
})();
