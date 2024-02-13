let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}
let bell = document.querySelector('.notification');
document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active');
}
const swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1068: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
window.onscroll = function () { mufunction() };

function mufunction() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
}

//Custom cookies

let popUp = document.getElementById("cookiePopup");
//When a user clicks the accepted button
document.getElementById("acceptCookie").addEventListener("click", () => {
    //Create a date object
    let d = new Date();
    //Increment the current time by 1 minute (cookie will expire after 1 minute)
    d.setMinutes(2 + d.getMinutes());
    //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
    document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
});
//Check if cookie is already present
const checkCookie = () => {
    //Read the cookie and split on "="
    let input = document.cookie.split("=");
    //Check for our cookie
    if (input[0] === "myCookieName") {
        //Hide the popup
        popUp.classList.add("hide");
        popUp.classList.remove("show");
    } else {
        //Show the popup
        popUp.classList.add("show");
        popUp.classList.remove("hide");
    }
};
//Check if cookie exists when the page loads
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 2000);
};