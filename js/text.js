(function(){
  $("#q46_button").click(function(){
      var val = Number($("#q46_val").val());
      var subject = Number($("#subject").val());
      var counting = $("#q46_select option:selected").val();

      switch (counting) {
        case "addition": funcAddition(val, subject);
          break;
        case "subtraction": funcSubtraction(val, subject);
          break;
        case "multiplication": funcMultiplication(val, subject);
          break;
        case "division": funcDivision(val, subject);
          break;
      }
  });
      console.log(q46_answer);
  function funcAddition(val,subject){
        var answer = (val + subject);
        $("p#q46_answer").append(answer);
      }
  function funcSubtraction(val,subject){
        var answer = (val - subject);
        $("p#q46_answer").append(answer);
        }
  function funcMultiplication(val,subject){
        var answer = (val * subject);
        $("p#q46_answer").append(answer);
        }
  function funcDivision(val,subject){
        var answer = (val / subject);
        $("p#q46_answer").append(answer);
    }

  })();
