let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let card3 = document.getElementById("trendthird");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");

// Function to show elements with animation
function showWithAnimation(element) {
    element.classList.remove("hidden");
    element.classList.add("fade-in"); // Add your fade-in class here
}

// Function to hide elements with animation
function hideWithAnimation(element) {
    element.classList.remove("fade-in");
    element.classList.add("hidden"); // Add a class to hide elements
}

function homes() {
    mainPage.style.display = "flex";
    showWithAnimation(card);
    showWithAnimation(card2);
    showWithAnimation(card3);
    showWithAnimation(blog);
    hideWithAnimation(about);

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "rgb(2, 173, 173)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

function shops() {
    mainPage.style.display = "none";
    hideWithAnimation(blog);
    hideWithAnimation(about);
    showWithAnimation(card);
    showWithAnimation(card2);
    showWithAnimation(card3);

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "rgb(2, 173, 173)";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}
function blogs() {
    mainPage.style.display = "none";
    hideWithAnimation(card);
    hideWithAnimation(card2);
    hideWithAnimation(card3);
    showWithAnimation(blog);
    hideWithAnimation(about);
    hideWithAnimation(contact); // Add this line to hide the contact section

    document.getElementById("blog").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}


function abouts() {
    mainPage.style.display = "none";
    /*card.style.display="none";
    card2.style.display="none";
    card3.style.display="none";
   blog.style.display="none";
   about.style.display="block"*/
   hideWithAnimation(card);
    hideWithAnimation(card2);
    hideWithAnimation(card3);
    showWithAnimation(about);
    hideWithAnimation(blog);
    hideWithAnimation(contact);

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "rgb(2, 173, 173)";
}

function contacts() {
    mainPage.style.display = "none";
   /*card.style.display="none";
    card2.style.display="none";
    card3.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="block"*/
   hideWithAnimation(card);
    hideWithAnimation(card2);
    hideWithAnimation(card3);
    showWithAnimation(contact);
    hideWithAnimation(about);
    hideWithAnimation(blog);

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "rgb(2, 173, 173)";
    document.getElementById("about").style.color = "black";
}

// Cart functionality
function show(img) {
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;

    mainPage.style.display = "none";
    card.style.display="none";
    card2.style.display="none";
    card3.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="none"
    document.querySelector(".cart").style.display = "flex";
}

function addCart() {
    alert("Added To Cart");
    location.reload();
}

function goBack() {
    // Hide the cart or product details view
    document.querySelector(".cart").style.display = "none";
    
    // Show the previous section or main page again
    mainPage.style.display = "flex";
    showWithAnimation(card);
    showWithAnimation(card2);
    showWithAnimation(card3);
    showWithAnimation(blog);
    showWithAnimation(about);
}
function addCart() {
    alert("Added To Cart");
    
    // Add logic to store the cart item (e.g., in local storage or an array)
    // For example, to store in an array:
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(newImg.src); // Assuming `newImg.src` holds the image of the dress
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Optionally, display the cart or show a success message without reloading
    // e.g., show cart count or update the cart view.
}
function viewCart() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let cartContainer = document.querySelector(".cart-items");

    cartContainer.innerHTML = ""; // Clear previous items

    cartItems.forEach(function(item) {
        let imgElement = document.createElement("img");
        imgElement.src = item;
        cartContainer.appendChild(imgElement);
    });

    document.querySelector(".cart").style.display = "flex"; // Show cart view
}

function show(img) {
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;

    // Set a fixed width and height for the image
    newImg.style.width = "500px"; // Set a desired width
    newImg.style.height = "700px"; // Set a desired height

    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "flex";
}
