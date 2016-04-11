var main = function(){
    $.getScript("../static/jtab/jtab.js").done(function() {
        console.log("jTab loaded successfully");
    });

    $('#search').click(function(){
        jtab.render($('.chords'), $('#chordsearch').val());
    });

    $(document).keypress(function(e) {
        if(e.which == 13) {
            jtab.render($('.chords'), $('#chordsearch').val());
        }
    });
}
$(document).ready(main);

