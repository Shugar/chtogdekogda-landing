$(document).ready(function () {
    $('.try').css({'border': '2px','border-color': '#2387F3', 'border-style': 'solid'});
    $('.content1').show();
    $('.content2').hide();
    $(".content3").hide();
    $(".call").click(function () {
        $('.call').css({'border': '2px','border-color': '#2387F3', 'border-style': 'solid'});
        $('.buy').css({'border': '2px', 'border-color': '#ffffff', 'border-style': 'dotted'});
        $('.try').css({'border': '2px', 'border-color': '#ffffff', 'border-style': 'dotted'});
        $('.content1').hide();
        $('.content2').show();
        $('.content3').hide();
    });
    $(".buy").click(function () {
        $('.buy').css({'border': '2px','border-color': '#2387F3', 'border-style': 'solid'});
        $('.call').css({'border': '2px', 'border-color': '#ffffff', 'border-style': 'dotted'});
        $('.try').css({'border': '2px', 'border-color': '#ffffff', 'border-style': 'dotted'});
        $('.content1').hide();
        $('.content2').hide();
        $('.content3').show();
    });
    $(".try").click(function () {
    $('.try').css({'border': '2px','border-color': '#2387F3', 'border-style': 'solid'});
    $('.call').css({'border': '2px', 'border-color': '#ffffff', 'border-style': 'dotted'});
    $('.buy').css({'border': '2px', 'border-color': '#ffffff', 'border-style': 'dotted'});
    $('.content1').show();
    $('.content2').hide();
    $(".content3").hide();
    });
})

