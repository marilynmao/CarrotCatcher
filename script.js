$(function () {

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

        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);

});
