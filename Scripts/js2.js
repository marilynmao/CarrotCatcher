//File editing
const fs = require('fs');

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
