/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home_data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home_img, .about__subtitle, .about__text, .button, .skills__img, .pill',{delay: 400}); 
sr.reveal('.home__social-icon, .scroll-down',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input,',{interval: 200}); 
sr.reveal('.about section',{}); 
sr.reveal('.extra',{delay: 50}); 

/* sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .button, .skills__img, .pill',{delay: 400}); 
sr.reveal('.home__social-icon, .scroll-down',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input,',{interval: 200}); 
sr.reveal('.about section',{}); 
sr.reveal('.extra',{delay: 50}); */

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


