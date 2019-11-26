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
