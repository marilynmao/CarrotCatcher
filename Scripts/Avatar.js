function selectAvatar()
{
  window.location.href = 'selectAvatar.html';
}

function avatarArray(array, base, first, last) {
  var img;
  for (var i = first; i <= last; i++) {
    img = new Image();
    img.src = base + i + '.png';
    array[i] = img;
  }
}

// var img = document.getElementById("currentChar").src;

var myAvatarArray = [];
avatarArray(myAvatarArray, 'Resources/char', 0, 7);

function nextChar() {
  var img = document.getElementById("currentChar").src;
  for(var i = 0; i < myAvatarArray.length; i++) {
    if(myAvatarArray[i].src === img) {
      if(i === (myAvatarArray.length - 1)) { //if at the last, back to first avatar
        img = myAvatarArray[0].src;
        break;
      }
      img = myAvatarArray[i+1].src;
      break;
    }
  }
  document.getElementById("currentChar").src = img;
}

function prevChar() {
  var img = document.getElementById("currentChar").src;
  for(var i = 0; i < myAvatarArray.length; i++) {
    if(myAvatarArray[i].src === img) {
      if(i === 0) { //if at the first, back to last avatar
        img = myAvatarArray[myAvatarArray.length - 1].src;
        break;
      }
      img = myAvatarArray[i-1].src;
      break;
    }
  }
  document.getElementById("currentChar").src = img;
}
