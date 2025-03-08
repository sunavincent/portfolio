// $(document).ready(function () {
//     // Function to check screen width and switch image to square type

//     $(function() {
//         if($(window).width() < 568){
//             $(".img-fluid").each(function(){
//                 $(this).attr("src","./assets/images/mmr2.jpg");
//             })

//         }
//     })
  
//   });

$(document).ready(function () {
    let resizeTimer;
  
    function switchImages() {
      const isSmallScreen = $(window).width() < 568;
  
      $(".img-fluid").each(function () {
        const currentSrc = $(this).attr("src");
        let newSrc;
  
        if (isSmallScreen) {
          newSrc = currentSrc.replace("1.jpg", "2.jpg");
        } else {
          newSrc = currentSrc.replace("2.jpg", "1.jpg");
        }
  
        $(this).attr("src", newSrc);
      });
    }
  
    // Call the function on page load
    switchImages();
  
    // Call the function on window resize with debouncing
    $(window).resize(function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        switchImages();
      }, 250); // Adjust the delay as needed
    });
  });