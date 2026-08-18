// ==========================================
// DHANAPAL POWERLOOM - JAVASCRIPT
// ==========================================


// ==========================================
// CART
// ==========================================

let cartCount = 0;

let cartItems = [];


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(button) {

    // Find product card
    const productCard = button.closest(".product-card");

    // Get product details
    const productName =
        productCard.querySelector("h3").textContent;

    const productPrice =
        productCard.querySelector(".price").textContent;

    // Add product to array
    cartItems.push({
        name: productName,
        price: productPrice
    });

    // Increase cart count
    cartCount++;

    // Update cart number
    document.getElementById("cart-count").textContent = cartCount;

    // Change button
    button.innerHTML =
        '<i class="fa-solid fa-check"></i> Added';

    // Change button color
    button.style.background = "#28a745";

    // Message
    alert(productName + " added to cart!");

    // Reset button
    setTimeout(function () {

        button.innerHTML =
            '<i class="fa-solid fa-cart-shopping"></i> Add to Cart';

        button.style.background = "";

    }, 1500);

}


// ==========================================
// OPEN CART
// ==========================================

function openCart() {

    if (cartCount === 0) {

        alert("Your cart is empty!");

        return;
    }


    let cartMessage = "Your Cart\n\n";


    cartItems.forEach(function (item, index) {

        cartMessage +=
            (index + 1) +
            ". " +
            item.name +
            " - " +
            item.price +
            "\n";

    });


    cartMessage +=
        "\nTotal Items: " +
        cartCount;


    alert(cartMessage);

}


// ==========================================
// SHOP NOW
// ==========================================

function shopNow() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// CONTACT FORM
// ==========================================

function sendMessage(event) {

    // Stop page refresh
    event.preventDefault();


    // Get input values
    const name =
        document.querySelector(
            '.contact-form input[type="text"]'
        ).value.trim();


    const email =
        document.querySelector(
            '.contact-form input[type="email"]'
        ).value.trim();


    const phone =
        document.querySelector(
            '.contact-form input[type="tel"]'
        ).value.trim();


    const message =
        document.querySelector(
            '.contact-form textarea'
        ).value.trim();


    // Validation
    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    if (phone === "") {

        alert("Please enter your phone number.");

        return;
    }


    if (message === "") {

        alert("Please enter your message.");

        return;
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    // Phone validation
    const phonePattern =
        /^[0-9]{10}$/;


    if (!phonePattern.test(phone)) {

        alert("Please enter a valid 10-digit phone number.");

        return;
    }


    // Success message
    alert(
        "Thank you " +
        name +
        "!\n\nYour message has been sent successfully."
    );


    // Clear form
    document
        .querySelector(".contact-form form")
        .reset();

}


// ==========================================
// NAVIGATION - SMOOTH SCROLL
// ==========================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });


// ==========================================
// PRODUCT CARD HOVER EFFECT
// ==========================================

const productCards =
    document.querySelectorAll(".product-card");


productCards.forEach(function (card) {

    card.addEventListener(
        "mouseenter",
        function () {

            card.style.transform =
                "translateY(-8px)";

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "translateY(0)";

        }
    );

});


// ==========================================
// FACEBOOK
// ==========================================

function facebookClick() {

    alert("Facebook page will open soon.");

}


// ==========================================
// INSTAGRAM
// ==========================================

function instagramClick() {

    alert("Instagram page will open soon.");

}


// ==========================================
// LINKEDIN
// ==========================================

function linkedinClick() {

    alert("LinkedIn page will open soon.");

}


// ==========================================
// YOUTUBE
// ==========================================

function youtubeClick() {

    alert("YouTube channel will open soon.");

}


// ==========================================
// PAGE LOAD
// ==========================================

window.addEventListener("load", function () {

    console.log(
        "Dhanapal Powerloom website loaded successfully!"
    );

});
