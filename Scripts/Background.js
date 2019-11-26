// BACKGROUND SELECTION
var bg;
var textArr = ['Hilly Terrain', 'Midnight City', 'Desert Plains', 'Ranger Forest'];
var imageArray = new Array('Resources/background.jpg', 'Resources/background2.png', 'Resources/background3.jpg', 'Resources/background4.png');

var i = 0;
var img = 0;
var bgname = document.getElementById('output').textContent = textArr[0];
document.getElementsByTagName('body')[0];

if(bgname === 'Hilly Terrain')
{
  document.body.style.backgroundImage = "url('"+ imageArray[0]+"')";
  bg = imageArray[0];
  sessionStorage.setItem("gamebackground", bg);
}

function Next() {
    i += 1; // increase i by one
    img += 1;
    i = i % textArr.length; // if we've gone too high, start from `0` again
    img = img % imageArray.length;
    document.getElementById('output').textContent = textArr[i];
    document.body.style.backgroundImage = "url('"+ imageArray[img]+"')";
    // the current item of where we are now
    bg = imageArray[img];
    // save image in browser to use in gameplay
    sessionStorage.setItem("gamebackground", bg);
}

function Previous() {
    if (i === 0) { // i would become 0
        i = textArr.length; // so put it at the other end of the array
        img = imageArray.length;
    }
    i -= 1; // decrease by one
    img -= 1;
    document.getElementById('output').textContent = textArr[i];
    document.body.style.backgroundImage = "url('"+ imageArray[img]+"')";
    // the current item of where we are now
    bg = imageArray[img];
    // save image in browser to use in gameplay
    sessionStorage.setItem("gamebackground", bg);
}
