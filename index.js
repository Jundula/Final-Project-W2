function reveal() {
    var reveals = document.querySelectorAll(".reveal-R");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  function revealo() {
    var revealos = document.querySelectorAll(".reveal-L");
  
    for (var i = 0; i < revealos.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealos[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revealos[i].classList.add("active");
      } else {
        revealos[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", revealo);

  // BURGER
  
  function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu(){
    document.body.classList.remove('menu--open')
}