$(function(){

//menu btn start
    $('.menu-wrapper').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.menu__list').toggleClass('show');
        $('.menu-info').toggleClass('show');
    })
    
//menu btn end

//product__info start

    $('.project__btn').on('click', function() {
        $('.product__info').toggleClass('active');
    })
    $('.close-icon').on('click', function() {
        $('.product__info').removeClass('active');
    })
    $(document).mouseup(function(e) {
      var $target = $(e.target);
      if ($target.closest(".product__info").length == 0) {
          $(".product__info").removeClass("active");
      }
    });

//product__info end

//slider start

   $('.item-box').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.item-slide'
    });
    $('.item-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.item-box',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/arrow.svg" alt=""></button>',
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

//slider end

//magnificPopup start

    $('.item__link').magnificPopup({
      type:'inline',
      midClick: true ,
      closeBtnInside: true
    });
    
  //!!!!!!!!!!!!!!!!!!!
    $("form").submit(function() { 
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", 
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
  //!!!!!!!!!!!!!!!!!!!!!
  //   $('form').submit(function(e) {
  //     $.magnificPopup.open({
  //       items: {
  //           src: '#success', 
  //       },
  //       type: 'inline'
  //     });
  //     e.preventDefault();
  //   });

  //   $('.success-btn').click(function() {
  //     $.magnificPopup.close();
  // });
//magnificPopup end

//maskedinput start 

  $("#phone").mask("+ 7 (999) 999-99-99");
  
//maskedinput end

//jquery form styler start

  $('input[type="checkbox"]').styler();

//jquery form styler end

  
   
});

  

