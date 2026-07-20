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
  gsap.to(span, {
    backgroundSize: "100% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: span,
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
  });
});

/*==================== DARK LIGHT THEME ====================*/

/*==================== MIXITUP FILTER PORTFOLIO ====================*/

var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

/* Active work */
const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((a) => {
    a.classList.remove("active-work");
  });
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/*==================== EMAIL JS ====================*/
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
const message = document.getElementById("message");

emailjs.init("X-zcVWJxQgIoEBsHp");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactMessage.value === ""
  ) {
    message.textContent = "Write all the input fields";
    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_8djaw1s",
        "template_clqe4ch",
        contactForm,
        "X-zcVWJxQgIoEBsHp",
      )
      .then(
        (response) => {
          message.textContent = "Message sent ✔";
          contactForm.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          message.textContent = "Something went wrong. Please try again.";
        },
      );
  }
};

contactForm.addEventListener("submit", sendEmail);

/*==================== SCROLL REVEAL ANIMATION ====================*/
