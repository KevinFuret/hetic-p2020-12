document.addEventListener("DOMContentLoaded", function(event) {
    var c, currentScrollTop = 0;
    var navbar = document.querySelector('.header');
    console.log(navbar);
    console.log("coucou");

    window.addEventListener("scroll", function () {

        var a = window.scrollY;
        var b = navbar.clientHeight;
        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
            navbar.classList.add("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.classList.remove("scrollUp");
        }
        c = currentScrollTop;
    });
});