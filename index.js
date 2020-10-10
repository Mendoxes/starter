
function myFunction() {
  var div = document.getElementById("blackcat");
  var rect = div.getBoundingClientRect();
  x = rect.left;
  y = rect.top;
  w = rect.width;
  h = rect.height;
  alert ("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);
}


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 800) {
      $("#blackcat").addClass("test");
    $("#blackcat").removeClass("test2");}


    if($(document).scrollTop() < 800 )
    {   $("#blackcat").addClass("test2");
$("#blackcat").removeClass("test");
  }


      if($(document).scrollTop() > 1500 )
      {   $("#blackcat").addClass("test2");
  $("#blackcat").removeClass("test");
    }

    if ($(document).scrollTop() > 2400) {
      $("#blackcat").addClass("test");
    $("#blackcat").removeClass("test2");}


    if($(document).scrollTop() > 3400 )
    {   $("#blackcat").addClass("test2");
$("#blackcat").removeClass("test");
$("#blackcat").removeClass("test3");
  }

  if($(document).scrollTop() > 4800 )
  {   $("#blackcat").addClass("test3");
$("#blackcat").removeClass("test2");
}

}
    //  else {
    //   $("p").removeClass("test");
    // }
  );
});


// var x =  1000 ;
// var y = 1 ;
// while ( x > y ){
// y = y + 1 ;
//   lolo();
// }
//
// function lolo() {const el = document.querySelector('.blackcat');
// // get scroll position in px
// console.log(el.offsetLeft, el.offsetTop);}




// const debounce = (fn) => {
//
//   // This holds the requestAnimationFrame reference, so we can cancel it if we wish
//   let frame;
//
//   // The debounce function returns a new function that can receive a variable number of arguments
//   return (...params) => {
//
//     // If the frame variable has been defined, clear it now, and queue for next frame
//     if (frame) {
//       cancelAnimationFrame(frame);
//     }
//
//     // Queue our function call for the next frame
//     frame = requestAnimationFrame(() => {
//
//       // Call our function and pass any params we received
//       fn(...params);
//     });
//
//   }
// };
//
//
// // Reads out the scroll position and stores it in the data attribute
// // so we can use it in our stylesheets
// const storeScroll = () => {
//   document.documentElement.dataset.scroll = window.scrollY;
// }
//
// // Listen for new scroll events, here we debounce our `storeScroll` function
// document.addEventListener('scroll', debounce(storeScroll), { passive: true });
//
// // Update scroll position for first time
// storeScroll();


// window.onscroll = function () {
//   window.scroll(0,800)
//    behavior: 'smooth'
//    ;}

//
// window.onscroll = function(e) {
//   // print "false" if direction is down and "true" if up
// var scrollz = (this.oldScroll > this.scrollY);
//   this.oldScroll = this.scrollY;
//
//   console.log(scrollz);
//
//   if (scrollz = "false"){
//
//     window.scroll(200,1800);
//   }


// }

// document.addEventListener('keydown', logKey);
//
// function logKey(e) {
//   console.log("dupa");
//    window.scroll(0,1800);

document.addEventListener('keydown', logKey);

function logKey(e) {
  console.log("dupa");
  window.scrollBy(0, 800);
}


var h= 0;
function catfunk() {

  document.getElementById("catlog").innerHTML = 2;
}

(function () {
  var elements;
  var windowHeight;
  var count = 0;
count = count +1;


  function init() {
    elements = document.querySelectorAll('.hidden' + count);
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {

      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element' + count);
        element.classList.remove('hidden' + count);
      }
      }
    }


  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();}
)();




(function () {
  var elements;
  var windowHeight;
  var count = 0;
count = count +2;


  function init() {
    elements = document.querySelectorAll('.hidden' + count);
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {

      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element' + count);
        element.classList.remove('hidden' + count);
      }
      }
    }


  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();}
)();



(function () {
  var elements;
  var windowHeight;
  var count = 0;
count = count +3;


  function init() {
    elements = document.querySelectorAll('.hidden' + count);
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {

      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element' + count);
        element.classList.remove('hidden' + count);
      }
      }
    }


  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();}
)();

//funkcja do 4 kolumn


(function () {
  var elements;
  var windowHeight;
  var count = 0;
count = count +4;


  function init() {
    elements = document.querySelectorAll('.hidden' + count);
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {

      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element' + count);
        element.classList.remove('hidden' + count);
      }
      }
    }


  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();}
)();




(function () {
  var elements;
  var windowHeight;
  var count = 0;
count = count +5;


  function init() {
    elements = document.querySelectorAll('.hidden' + count);
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {

      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element5');
        element.classList.remove('hidden5');
      }
      }
    }


  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();}
)();
