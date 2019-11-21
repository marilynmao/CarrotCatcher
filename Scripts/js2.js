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
