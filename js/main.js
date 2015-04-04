var $hamBtn = $('.ham-btn');
var $panel = $('.panel');

var $ai = $('.square-ai');
var $ps = $('.square-ps');
var $id = $('.square-id');
var $ai2 = $('.ai2-icon');
var $ps2 = $('.ps2-icon');
var $id2 = $('.id2-icon');
var $wand = $('.wand');


$hamBtn.on('click', function () {
    $panel.toggleClass('js-panel-open');
});


$ai.on('click', function () {
    $ai.toggleClass('js-square-ai');
});


$ps.on('click', function () {
    $ps.removeClass('js-square-ps');
    $ps.toggleClass('js-wand'); 
});

$wand.on('webkitAnimationEnd animationend', function (){
    $ps.addClass('js-square-ps');
});




$id.on('click', function () {
    $id.toggleClass('js-square-id');
});


$('.desktop-nav').localScroll();

$('.panel').localScroll();




