(function(){
    var aaa = $("#q47").find("div").map(function() {
        return $(this).attr("id");
    }).get();
    $(".q47").text( aaa );
})();
