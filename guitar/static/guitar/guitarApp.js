var notePositions = ["1","4.8","11.8","18.2","24.3","30.1","35.55","40.7","45.55","50.1","54.4","58.5","62.3","65.9","69.4","72.65","75.7","78.6"];
var keyposition = 0;
var totalMarkerShift=0;
var sounds;
var guitarsound;
var speed = 250;
var strings = [];
var interval;
var markerDistance = 0;
var startMarker = [{key:"markerpos", value:-1},{key:"linepos", value:0},{key:"scrollpos", value:0},{key:"markedpos", value:0}];
var currentMarker = [{key:"markerpos", value:0},{key:"linepos", value: 0},{key:"scrollpos", value:0}];
var endMarker = [{key:"markerpos", value:-1},{key:"linepos", value:0},{key:"scrollpos", value:0},{key:"markedpos", value:0}];
var tabMidpoint = 0;
var markerFlag = false; muted = false; markersSet = false;

/*
BOOTSTRAP BOOTSTRAP
http://goo.gl/forms/R1NG41v16t
*/



var main = function(){
    $.getScript("../static/howler/howler.js").done(function() {
        console.log("Managed to load script: Howler.js.")
        sounds =  new Howl({
            urls: ["../static/guitar/sounds/Guitar12frets2s.mp3"]

        });
        guitarsound =  new Howl({
            urls: ["../static/guitar/sounds/Guitar20frets2s.mp3"],
            sprite: {
            s6n0: [0, 1800],
            s6n1: [2000, 1800],
            s6n2: [4000, 1800],
            s6n3: [6000, 1800],
            s6n4: [8000, 1800],
            s6n5: [10000, 1800],
            s6n6: [12000, 1800],
            s6n7: [14000, 1800],
            s6n8: [16000, 1800],
            s6n9: [18000, 1800],
            s6n10: [20000, 1800],
            s6n11: [22000, 1800],
            s6n12: [24000, 1800],
            s6n13: [26000, 1800],
            s6n14: [28000, 1800],
            s6n15: [30000, 1800],
            s6n16: [32000, 1800],
            s6n17: [34000, 1800],
            s6n18: [36000, 1800],
            s6n19: [38000, 1800],
            s6n20: [40000, 1800],
            s5n0: [10000, 1800],    //s6n5: [10000, 1800],
            s5n1: [12000, 1800],
            s5n2: [14000, 1800],
            s5n3: [16000, 1800],
            s5n4: [18000, 1800],
            s5n5: [20000, 1800],
            s5n6: [22000, 1800],
            s5n7: [24000, 1800],
            s5n8: [26000, 1800],
            s5n9: [28000, 1800],
            s5n10: [30000, 1800],
            s5n11: [32000, 1800],
            s5n12: [34000, 1800],
            s5n13: [36000, 1800],
            s5n14: [38000, 1800],
            s5n15: [40000, 1800],
            s5n16: [42000, 1800],
            s5n17: [44000, 1800],
            s5n18: [46000, 1800],
            s5n19: [48000, 1800],
            s5n20: [50000, 1800],
            s4n0: [20000, 1800],    //s5n5: [20000, 1800],
            s4n1: [22000, 1800],
            s4n2: [24000, 1800],
            s4n3: [26000, 1800],
            s4n4: [28000, 1800],
            s4n5: [30000, 1800],
            s4n6: [32000, 1800],
            s4n7: [34000, 1800],
            s4n8: [36000, 1800],
            s4n9: [38000, 1800],
            s4n10: [40000, 1800],
            s4n11: [42000, 1800],
            s4n12: [44000, 1800],
            s4n13: [46000, 1800],
            s4n14: [48000, 1800],
            s4n15: [50000, 1800],
            s4n16: [52000, 1800],
            s4n17: [54000, 1800],
            s4n18: [56000, 1800],
            s4n19: [58000, 1800],
            s4n20: [60000, 1800],
            s3n0: [30000, 1800],    //s4n5: [30000, 1800],
            s3n1: [32000, 1800],
            s3n2: [34000, 1800],
            s3n3: [36000, 1800],
            s3n4: [38000, 1800],
            s3n5: [40000, 1800],
            s3n6: [42000, 1800],
            s3n7: [44000, 1800],
            s3n8: [46000, 1800],
            s3n9: [48000, 1800],
            s3n10: [50000, 1800],
            s3n11: [52000, 1800],
            s3n12: [54000, 1800],
            s3n13: [56000, 1800],
            s3n14: [58000, 1800],
            s3n15: [60000, 1800],
            s3n16: [62000, 1800],
            s3n17: [64000, 1800],
            s3n18: [66000, 1800],
            s3n19: [68000, 1800],
            s3n20: [70000, 1800],
            s2n0: [38000, 1800],    //s3n4: [38000, 1800],
            s2n1: [40000, 1800],
            s2n2: [42000, 1800],
            s2n3: [44000, 1800],
            s2n4: [46000, 1800],
            s2n5: [48000, 1800],
            s2n6: [50000, 1800],
            s2n7: [52000, 1800],
            s2n8: [54000, 1800],
            s2n9: [56000, 1800],
            s2n10: [58000, 1800],
            s2n11: [60000, 1800],
            s2n12: [62000, 1800],
            s2n13: [64000, 1800],
            s2n14: [66000, 1800],
            s2n15: [68000, 1800],
            s2n16: [70000, 1800],
            s2n17: [72000, 1800],
            s2n18: [74000, 1800],
            s2n19: [76000, 1800],
            s2n20: [78000, 1800],
            s1n0: [48000, 1800],    //s2n5: [48000, 1800],
            s1n1: [50000, 1800],
            s1n2: [52000, 1800],
            s1n3: [54000, 1800],
            s1n4: [56000, 1800],
            s1n5: [58000, 1800],
            s1n6: [60000, 1800],
            s1n7: [62000, 1800],
            s1n8: [64000, 1800],
            s1n9: [66000, 1800],
            s1n10: [68000, 1800],
            s1n11: [70000, 1800],
            s1n12: [72000, 1800],
            s1n13: [74000, 1800],
            s1n14: [76000, 1800],
            s1n15: [78000, 1800],
            s1n16: [80000, 1800],
            s1n17: [82000, 1800],
            s1n18: [84000, 1800],
            s1n19: [86000, 1800],
            s1n20: [88000, 1800],
            //1:30min
            }
        });
        }).fail(function() {
        console.log("Failed to load Howler.js")
    });

    var maxLeftScroll = 0;
    var tabData = $('.tab').serializeArray()[0].value;
    tabData = tabData.trim();
    $('#tabdata').val(tabData); //remove extra whitespace
    strings = tabData.split("\n");
    setLineTop();
    resizeLinePos();
    calculateTabMidpoint();
    getMaxTabScroll();

    console.log("textarea start: " + $('#tabdata').offset().left + " end is: " + $('#tabdata').width() + " midpoint is " + (24 +($('#tabdata').width()-$('#tabdata').offset().left)/2));
    console.log("max scrollleft = " + $('#tabdata').scrollLeft());
    console.log("max window width: " + $(window).width());

    hideAllNodes();
    hideMarkers();
    calculateDotSize();
    alignCapo();

    $('.play').click(function(){
        if(markerFlag){
            resetLineToMarker(currentMarker);
            resetScrollToMarker(currentMarker);
        }
        markerFlag = false;
        clearInterval(interval);
        interval = setInterval(function(){
            playTab(strings, currentMarker[0].value);
            currentMarker[0].value++;
            $(window).resize(function(){
               calculateDotSize();
               calculateTabMidpoint();
               setLineTop();
            });
        }, speed);
    });

    $('.pause').click(function(){
        clearInterval(interval);
        console.log("Paused at pos:" + currentMarker[0].value);
    });

    $('.stop').click(function(event){
        strings = tabData.split("\n");
        clearInterval(interval);
        currentMarker[0].value=0;
        console.log("stopped. reset to:" + currentMarker[0].value);

        currentMarker[1].value=0;
        currentMarker[2].value=0;
        $('#tabdata').scrollLeft(0);
        hideAllNodes();
        hideMarkers();
        resetMarkers();
        resizeLinePos();
        markersSet = false;
    });

    $('.getsize').click(function(){
        console.log("width:" + $(window).width() +" height:"+ $(window).height());
        console.log("scroll pos: " + $('#tabdata').scrollLeft());
        console.log("line pos: " + $('#line').css("left"));
    });

    $('.setMarker').click(function(){
        console.log("marker set at position: " + currentMarker[0].value);
        if(startMarker[0].value < 0){
            startMarker[0].value = currentMarker[0].value;
//            startMarker[1].value = $('#line').css("left");
            startMarker[1].value = currentMarker[1].value;
            startMarker[2].value = $('#tabdata').scrollLeft();
            startMarker[3].value = currentMarker[1].value;
            placeMarker("s");
        }
        else if(startMarker[0].value != -1 && endMarker[0].value < 0){
            endMarker[0].value = currentMarker[0].value;
//            endMarker[1].value = $('#line').css("left");
            endMarker[1].value = currentMarker[1].value;
            endMarker[2].value = $('#tabdata').scrollLeft();
            endMarker[3].value = currentMarker[1].value;
            placeMarker("e");
            markersSet=true;
        }
        else if(currentMarker[0].value > endMarker[0].value && endMarker[0].value != -1){
            startMarker[0].value = endMarker[0].value;
            startMarker[1].value = parseFloat(endMarker[1].value);
            startMarker[2].value = endMarker[2].value;
            startMarker[3].value = currentMarker[1].value;
            placeMarker("s");
            endMarker[0].value = currentMarker[0].value;
//            endMarker[1].value = $('#line').css("left");
            endMarker[1].value = currentMarker[1].value;
            endMarker[2].value = $('#tabdata').scrollLeft();
            endMarker[3].value = currentMarker[1].value;
            placeMarker("e");
            markersSet=true;
        }
        else if(currentMarker[0].value < endMarker[0].value && currentMarker[0].value > startMarker[0].value){
            startMarker[0].value = currentMarker[0].value;
//            startMarker[1].value = $('#line').css("left");
            startMarker[1].value = currentMarker[1].value;
            startMarker[2].value = $('#tabdata').scrollLeft();
            startMarker[3].value = currentMarker[1].value;
            placeMarker("s");
        }

        markerDistance = (parseFloat(endMarker[1].value) + endMarker[2].value) - (parseFloat(startMarker[1].value) + startMarker[2].value);

        console.log("START marker set at position: " + startMarker[0].value);
        console.log("START line set at position: " + startMarker[1].value);
        console.log("START scroll set at position: " + startMarker[2].value);
        console.log("END marker set at position: " + endMarker[0].value);
        console.log("END line set at position: " + endMarker[1].value);
        console.log("END scroll set at position: " + endMarker[2].value);
    });

    $('.playMarker').click(function(){
        strings = tabData.split("\n");
        if(markersSet){
            markerFlag = true;
            currentMarker[0].value = startMarker[0].value;
            resetLineToMarker(startMarker);

            resetScrollToMarker(startMarker);

            endMarker[1].value = parseFloat(startMarker[1].value) + markerDistance;

            placeMarker("s");placeMarker("e");
            clearInterval(interval);
            interval = setInterval(function(){
                playTab(strings, currentMarker[0].value);
                currentMarker[0].value++;
                currentMarker[2].value = $('#tabdata').scrollLeft();
                $(window).resize(function(){
                   calculateDotSize();
                   calculateTabMidpoint();
                   setLineTop();
                });
                if(currentMarker[0].value==endMarker[0].value){
                    currentMarker[0].value=startMarker[0].value;
                    resetLineToMarker(startMarker);
                }
            }, speed);
        }
    });

    $('.resetMarker').click(function(){
       strings = tabData.split("\n");
       hideMarkers();
       resetMarkers();
       if(typeof interval !== "undefined"){
        clearInterval(interval);
        interval = setInterval(function(){
            playTab(strings, currentMarker[0].value);
            currentMarker[0].value++;
            $(window).resize(function(){
               calculateDotSize();
               calculateTabMidpoint();
               setLineTop();
            });
        }, speed);
       }
    });

    $( "#capo" ).change(function() {
      alignCapo();
    });

    $('.mute').click(function(){

        if(muted){
            Howler.unmute();
            muted=false;
        }
        else{
            Howler.mute();
            muted=true;
        }
        $( "#volslider" ).slider( "value" ) = 0;
    });

    //keypress function to iterate through tab  OBSOLETE.
//    $(window).off().on('keydown',function(e){
//        if(e.which == 39){
//            keyposition++;
//            keypositionNode(strings)
//        }
//        if(e.which == 37){
//            if(keyposition>=0){
//                keyposition--;
//                keypositionNode(strings)
//            }
//        }
//    })


    function playTab(strings, p){
        var existsOnString =[];
        for(var s=1; s <= strings.length; s++){
            var string = strings[s-1];
            var note = string.charAt(p);
                if(note == ""){
                    clearInterval(interval);
                    break;
                }
                if(note != '-' && note != '|' && !isNaN(note)){
                    var nextChar = string.charAt(p+1);
                    if(isCharInt(nextChar)){
                        note = note + nextChar;
                        string = replaceCharAt(string,p+1, "-");
                        strings[s-1] = string;
                    }

                    note = parseFloat(note)  + parseFloat($('#capo').val());
                    var pos = notePositions[note];

                    $('#str' + s).css({
                        "left" : pos + "%"
                    });

                    $('#str' + s).show();

                    var soundSprite = "s" + s + "n" + note;
                    playSound(soundSprite);
                    existsOnString.push(s);
                }
        }
        if(existsOnString.length == 1){
            hideAllNodesExcept(existsOnString);
        }
        else if (existsOnString.length > 1){
            hideAllNodesExceptMultiple(existsOnString);
        }

        if(markerFlag)
            shiftLine("forward");
        else if(currentMarker[0].value == 0)
            {} //do nothing
        else if(parseFloat($('#line').css("Left")) < tabMidpoint)
            shiftLine("forward");
        else if ($('#tabdata').scrollLeft() >= maxLeftScroll)
            shiftLine("forward");
        else if (parseFloat($('#line').css("Left")) > tabMidpoint + 10) {
            scrollTab();
            scrollTab();
            shiftLine("backward");
            shiftMarkerLine();
            shiftMarkerLine();
        }
        else{
            scrollTab();
            shiftMarkerLine();
        }
    }

//      OBSOLETE
//    function keypositionNode(strings){
//        var existsOnString =[];
//        for(var s=1; s <= strings.length; s++){
//            var string = strings[s-1];
//            var note = string.charAt(keyposition);
//            if(note != '-' && note != '|' && !isNaN(note) && note != ""){
//                if(isCharInt(nextChar)){
//                    note = note + nextChar;
//                    string = replaceCharAt(string,p+1, "-");
//                    strings[s-1] = string;
//                }
//                var pos = notePositions[note];
//                if(pos != 0){
//                    $('#str' + s).css({
//                        "left" : pos + "%"
//                    });
//                    $('#str' + s).show("");
//                }
//                var soundSprite = "s" + s + "n" + note;
//                playSound(soundSprite);
//                existsOnString.push(s);
//                }
//        }
//        if(existsOnString.length == 1){
//            hideAllNodesExcept(existsOnString);
//        }
//        else if (existsOnString.length > 1){
//            hideAllNodesExceptMultiple(existsOnString);
//        }
//    }

    function playSound(soundSprite){
        guitarsound.play(soundSprite);
    }

    function resetLineToMarker(marker){
        $('#line').css({"left" : ($('#tabdata').offset().left + 7) + marker[1].value});
        currentMarker[1].value = marker[1].value;
    }

    function resetScrollToMarker(marker){
        $('#tabdata').scrollLeft(marker[2].value);

    }

    function shiftLine(direction){
        var charWidth = 9.6; // in px
        var newleft = 0;


        if (direction == "backward"){
            newleft = ($('#tabdata').offset().left + 7) + (currentMarker[1].value - charWidth);
            currentMarker[1].value -= charWidth;
        }
        else{
            newleft = ($('#tabdata').offset().left + 7) + (currentMarker[1].value + charWidth);
            currentMarker[1].value += charWidth;
        }

        if(newleft >= ($('#tabdata').width() + $('#tabdata').offset().left)){
            //stopShiftingLine
        }
        else{
            $('#line').css({
                "left" : newleft + "px"
            });
        }
    }

    function shiftMarkerLine(){
        var charWidth = 9.6;
        var newsleft = 0; neweleft = 0;

        totalMarkerShift += charWidth;
        newsleft = ($('#tabdata').offset().left + 7) + (startMarker[3].value - charWidth);
        neweleft = ($('#tabdata').offset().left + 7) + (endMarker[3].value - charWidth);

        if(newsleft <=  $('#tabdata').offset().left){
            //stopShiftingLine
        }
        else{
            $('#sline').css({
                "left" : newsleft + "px"
            });
            startMarker[3].value -= charWidth;
        }
        if(neweleft <=  $('#tabdata').offset().left){
            //stopShiftingLine
        }
        else{
            $('#eline').css({
                "left" : neweleft + "px"
            });
            endMarker[3].value -= charWidth;
        }


    }

    function scrollTab(){
        var scrollIncrement = 9.6;
        currentMarker[2].value += scrollIncrement;
        $('#tabdata').scrollLeft(currentMarker[2].value);
    }


    function getMaxTabScroll(){
        $('#tabdata').scrollLeft(99999);
        maxLeftScroll = $('#tabdata').scrollLeft();
        $('#tabdata').scrollLeft(0);
    }

    function calculateTabMidpoint(){
        tabMidpoint = $('#tabdata').offset().left + ($('#tabdata').width() - $('#tabdata').offset().left)/2;
    }

    function setLineTop(){
        $('#line').css({
            "top" : $('#tabdata').offset().top
        });
        $('#sline').css({
            "top" : $('#tabdata').offset().top - 5
        });
        $('#eline').css({
            "top" : $('#tabdata').offset().top - 5
        });
    }
    function resizeLinePos(){
        $('#line').css({
            "left" : ($('#tabdata').offset().left + 7) + currentMarker[1].value
        });
    }

    function resizeMarkerPos(){
        if(markerFlag){
            $('#sline').css({
                "left" : ($('#tabdata').offset().left + 7) + startMarker[1].value
            });
            $('#eline').css({
                "left" : ($('#tabdata').offset().left + 7) + endMarker[1].value
            });
        }
        else{
            $('#sline').css({
                "left" : ($('#tabdata').offset().left + 7) + startMarker[3].value
            });
            $('#eline').css({
                "left" : ($('#tabdata').offset().left + 7) + endMarker[3].value
            });
        }
    }

    function calculateDotSize(){
        var originalWidth = 1280;
        var originalHeight = 678;
        var currentWidth = $(window).width();
        var currentHeight = $(window).height();
        var originalDotSize = 30;

        var heightRatio = originalDotSize/originalHeight;
        var widthRatio = originalDotSize/originalWidth;
        for(var i=1; i<=6; i++){
            $("#str" + i).width(currentWidth*widthRatio); //.height(currentHeight*heightRatio)
        }
    }

    function alignCapo(){

        if($('#capo').val() == '0')
            $('#capoline').hide();
        else{
            $('#capoline').show();
            var leftpos = parseFloat(notePositions[$('#capo').val()]);
            leftpos += 0.75;

            $('#capoline').css({
                "left" : leftpos + "%"
            });

            var originalWidth = 1280;
            var currentWidth = $(window).width();
            var originalCapoWidth = 10;
            var widthRatio = originalCapoWidth/originalWidth;
            $('#capoline').width(currentWidth*widthRatio);
        }

    }

    function placeMarker(str){
        $('#' + str + 'line').show();
        if(str == "s"){
            $('#sline').css({"left": ($('#tabdata').offset().left + 7) + startMarker[1].value});
        }
        if(str == "e"){
            $('#eline').css({"left": ($('#tabdata').offset().left + 7) + endMarker[1].value});
        }
    }

    function resetMarkers(){
        $('#sline').css({"left":0});
        $('#eline').css({"left":0});
        startMarker = [{key:"markerpos", value:-1},{key:"linepos", value:0},{key:"scrollpos", value:0},{key:"markedpos", value:0}];
        endMarker = [{key:"markerpos", value:-1},{key:"linepos", value:0},{key:"scrollpos", value:0},{key:"markedpos", value:0}];
        markersSet = false;
        markerFlag = false;
    }

    function hideMarkers(){
        $('#sline').hide();
        $('#eline').hide();
    }

    function hideAllNodes(){
        for(var i=1;i<=6;i++){
            hideString(i);
        }
    }
    function hideAllNodesExcept(str){
        for(var i=1;i<=6;i++){
                if(i!=str){
                    hideString(i);
                }
        }
    }
    function hideAllNodesExceptMultiple(str){
        for(var i=1;i<=6;i++){
            var exists = false;
            for(var n=0; n<str.length; n++) {
                if(i!=str[n]){
                    exists = true;
                }
                else{
                    exists = false;
                    break;
                }
            }
            if(exists)
                hideString(i);
        }
    }
    function hideString(i){
        $('#str' + i).hide();
    }
    function isCharInt(n){
        return n*0==0;
    }

    function replaceCharAt(str, index, chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }

//dropdown list
    $(".dropdown .title").click(function () {
      $(this).parent().toggleClass("closed");
    });

    $(".dropdown li").click(function () {
      $(this).parent().parent().toggleClass("closed").find(".title").text($(this).text());
    });

    $(document).on('click', '.dropdown-menu li a', function() {
        $('#capo').val($(this).text());
    });





//slider function
$(function() {
    $( "#bpmslider" ).slider({
      range: "min",
      value: 120,
      min: 1,
      max: 360,
      slide: function( event, ui ) {
        $( "#bpmamount" ).val( ui.value );
        clearInterval(interval);
        speed = 30000/ui.value; // calculate milliseconds from BPM.
        if(typeof interval !== "undefined") //check tab is playing first.

            if(markerFlag){
                currentMarker[0].value = startMarker[0].value;
                resetLineToMarker(startMarker);
                resetScrollToMarker(startMarker);
                clearInterval(interval);
                interval = setInterval(function(){
                    playTab(strings, currentMarker[0].value);
                    console.log("playinterval on:" + currentMarker[0].value++);
                    $(window).resize(function(){
                       calculateDotSize();
                       calculateTabMidpoint();
                       setLineTop();
                    });
                    if(currentMarker[0].value==endMarker[0].value){
                        currentMarker[0].value=startMarker[0].value;
                        resetLineToMarker(startMarker);
                    }
                }, speed);
            }
            else{
                if(markerFlag){
                    resetLineToMarker(currentMarker);
                    resetScrollToMarker(currentMarker);
                }
                interval = setInterval(function(){
                    playTab(strings, currentMarker[0].value);
                    currentMarker[0].value++;
                    $(window).resize(function(){
                       calculateDotSize();
                       calculateTabMidpoint();
                       setLineTop();
                    });
                }, speed);
            }

        }
    });
    $( "#bpmamount" ).val($( "#bpmslider" ).slider( "value" ) );
});

$(function() {
    $( "#volslider" ).slider({
      range: "min",
      value: 100,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#volamount" ).val( ui.value );
        var volume = ui.value/100; //Howler volume works on scale 0 - 1.0
        Howler.volume(volume);
      }
    });
    $( "#volamount" ).val($( "#volslider" ).slider( "value" ) );
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(window).resize(function(){
        calculateDotSize();
        calculateTabMidpoint();
        setLineTop();
        resizeMarkerPos();
        resizeLinePos();
});


}

$(document).ready(main);



/*

    .ONCLICK(SETINTERVAL()PLAYCALLBACK() {
        FUNC1()
        FUNC2()
        FUNC3()

    });

add tuning to check tab


survey for next week
SURVEY FOR IMPROVEMENT OF APP. FOR EVAL.
add like scale 0 t 10

what can improve this specific section
3 out of 10 fond difficult to do X

things i learnt section



VIVA

intro app
how i eval
sell app
demo



ask if should be draggable


*/




