$(function () {

    //var isRunning = true
    window.addEventListener('keydown',function (e){
      var key = e.keyCode;
      if(key === 80)
      {
        togglePause();
      }
    });

    window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
})();


    the_game = function () {



        if (check_carrot_hits_floor(carrot1) || check_carrot_hits_basket(carrot1)) {
            set_carrot_to_initial_position(carrot1);
        } else {
            carrot_down(carrot1);
        }

        if (check_carrot_hits_floor(carrot2) || check_carrot_hits_basket(carrot2)) {
            set_carrot_to_initial_position(carrot2);
        } else {
            carrot_down(carrot2);
        }

        if (check_carrot_hits_floor(carrot3) || check_carrot_hits_basket(carrot3)) {
            set_carrot_to_initial_position(carrot3);
        } else {
            carrot_down(carrot3);
        }

        // if(isPaused){
        //   Update();
        // }
        // else{
        //   requestAnimFrame(the_game);
        // }

        if(!isPaused && life > 0)
        {
          anim_id = requestAnimationFrame(the_game);

        }
        else if(isPaused && life > 0){
          //anim_id = requestAnimFrame(the_game);
          cancelAnimationFrame(anim_id);

        }
        else{
          stop_the_game();
        }

        // if(isPaused && life > 0)
        // {
        //   anim_id = requestAnimFrame(the_game);
        //   cancelAnimationFrame(anim_id);
        // }
        // else if(!isPaused && life > 0){
        //   //anim_id = requestAnimFrame(the_game);
        //   requestAnimFrame(the_game);
        // }
        // else{
        //   stop_the_game();
        // }

        // if (!isPaused && life > 0) {
        //     anim_id = requestAnimationFrame(the_game);
        //   }else if(isPaused){
        //     Update();
        //   }
        //  else {
        //     stop_the_game();
        // }
        // if (isRunning && life > 0) {
        //     //anim_id = requestAnimationFrame(the_game);
        //     requestAnimFrame(the_game);
        // }
        // else if (!isRunning && life > 0){
        //
        // }
        // else if (isRunning && life <= 0) {
        //     stop_the_game();
        // }




    };


    anim_id = requestAnimationFrame(the_game);

});
