function selectAvatar()
{
  window.location.href = 'selectAvatar.html';
}

function avatarArray(array, base, first, last) {
  var img;
  var avatarURL = [];
  for (var i = first; i <= last; i++) {
    img = new Image();
    var url = base + i + '.png';
    img.src = url;
    array[i] = img;
    avatarURL[i] = url;
  }
  return avatarURL;
}

var myAvatarArray = [];
var avatar;
var avatarURL = avatarArray(myAvatarArray, 'Resources/char', 0, 7);

function nextChar() {
  var img = document.getElementById("currentChar").src;
  for(var i = 0; i < myAvatarArray.length; i++) {
    if(myAvatarArray[i].src === img) {
      if(i === (myAvatarArray.length - 1)) { //if at the last, back to first avatar
        img = myAvatarArray[0].src;
        avatar = avatarURL[0];
        break;
      }
      img = myAvatarArray[i+1].src;
      avatar = avatarURL[i+1];
      break;
    }
  }
  document.getElementById("currentChar").src = img;
  sessionStorage.setItem("avatar", avatar);
}

function prevChar() {
  var img = document.getElementById("currentChar").src;
  for(var i = 0; i < myAvatarArray.length; i++) {
    if(myAvatarArray[i].src === img) {
      if(i === 0) { //if at the first, back to last avatar
        img = myAvatarArray[myAvatarArray.length - 1].src;
        avatar = avatarURL[avatarURL.length - 1];
        break;
      }
      img = myAvatarArray[i-1].src;
      avatar = avatarURL[i-1];
      break;
    }
  }
  document.getElementById("currentChar").src = img;
  sessionStorage.setItem("avatar", avatar);
}
