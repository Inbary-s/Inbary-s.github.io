
M.AutoInit();
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  
});
$(".images").mouseover(function () {
    $(this).attr('src', $(this).data("hover"));
  }).mouseout(function () {
    $(this).attr('src', $(this).data("src"));
  });
  document.addEventListener('scroll', function(){
    const scrolly = window.scrollY;
    if(!scrolly){
      $('.navbar').css('visibility', 'hidden')
    }else{
      console.log('scrolling')
      $('.navbar').css('visibility', 'visible')
    }
  })
  // $(".navbar-brand").mouseover(function(){('.navbar-brand').css('class', 'ml7')});
  const textWrapper = document.querySelector('.ml7 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
.add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });