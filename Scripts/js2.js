// update background
$(window).ready(function(){
  var b = sessionStorage.getItem("gamebackground");
  if (sessionStorage.length == 0) {
    document.body.style.backgroundImage = "url('/Resources/background.jpg')";
  }
  else{
    document.body.style.backgroundImage = "url('"+ b + "')";
  }
});


//File editing
const fs = require('fs');
// //-----------POP UP SCREEN (MODAL)-----------
// // Get the modal
// var popup = document.getElementById("popup");
//
// // Get the button that opens the modal
// var helpIcon = document.getElementById("helpIcon");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on the button, open the modal
// helpIcon.onclick = function() {
//   popup.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   popup.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == popup) {
//     popup.style.display = "none";
//   }
// }
// //-----------TOGGLE VOLUME-----------
// var volumeIcon = document.getElementById("toggleVolume");
//
// volumeIcon.onclick = function() {
//   if (document.getElementById("toggleVolume").src == "") { //if unmuted/playing sound
//     document.getElementById("toggleVolume").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
//
//   }
//   else { //if on mute
//     document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
//   }
//
// }

// SCORE SUBMISSION
// get player's name
//var player_name = " ";
function submitScore()
{
  localStorage.setItem("name", document.getElementById("playerName").value);
  window.location.href = "Leaderboard.html";
}

function getScore()
{
  localStorage.getItem("score");
}

function getPlayerName()
{
  //alert('test')
  //alert (localStorage.getItem("name"))
  return localStorage.getItem("name");
}
