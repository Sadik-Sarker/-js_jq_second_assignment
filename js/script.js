$(document).ready(function(){
    // hide
    $('#btnhide').click(function(){
        $('.redbox1').hide(1000);
    });
    // show
    $('#btnshow').click(function(){
        $('.redbox1').show(1000);
    });
    // toggle
    $('#s_h_toggle').click(function(){
        $('.redbox1').toggle(1000);
    });
    // addclass
    $('#addclass').click(function(){
        $('#addclassp').addClass('yellowbg');
    });
    // removeClass
    $('#removeclass').click(function(){
        $('#addclassp').removeClass('yellowbg');
    });
    // fade out
    $('#fadeoutbtn').click(function(){
        $('.redbox2').fadeOut();
    });
    // fade in
    $('#fadeinbtn').click(function(){
        $('.redbox2').fadeIn(1000);
    });
    // fade toggle
    $('#fadetglbtn').click(function(){
        $('.redbox2').fadeToggle();
    });
    // fadeTo
    $('#fadetobtn').click(function(){
        $('.redbox2').fadeTo(1000, 0.5);
    });
    // slidetoggle
    $('#question').click(function(){
        $('#answer').slideToggle();
    });
    $('#question2').click(function(){
        $('#answer2').slideToggle();
    });
    // draggable1
    $( "#draggable1" ).draggable();
    // draggable2 & 3
    $( "#draggable2" ).draggable({ axis: "y" });
    $( "#draggable3" ).draggable({ axis: "x" });
    // accordion
    $( "#accordion" ).accordion({
        collapsible: true,
        icons: { "header": "ui-icon-help", "activeHeader": "ui-icon-check" },
        event: "click",
        animate: 2000,
        active:1,
      });

});