//File editing
const fs = require('fs');

//-----------POP UP SCREEN (MODAL)-----------
// Get the modal
var popup = document.getElementById("popup");

// Get the button that opens the modal
var helpIcon = document.getElementById("helpIcon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
helpIcon.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
//-----------TOGGLE VOLUME-----------
var volumeOnIcon = document.getElementById("volumeOn");
var volumeMuteIcon = document.getElementById("volumeMute");
var audio = document.getElementById("backgroundAudio");

//Mute button will not display at first
volumeMuteIcon.style.display = "none";

volumeOnIcon.onclick = function() {
  volumeMuteIcon.style.display = "inline";
  volumeOnIcon.style.display = "none";
  audio.muted = !audio.muted;
}

volumeMuteIcon.onclick = function() {
  volumeOnIcon.style.display = "inline";
  volumeMuteIcon.style.display = "none";
  audio.muted = !audio.muted;
}

// SCORE SUBMISSION
// get player's name
//var player_name = " ";
function submitScore()
{
  localStorage.setItem("name", document.getElementById("playerName").value);

  window.location.href = "Leaderboard.html";
}

function getPlayerName()
{
  alert(localStorage.getItem("name"));
}
