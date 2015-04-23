var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image); 
$overlay.append($caption);

$("body").append($overlay);



$("#gallery a").click(function(event){
  event.preventDefault();
  $("#gallery").attr("hidden", true);
  var imageLocation = $(this).attr("href");

  $image.attr("src", imageLocation);
  
  $overlay.fadeIn(900);

  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){
  $overlay.fadeOut(900);
  $("#gallery").attr("hidden", false);
});