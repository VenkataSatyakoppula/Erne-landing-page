// window.onscroll = function() {myFunction()};

// var navbar = document.querySelector(".navbar")
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
/* Login / signup toogle*/
$('.signup-form').hide()
$('.signup').css("background","#fff");
$(".login").click(function(){
  $(".signup-form").hide();
  $(".login-form").show();
  $(".signup").css("background", "#fff");
  $(".login").css("background", "#e9eaea");
});
$(".signup").click(function(){
  $(".signup-form").show();
  $(".login-form").hide();
  $(".login").css("background", "#fff");
  $(".signup").css("background", "#e9eaea");
});

