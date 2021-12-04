//get modal opening buttons
var modal_btn = document.querySelectorAll('.modal-open');
modal_btn.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = 'block';
  };
});


var close_modal = document.querySelectorAll(".modal-close");
close_modal.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.closest(".modal").style.display = 'none';
  };
});
