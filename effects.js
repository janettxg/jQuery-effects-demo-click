$('button').on("click", function(){
    $('div').slideToggle(1000, function(){
        $(this).remove();
        //console.log("slide is done!");
    });
});