$(document).ready(function () {
  $("#mobile-btn").click(function () {
    $("#mobile-menu").toggleClass("active");
    $("#mobile-btn").find('i').toggleClass("fa-x");
  });

  //SELECT SECTION ITEM
  const sections = $('section');
  const navItems = $('.nav-item');

  //FUNCTION TO SELECT SCROLL
  $(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight(); //FIND SCROLL POSITION

    //REMOVE OR ADD SHADOW FROM THE NAVIGATION BAR
    if(scrollPosition <= 0) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
    }

    //MENU ITEM HIGHLIGHT
    let activeSectionIndex = 0;

    sections.each(function(i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96; //FIND SECTION TOP
      const sectionBottom = sectionTop + section.outerHeight(); //FIND SECTION BOTTOM

      //CONDITIONAL FOR CHANGING THE INDEX
      if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    })
    //REMOVE OR ADD ACTIVE CLASS
    $(navItems[activeSectionIndex]).addClass('active').siblings().removeClass('active');

  })

  //SCROLL TO SECTION - SCROLL REVEAL
  ScrollReveal().reveal('#hero', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('.dish-item', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('#testimonials-chef', {
    origin: 'left',
    duration: 1000,
    distance: '20%'
  });

  ScrollReveal().reveal('.feedback', {
    origin: 'right',
    duration: 1000,
    distance: '20%'
  });
})