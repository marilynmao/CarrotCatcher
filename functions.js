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

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function () {
    location.reload();
});
