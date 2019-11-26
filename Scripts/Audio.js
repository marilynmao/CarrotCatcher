//-----------TOGGLE VOLUME-----------
var volumeOnIcon = document.getElementById("volumeOn");
var volumeMuteIcon = document.getElementById("volumeMute");
var audio = document.getElementById("backgroundAudio");

//Mute button will not display at first
sessionStorage.setItem("audio", "on");
if(sessionStorage.getItem("audio") == "muted"){
  volumeOnIcon.style.display = "none";
}
else if(sessionStorage.getItem("audio") == "on"){
  volumeMuteIcon.style.display = "none";
}

volumeOnIcon.onclick = function() {
  sessionStorage.setItem("audio", "muted");
  volumeMuteIcon.style.display = "inline";
  volumeOnIcon.style.display = "none";
  audio.muted = !audio.muted;
}

volumeMuteIcon.onclick = function() {
  sessionStorage.setItem("audio", "on");
  volumeOnIcon.style.display = "inline";
  volumeMuteIcon.style.display = "none";
  audio.muted = !audio.muted;
}
