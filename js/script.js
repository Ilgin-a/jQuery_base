$(function() {
   // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
 /*   $(".red-box").fadeOut(2000);
   $(".green-box").fadeOut(2000);
   $(".red-box").fadeIn(1000);
   $(".red-box").fadeTo(1000, 0.5);
   $(".blue-box").hide(1000);
   $(".blue-box").show();
   $(".blue-box").slideUp(2000);
   $(".blue-box").slideDown(2000);
   $("p").hide();
   $("p").slideDown(1000);
   // $("p").slideToggle();
   $(".blue-box").animate({
      "margin-left": "+=200px",
      
   }, 1000, "linear");
   $(".blue-box").animate({
     // "margin-left": "-=200px",
      "opacity": "0",
      "height": "50px",
      "width": "50px",
      "margin-top": "25px"
   }, 1000);

   $("p").animate({
      fontSize: "20px"
   }, 1000) */

  /*  $(".red-box").fadeTo(1000, 0.2);
   $(".green-box").delay(1000).fadeTo(1000, 0.5);
   $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn(); */

/* $(".red-box").fadeTo(1000, 0, function() {
   $(".green-box").fadeTo(1000, 0, function() {
      $(".blue-box").fadeTo(1000, 0);
   });
}); */

// $(".lightbox").delay(500).fadeIn(1000);

/* $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
$("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
$("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)"); */

var galleryImage = $(".gallery").find("img").first();
var images = [
   "images/laptop-mobile_small.jpg",
   "images/laptop-on-table_small.jpg",
   "images/people-office-group-team_small.jpg"
];

var i = 0;
setInterval(function(){
i = (i + 1) % images.length;
galleryImage.fadeOut(function(){
   $(this).attr("src", images[i]);
   $(this).fadeIn();
});
console.log(galleryImage.attr("src"));
}, 2000);


});