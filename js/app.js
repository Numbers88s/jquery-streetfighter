$(document).ready(function() {

    function ryuDefault() {
    $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
	$('.ryu-ready').show();
  })
  .mouseleave(function(){
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.ryu-still').show();
  })
  .mousedown(function(){
    playHadouken();
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
  {'left': '900px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '512px');
  }
);
  })
  .mouseup(function(){
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    //ryu goes back to being a badass
  });
}

ryuDefault();

  $(document).keydown(function(event){
    if(event.which == 88){
        $('.ryu').off();
        $(".ryu-ready").hide();
        $(".ryu-still").hide();
        $(".ryu-throwing").hide();
        $(".ryu-cool").show();
    }
}).keyup(function(event){
    if(event.which == 88){
        $('.ryu-cool').hide();
        if($('.ryu').is(':hover')) {
        $(".ryu-ready").show();
    } else {
        $('.ryu-still').show();
    }
    ryuDefault();
    }});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}