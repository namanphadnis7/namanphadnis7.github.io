

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL DOWN BUTTON ====================*/

const showOnPx = 1850;
const showTop= 600;
const backToTopButton = document.querySelector(".scroll-down")
const backToTop = document.querySelector(".backtop")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop < showOnPx) {
    /*backToTopButton.classList.remove("hidden")*/
  } else {
    backToTopButton.classList.add("hidden")
  }
})

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showTop) {
    backToTop.classList.remove("hidden")
  } else {
    backToTop.classList.add("hidden")
  }
})


/*==================== Responsive href mobile ====================*/

  
function myFunction(x) {
  if (x.matches) { // If media query matches
      document.getElementById("topbutt").setAttribute("href","#top");
      document.getElementById("topbutt").setAttribute("id","lame");
  } 
  else{
    document.getElementById("boo").setAttribute("id","mywork");
  }
}

var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

