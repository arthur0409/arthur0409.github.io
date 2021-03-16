//Slideshow effect

const imgs = document.querySelectorAll(".mycarousel img");
const dots = document.querySelectorAll(".dot i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 5000; // default time for auto slideshow

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

defClass(1, 0);

leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

startAutoSlide(); // Start the slideshow



  "use strict"
  
  var init = "0";
  var counter = 0;

  // Initial Cart
  $(".counter").html(init);
  
  // Add Items To Basket
  function addToBasket() {
    counter++;
    $(".counter").html(counter).animate({
      'opacity' : '0'
    },300, function() {
      $(".counter").delay(300).animate({
        'opacity' : '1'
      })
    })
  }

  // Add To Basket Animation
  $(".addbutton").on("click", function() {
    addToBasket(); $(this).parent().parent().find(".mycard_overlay").css({
      'transform': ' translateY(0px)',
      'opacity': '1',
      'transition': 'all ease-in-out .45s'})
    // }).delay(1500).queue(function() {
    //   $(this).css({
    //     'transform': 'translateY(-500px)',
    //     'opacity': '0',
    //     'transition': 'all ease-in-out .45s'
    //   }).dequeue();
    // });
  });

// Multislider cards

const cardsection = document.querySelectorAll(".cardgroup-section");
const prevbtn = document.querySelector(".prev-btn");
const forwbtn = document.querySelector(".forw-btn");

let currentIndex1 = 0;
let time1 = 5000; // default time for auto slideshow

const sectionPos = (startPos1, index1) => {
  for (let i = startPos1; i < cardsection.length; i++) {
    cardsection[i].style.display = "none";
  }
  console.log("a")
  cardsection[index1].style.display = "flex";
};

sectionPos(1, 0);

prevbtn.addEventListener("click", function(){
  console.log(cardsection.length)
  currentIndex1 <= 0 ? currentIndex1 = cardsection.length-1 : currentIndex1--;
  sectionPos(0, currentIndex1);
});

forwbtn.addEventListener("click", function(){
  currentIndex1 >= cardsection.length-1 ? currentIndex1 = 0 : currentIndex1++;
  sectionPos(0, currentIndex1);
});

// const startAutoSlide1 = () => {
//   setInterval(() => {
//     currentIndex1 >= cardsection.length-1 ? currentIndex1 = 0 : currentIndex1++;
//     sectionPos(0, currentIndex1);
//   }, time1);
// };

// startAutoSlide1(); // Start the slideshow
