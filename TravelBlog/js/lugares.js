var slideIndex = 1;
showDivs(slideIndex);

//move slicer to slicer index -1 or +1
function plusDivs(n) {
  showDivs(slideIndex += n);
}
window.addEventListener("DOMContentLoaded", event => {
  //When passing parameter values, use an "anonymous function" that calls the specified function with the parameters:
  document.getElementById("btn-prev").addEventListener("click", function(){ plusDivs(-1); });
  document.getElementById("btn-next").addEventListener("click", function(){ plusDivs(1); });
})

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
