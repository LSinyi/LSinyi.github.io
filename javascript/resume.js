//slideshow
// $(function(){
// 	$('.carousel').carousel({
// 		interval: 3000
// 	});
// })

$(function() {
	$.backstretch([
          "style/images/16.jpg"
        , "style/images/20.jpg"
        , "style/images/22.jpg"
      ], {duration: 3000, fade: 750});

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
