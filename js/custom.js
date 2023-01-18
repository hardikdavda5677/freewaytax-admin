(function ($) {
    "use strict";
  
    $(document).ready(function () {
      headerStick(); 
    }); 
    function headerStick() {
      const burger = document.getElementById("burger");
      const ul = document.querySelector("nav ul");
      burger.addEventListener("click", () => {
        burger.classList.toggle("show-x");
        menuList.classList.toggle("show");
        if($('.burger').hasClass('show-x')){
          $('body').addClass('main-body');
        }
        else{
          $('body').removeClass('main-body');
        }
      }); 
    } 
    // First we detect the click event
    $(document).ready(function () {
    $('.next').click(function () {
      $('.open_form').addClass('back_form');
      $('.open_form').removeClass('open_form').next().addClass('open_form');
      $('.formList').removeClass('formList').removeClass('active').next().addClass('active').addClass('formList');
      $("li.formList").prevAll().addClass('fillactive');
      if ($('.open_form').hasClass('last')) {
          $('.next').css('display', 'none');
      }
      $('.prev').css('display', 'block');
  });
  $('.prev').click(function () {
      $('.open_form').prev().removeClass('back_form');
      $('.open_form').removeClass('open_form')
          .prev().show().addClass('open_form');
      $('.formList').removeClass('formList').removeClass('active').prev().addClass('active').addClass('formList');

      $("li.formList").removeClass('fillactive');

      if ($('.open_form').hasClass('first')) {
          $('.prev').css('display', 'none');
      }
      $('.next').css('display', 'block');
  });
});
$(document).ready(function(){
  $('.progressWrapper progress').each(function(){
    var prgsVal = $(this).data('value');
    var maxN = $(this).attr('max');
    var pop = prgsVal/maxN * 100
    
    $(this).prev().css('left', pop + '%').text(prgsVal);
    $(this).val(prgsVal);
  });
});

 
})(jQuery);  

