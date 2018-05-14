 (function(){
   $("#q46_button").click(function(){
   var val = Number($("#q46_val").val());
   var subject = Number($("#q46_subject").val());
   //var select = Number($("#q46_select").val());

     //var math = ['addition' ,'subtraction', 'multiplication', 'division'];
    $("#q46_answer").text(val + subject);

    console.log(.text);
   });
  })();


//Q45の応用でオペランドＡとオペランドＢに入力した値をselectで選択した計算方法でid名「q46_button」をクリックしたら、
//加算・減算・乗算・除算それぞれの処理関数を作成し条件にあった計算の結果をid名「q46_answer」に出力せよ
// (function(){
//     $("#q46_button").click(function(){
//     var val = Number($("#q46_val").val());
//     var subject = Number($("#q46_subject").val());
//     var counting = $('#q46_select option:selected').val();
//
//     switch(counting){
//         case "addition":
//             funcAddition(val,subject);
//         break;
//         case "subtraction":
//             funcSubtraction(val,subject);
//         break;
//         case "multiplication":
//             funcMultiplication(val,subject);
//         break;
//         case "division":
//             funcDivision(val,subject);
//         break;
//     }
//     });
// //足し算
// function funcAddition(val,subject){
//     var answer = (val + subject);
//     $("p#q46_answer").append(answer)
// }
// //引き算
// function funcSubtraction(val,subject){
//     var answer = (val - subject);
//     $("p#q46_answer").append(answer)
// }
// //掛け算
// function funcMultiplication(val,subject){
//     var answer = (val * subject);
//     $("p#q46_answer").append(answer)
// }
// //割り算
// function funcDivision(val,subject){
//     var answer = (val / subject);
//     $("p#q46_answer").append(answer)
// }
//  // $("#q46_btn").click(function(){ //
//  //   $("#q46_answer").remove();
//  // });
//
// })();
// // 小数点を含む
