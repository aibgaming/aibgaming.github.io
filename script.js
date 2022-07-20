// // $(document).on("scroll", function() {
// //     var pageTop = $(document).scrollTop();
// //     var pageBottom = pageTop + $(window).height();
// //     var tags = $(".tag");
  
// //     for (var i = 0; i < tags.length; i++) {
// //       var tag = tags[i];
  
// //       if ($(tag).position().top < pageBottom) {
// //         $(tag).addClass("visible");
// //       } else {
// //         $(tag).removeClass("visible");
// //       }
// //     }
// //   });

// const timer = document.querySelector('#time span')

// setInterval(() => {
// 	timer.innerText = new Date().toLocaleString()
// }, 1000)

$(window).on("load",function() {
	$(window).scroll(function() {
	  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
	  $(".faded").each(function() {
		/* Check the location of each desired element */
		var objectBottom = $(this).offset().top + $(this).outerHeight();
		
		/* If the element is completely within bounds of the window, fade it in */
		if (objectBottom < windowBottom) { //object comes into view (scrolling down)
		  if ($(this).css("opacity")==0.25) {$(this).fadeTo(500,1);}
		} else { //object goes out of view (scrolling up)
		  if ($(this).css("opacity")==1) {$(this).fadeTo(500,0.25);}
		}
	  });
	}).scroll(); //invoke scroll-handler on page-load
  });

  