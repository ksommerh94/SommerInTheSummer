var slideIndex = 1;
//get modal opening buttons
var modal_btn = document.querySelectorAll('.modal-btn-open');

modal_btn.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = 'block';
  };
});


var close_modal = document.querySelectorAll(".modal-btn-close");
close_modal.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.closest(".modal-container").style.display = 'none';
  };
});

window.addEventListener("DOMContentLoaded", event => {

  showDivs(slideIndex);
  //When passing parameter values, use an "anonymous function" that calls the specified function with the parameters:
  document.getElementById("btn-prev").addEventListener("click", function(){ plusDivs(-1); });
  document.getElementById("btn-next").addEventListener("click", function(){ plusDivs(1); });


})
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    //restarts
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
