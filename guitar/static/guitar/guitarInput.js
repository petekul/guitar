var main = function(){

    $('.test').click(function(){
        $('.tabinput').fadeOut(500);
        $('.tabinput').fadeIn(500);

        var tabData = $('.tabinput').serializeArray();
        console.log(tabData);

    });

    $('.submit').click(function(){
        var input = $('.tab').val();

    });

    $(".dropdown .title").click(function () {
      $(this).parent().toggleClass("closed");
    });

    $(".dropdown li").click(function () {
      $(this).parent().parent().toggleClass("closed").find(".title").text($(this).text());
    });

}
$(document).ready(main);





