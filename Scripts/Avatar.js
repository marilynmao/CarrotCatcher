function selectAvatar()
{
  window.location.href = 'selectAvatar.html';
}

function avatarCache(base, first, last) {
  this.cache = [];
  var img;
  for (var i = first; i <= last; i++) {
    img = new Image();
    img.src = base + i + ".png";
    this.cache.push(img);
  }
}

var myAvatarCache = new avatarCache('Resources/char', 0, 7);


function nextChar() {
  var img = document.getElementById("currentChar");
  var cache = myAvatarCache;
  for(var i = 0; i < myAvatarCache.length; i++) {
    if(myAvatarCache[i].src === img.src) {
      if(i === (myAvatarCache.length - 1)) { //if at the last, back to first avatar
        document.getElementById("currentChar").src = myAvatarCache[0].src;
        break;
      }
      document.getElementById("currentChar").src = myAvatarCache[i+1].src;
      break;
    }
  }
}

function prevchar() {
  var img = document.getElementById("currentChar");
  var cache = myAvatarCache;
  for(var i = 0; i < myAvatarCache.length; i++) {
    if(myAvatarCache[i].src === img.src) {
      if(i === 0) { //if at the first, back to last avatar
        document.getElementById("currentChar").src = myAvatarCache[myAvatarCache.length - 1].src;
        break;
      }
      document.getElementById("currentChar").src = myAvatarCache[i-1].src;
      break;
    }
  }
}
