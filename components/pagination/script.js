(function(baseElement, pages, pageShow){
      var pageNum = 0, pageOffset = 0;
    function _initNav(){
      //create pages
      for(i=1;i<pages+1;i++){
        $((i==1?'<li class="active">':'<li>')+(i)+'</li>').appendTo('.nav-pages', baseElement).css('min-width',pages.toString().length+'em');
      }
      
      //calculate initial values
      function ow(e){return e.first().outerWidth()}
      var w = ow($('.nav-pages li', baseElement)),bw = ow($('.nav-btn', baseElement));
      baseElement.css('width',w*pageShow+(bw*2)+'px');
      $('.nav-pages', baseElement).css('margin-left',bw+'px');
      
      //init events
      baseElement.on('click', '.nav-pages li, .nav-btn', function(e){
        if($(e.target).is('.nav-btn')){
          var toPage = $(this).hasClass('prev') ? pageNum-1 : pageNum+1;
        }else{
          var toPage = $(this).index(); 
        }
        _navPage(toPage);
      });
    }
    function _navPage(toPage){
      var sel = $('.nav-pages li', baseElement), w = sel.first().outerWidth(),
          diff = toPage-pageNum;
      
      if(toPage>=0 && toPage <= pages-1){
        sel.removeClass('active').eq(toPage).addClass('active');
        pageNum = toPage;
      }else{
        return false;
      }
      
      if(toPage<=(pages-(pageShow+(diff>0?0:1))) && toPage>=0){
        pageOffset = pageOffset + -w*diff;  
      }else{
        pageOffset = (toPage>0)?-w*(pages-pageShow):0;
      }
      
      sel.parent().css('left',pageOffset+'px');
    }
    
    _initNav();
  
  })($('.pagination'), 10, 5);


const cardsection = document.querySelectorAll(".allgame-section");
const prevbtn = document.querySelector(".prev");
const forwbtn = document.querySelector(".next");

let currentIndex1 = 0;
let time1 = 5000; // default time for auto slideshow

const sectionPos = (startPos1, index1) => {
  for (let i = startPos1; i < cardsection.length; i++) {
    cardsection[i].style.display = "none";
  }
  cardsection[index1].style.display = "block";
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


$(".nav-pages li").click(function(){
  console.log("a")
  currentIndex1 >= cardsection.length-1 ? currentIndex1 = 0 : currentIndex1++;
  sectionPos(0, currentIndex1);
});
