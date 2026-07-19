/*==================== MENU SHOW & HIDDEN ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== SCROLL ABOUT ANIMATION ====================*/
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".text-gradient").forEach((span) => {
  gsap.to(span,{
    backgroundSize:'100% 100%',
    ease:'none',
    scrollTrigger:{
      trigger: span,
      start:'top bottom',
      end:'top center',
      scrub:true
    }
  })
});;

/*==================== DARK LIGHT THEME ====================*/

/*==================== MIXITUP FILTER PORTFOLIO ====================*/

/* Active work */

/*==================== EMAIL JS ====================*/

/*==================== SCROLL REVEAL ANIMATION ====================*/
