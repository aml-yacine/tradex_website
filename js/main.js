
// to style carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({

      items:2,
      nav:true,
      navText: ["<span class='show-for-sr'><i class='fa-solid fa-left-long'></i></span>",
      "<span class='show-for-sr'><i class='fa-solid fa-right-long'></i></span>"],
      dots:false,
      loop:true,
      autoplay:false,
      margin:30,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
   
  });

});

// to hide up button
var arrow_up = document.getElementById("arrowUp")
document.addEventListener("scroll",function(e){
    if(document.documentElement.scrollTop >350){
       arrow_up.style.display="block"
    }else{
        arrow_up.style.display="none"
    }
})


// to count numbers
window.addEventListener("scroll",function(){
  if(this.document.documentElement.scrollTop >400){
   var counter = document.getElementById("counter");
  var i;
  var set =setInterval(() => {
    if(i == 8000){
      clearInterval(set)
    }else{
      i +=50
      counter.innerText= i
    }
  }, 1000);

  
  
 }

})