(function(){
    var slides = $('.main_slide');
    var counter = $('.main_slide_count span');
    var count = 0;
    slides.click(function(){
        if($(this).hasClass('main_slide_active')) return;
        count = slides.index(this);
        var countText = count + 1 + '/';
        counter.text( '0' + countText);
        $('.main_slide').removeClass('main_slide_active');
        $(this).addClass('main_slide_active');
    });
    $('.main_slide_left_arrow').click(function(){
        event.stopPropagation();
        slides.removeClass('main_slide_active');
        if(count === 0) {
            count = slides.length - 1;
            $(slides[count]).addClass('main_slide_active');
        } else {
            count = count - 1;
            $(slides[count]).addClass('main_slide_active');
        }
        var countText = count + 1 + '/';
        counter.text( '0' + countText);
    });
    $('.main_slide_right_arrow').click(function(){
        console.log('here');
        event.stopPropagation();
        slides.removeClass('main_slide_active');
        if(count === slides.length -1) {
            count = 0;
            $(slides[count]).addClass('main_slide_active');
        } else {
            count = count + 1;
            $(slides[count]).addClass('main_slide_active');
        }
        var countText = count + 1 + '/';
        counter.text( '0' + countText);
    });
})();
$('.main_slide_img_viewer img').click(function(){
    $(this).toggleClass('rotate_img');
});
$('.main_popular_category_img_viewer img').click(function(){
    $(this).toggleClass('rotate_img');
});
(function(){
    $('.main_popular_slider_viewer').slick({
        infinite: true,
        zIndex: 2,
        prevArrow : '<button type="button" class="slick-category slick-prev"><img src="assets/img/slick_l.svg" alt=""></button>',
        nextArrow : '<button type="button" class="slick-category slick-next"><img src="assets/img/slick_r.svg" alt=""></button>',
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1
    });
    $('.slick_d_arrow').click(function(){
        var parent  = $(this).parent();
        parent.toggleClass('main_popular_slider_active');
        $(this).toggleClass('slick_d_arrow_active');
    });
})();


(function(){
    $('.main_reviews_slider').slick({
        infinite: true,
        zIndex: 2,
        arrows: true,
        prevArrow : '<button class="slick-review slick-prev"><img src="assets/img/review_arrow.svg" alt=""></button>',
        nextArrow : '<button class="slick-review slick-next"><img src="assets/img/review_arrow.svg" alt=""></button>',
        speed: 300,
        slidesToShow: 3,
        // adaptiveHeight: true,
        slidesToScroll: 1
    });
})();
// (function() {
//     // Init
//     var targets = $('.main_slide_img_viewer');
//     var inside = $('.main_slide_img_viewer img');
//     // targets.each(function(index){
//     //     console.log(this);
//     //    effect3d(this, inside[index]);
//     // });
//     // $(targets[1]).css({
//     //     // perspective: '170px'
//     // })
//     effect3d(targets[0], inside[0]);
//     effect3d(targets[1], inside[1]);
//     effect3d(targets[2], inside[2]);
//     effect3d(targets[3], inside[3]);
//     function effect3d(con, inn) {
//         var container = con,
//             inner = inn;
//         // Mouse
//         var mouse = {
//             _x: 0,
//             _y: 0,
//             x: 0,
//             y: 0,
//             updatePosition: function(event) {
//                 var e = event || window.event;
//                 this.x = e.clientX - this._x;
//                 this.y = (e.clientY - this._y) * -1;
//                 console.log(this.y);
//             },
//             setOrigin: function(e) {
//                 this._x = e.offsetLeft + Math.floor(e.offsetWidth / 1.7);
//                 this._y = e.offsetTop + Math.floor(e.offsetHeight / 1.7);
//             },
//             show: function() {
//                 return "(" + this.x + ", " + this.y + ")";
//             }
//         };
//
//         // Track the mouse position relative to the center of the container.
//         mouse.setOrigin(container);
//
//         //----------------------------------------------------
//
//         var counter = 0;
//         var refreshRate = 10;
//         var isTimeToUpdate = function() {
//             return counter++ % refreshRate === 0;
//         };
//
//         //----------------------------------------------------
//
//         var onMouseEnterHandler = function(event) {
//             update(event);
//         };
//
//         var onMouseLeaveHandler = function() {
//             inner.style = "";
//         };
//
//         var onMouseMoveHandler = function(event) {
//             if (isTimeToUpdate()) {
//                 update(event);
//             }
//         };
//
//         //----------------------------------------------------
//
//         var update = function(event) {
//             mouse.updatePosition(event);
//             updateTransformStyle(
//                 (mouse.y / inner.offsetHeight / 2).toFixed(2),
//                 (mouse.x / inner.offsetWidth / 2).toFixed(2)
//             );
//         };
//
//         var updateTransformStyle = function(x, y) {
//             var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//             inner.style.transform = style;
//             inner.style.webkitTransform = style;
//             inner.style.mozTranform = style;
//             inner.style.msTransform = style;
//             inner.style.oTransform = style;
//         };
//
//         //--------------------------------------------------------
//
//         container.onmousemove = onMouseMoveHandler;
//         container.onmouseleave = onMouseLeaveHandler;
//         container.onmouseenter = onMouseEnterHandler;
//     }
// })();
