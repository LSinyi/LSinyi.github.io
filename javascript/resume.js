//modal
function open_modal(content) {
    var a = $('#model-common');
    var b = a.find('.modal-body');
    var c = $('#' + content);

    var d = c.html();
    b.empty().html(d); //放入modal-body
    a.modal(); //調用模態框
}

//go-to-top
function scroll_top() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000, "easeInOutCubic");
    return false;
}

//go-top-visible
$(function() {
    var h = $(document).height();
    var over_height = h * 0.2;

    $(window).scroll(function() {
        var scrollval = $(this).scrollTop();
        // console.log(scrollval);

        if (scrollval < over_height) {
            $("#go-top").removeClass('active');
        } else {
            $("#go-top").addClass('active');
        }
    });
});

//scroll-to-article
$(function() {
    $('#left-side .menu .item > a').click(function() {
        var a = $(this).attr('href');

        var b = $('#main-content ' + a);
        // console.log(b);
        var c = b.offset().top;

        $('html, body').animate({
            scrollTop: c
        }, 1000, "easeInOutCubic");
        return false;
    })

});

$(function() {
    new WOW().init(); //wow

    $.backstretch([
        "style/images/bg1.jpg", "style/images/bg2.jpg", "style/images/bg3.jpg","style/images/bg4.jpg"
    ], {
        duration: 3000,
        fade: 750
    });

    /*滑鼠滾動背景變換*/
    // var config = true;
    // while(config){
    // 	$.backstretch([
    //         "http://dl.dropbox.com/u/515046/www/cheers.jpg"
    //     ]);
    //     $.backstretch("pause");

    //     config = false;
    //     break;
    // }

    //    $(window).scroll(function() {
    //        var scrollvalue = $(this).scrollTop();
    //        // console.log(scrollvalue);


    //        if (scrollvalue > 0 && scrollvalue < 500) {
    //            $.backstretch([
    //                "http://dl.dropbox.com/u/515046/www/cheers.jpg"
    //            ], {
    //                fade: 500
    //            });
    //        } else if (scrollvalue >= 500 && scrollvalue < 1000) {
    //            $.backstretch([
    //                "http://dl.dropbox.com/u/515046/www/outside.jpg"
    //            ], {
    //                fade: 500
    //            });
    //        } else if (scrollvalue >= 1000 && scrollvalue < 1500) {
    //            $.backstretch([
    //                "http://dl.dropbox.com/u/515046/www/garfield-interior.jpg"
    //            ], {
    //                fade: 500
    //            });
    //        }
    //    });
});

//slider
$(function() {
    $("#owl-demo").owlCarousel({
        navigation: false, // Show next and prev buttons
        paginationSpeed: 400,
        singleItem: true
    });
});
