// update background and avatar
$(window).ready(function(){
  mySound = new sound("/Resources/Sounds/bell.mp3");
  var x = sessionStorage.getItem("gamebackground");
  var y = sessionStorage.getItem("avatar");
  if (sessionStorage.length == 0) {
    document.getElementById("container").style.backgroundImage = "url('/Resources/background.jpg')";
    document.getElementById("basket").style.backgroundImage = "url('/Resources/char0.png')";
  }
  else{
    document.getElementById("container").style.backgroundImage = "url('"+ x + "')";
    document.getElementById("basket").style.backgroundImage = "url('"+ y + "')";
  }
});

$(document).on('mousemove', function (e) {
    basket.css('left', e.pageX);
});

function carrot_down(carrot) {
    carrot_current_position = parseInt(carrot.css('top'));
    carrot.css('top', carrot_current_position + speed);
}

function check_carrot_hits_floor(carrot) {
    if (collision(carrot, floor)) {
        show_miss(carrot);
        decrement_life();
        miss_audio();
        return true;
    }
    return false;
}

function set_carrot_to_initial_position(carrot) {
    carrot.css('top', carrot_initial_position);
}

function show_miss(carrot) {
    miss_num = carrot.attr('data-miss');
    $('#miss' + miss_num).show();
    hide_miss(miss_num);
}

function hide_miss(miss_num) {
    setTimeout(function () {
        $('#miss' + miss_num).hide();
    }, 800);
}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_carrot_hits_basket(carrot) {
    if (collision(carrot, basket)) {
        carrot_top = parseInt(carrot.css('top'));
        if (carrot_top < basket_top) {
            //mySound.play();
            hit_audio();
            update_score();
            return true;
        }
    }
    return false;
}

function update_score() {
    score++;
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
    score_1.text(score);
}

function togglePause(){
  //isRunning = !isRunning;

  isPaused = !isPaused;
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function hit_audio(){
        var audio = document.createElement("audio");
        audio.src = "/Resources/Sounds/bell.mp3";
        audio.addEventListener("ended", function () {
            document.removeChild(this);
        }, false);
        audio.play();
}

function miss_audio(){
        var audio = document.createElement("audio");
        audio.src = "/Resources/Sounds/snap.mp3";
        audio.addEventListener("ended", function () {
                document.removeChild(this);
        }, false);
        audio.play();
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    //restart.slideDown();

    //Transferring score to submit score screen and then leaderboard
    localStorage.setItem("score", score);
    window.location.href = "ScoreSubmission.html";
}

// restart.click(function () {
//     location.reload();
// });
