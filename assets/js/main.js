/*==================== MENU SHOW & HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav-link");

/*===== MENU SHOW =====*/
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose && navMenu) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1024 && navMenu) {
      navMenu.classList.remove("show-menu");
    }
  });
});
/*==================== REMOVE MENU MOBILE ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  window.scrollY >= 20
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionClass = document.querySelector(
      `.nav-menu a[href*=${sectionId}]`,
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

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
window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.add("light-theme");
      toggleBtn?.classList.remove("ri-sun-line");
      toggleBtn?.classList.add("ri-moon-line");
    } else {
      root.classList.remove("light-theme");
      toggleBtn?.classList.remove("ri-moon-line");
      toggleBtn?.classList.add("ri-sun-line");
    }

    root.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  toggleBtn?.addEventListener("click", () => {
    const isLight = document.documentElement.classList.contains("light-theme");
    applyTheme(isLight ? "dark" : "light");
  });
});

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

const ClearMessageText = (timeout = 3000) =>
  setTimeout(() => {
    message.textContent = "";
  }, timeout);

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactMessage.value === ""
  ) {
    message.textContent = "Write all the input fields";
    ClearMessageText();
  } else {
    emailjs.sendForm("service_8djaw1s", "template_clqe4ch", contactForm).then(
      (response) => {
        message.textContent = "Message sent ✔";
        contactForm.reset();

        ClearMessageText(5000);
      },
      (error) => {
        console.error("EmailJS error:", error);
        message.textContent = "Something went wrong. Please try again.";
        ClearMessageText();
      },
    );
  }
};

contactForm.addEventListener("submit", sendEmail);

/*==================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home-data`);
sr.reveal(`.home-img-wrapper`, {
  delay: 500,
});
sr.reveal(`.home-social`, {
  delay: 600,
});
sr.reveal(`.services-card, .mix`, {
  interval: 100,
});

sr.reveal(`.skills-developer, .resume-left, .contact-group`, {
  origin: "left",
});

sr.reveal(`.skills-designer, .resume-right, .contact-form`, {
  origin: "right",
});
