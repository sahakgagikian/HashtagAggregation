// Get the modal

/* $(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon').toggleClass('open');
  });
});
 */
var modal = document.getElementById("modal");
var about = document.getElementById("about");
var span = document.getElementsByClassName("close")[0];

about.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


var note = document.getElementById("note");
var leaveNote = document.getElementById("leave-note");
var submit = document.getElementById("submit");

leaveNote.onclick = function() {
  note.style.display = "block";
}

submit.onclick = function() {
  note.style.display = "none";
}



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
