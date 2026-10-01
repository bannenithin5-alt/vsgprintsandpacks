
/* =====================================================
   PRINTING PRESS WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


/* =====================================================
   QUOTE FORM
===================================================== */

const quoteForm = document.querySelector(".quote-form");

if (quoteForm) {

    quoteForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = quoteForm
            .querySelector('input[placeholder="Your Name"]')
            .value.trim();

        const phone = quoteForm
            .querySelector('input[placeholder="Phone Number"]')
            .value.trim();

        const product = quoteForm
            .querySelector("select")
            .value;

        const quantity = quoteForm
            .querySelector('input[placeholder="Quantity"]')
            .value.trim();

        const size = quoteForm
            .querySelector('input[placeholder="Required Size"]')
            .value.trim();

        const message = quoteForm
            .querySelector("textarea")
            .value.trim();


        /* Basic validation */

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (product === "") {
            alert("Please select what you want to print.");
            return;
        }


        /* WhatsApp message */

        const whatsappNumber = "+918978647348"; // Replace with your WhatsApp number

        const whatsappMessage = [
            "Hello, I would like to request a printing quotation.",
            "",
            `Name: ${name}`,
            `Phone: ${phone}`,
            `Product: ${product}`,
            `Quantity: ${quantity}`,
            `Size: ${size}`,
            `Requirement: ${message}`
        ].join("\n");


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(whatsappURL, "_blank");

    });

}


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".service-card, .finish-item, .process-step, .gallery-grid img, .about-image, .about-content"
);


const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =====================================================
   SERVICE CARD CLICK EFFECT
===================================================== */

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const title = card.querySelector("h3");

        if (title) {

            const serviceName = title.textContent;

            console.log(
                "Selected printing service:",
                serviceName
            );

        }

    });

});


/* =====================================================
   IMAGE LAZY LOADING
===================================================== */

const images = document.querySelectorAll("img");

images.forEach(function (image) {

    image.setAttribute("loading", "lazy");

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.textContent =
        `© ${year} Sri Venkateswara Printing Press. All Rights Reserved.`;

}


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuButton = document.querySelector(".mobile-menu");

const navigation = document.querySelector(".navbar nav");

if (mobileMenuButton && navigation) {

    mobileMenuButton.addEventListener("click", function () {

        navigation.classList.toggle("mobile-active");

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navigationLinks =
    document.querySelectorAll(".navbar nav a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navigation) {
            navigation.classList.remove("mobile-active");
        }

    });

});

