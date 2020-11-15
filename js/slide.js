var $slide = $('.slide'),
    $slideGroup = $('.slide-group'),
    $viewImg = $('.view-item img'),
    $viewContainer = $('.view-container'),
    $bullet = $('.bullet'),
    $desc = $('.desc'),
    $cate = $('.cate'),
    $num = $('.num'),
    $numGroup = $('.num-group'),
    main = document.querySelector('.main');

var slidesTotal = ($slide.length - 1),
    viewImgsTotal = ($viewImg.length - 1),
    descTotal = ($desc.length - 1),
    numTotal = ($num.length - 1),
    current = 0,
    isAutoSliding = true;

$bullet.first().addClass('current');

// setTimeout(function(){
//   console.log('Works!'); 
//   main.classList.add('show-all');
// },1000);

var clickSlide = function() {
  //stop auto sliding
  window.clearInterval(autoSlide);
  isAutoSliding = false;

  var slideIndex = $bullet.index($(this));

  updateIndex(slideIndex);
};

var updateIndex = function(currentSlide) {
  if(isAutoSliding) {
    if(current === slidesTotal) {
      current = 0;
    } else {
      current++;
    }
  } else {
      current = currentSlide;
  }

  if(isAutoSliding) {
    if(current === viewImgsTotal) {
      current = 0;
    }
  } else {
      current = currentSlide;
  }

  if(isAutoSliding) {
    if(current === descTotal) {
      current = 0;
    }
  } else {
      current = currentSlide;
  }

  if(isAutoSliding) {
    if(current === numTotal) {
      current = 0;
    }
  } else {
      current = currentSlide;
  }

  $bullet.removeClass('current');
  $bullet.eq(current).addClass('current');

  transition(current);
};

var transition = function(slidePosition) {
    $slideGroup.animate({
      'top': '-' + slidePosition + '00%'
    });
    $viewContainer.animate({
      'top' : '-' + slidePosition + '00%'
    });
    $cate.animate({
      'top': '-' + slidePosition + '00%'
    });
    $numGroup.animate({
      'top': '-' + slidePosition + '00%'
    });
    // $viewContainer.animate({
    //   'top': '-' + slidePosition + '00%'
    // });
};

$bullet.on( 'click', clickSlide);


var autoSlide = window.setInterval(updateIndex, 4000);