export default function(event) {
    let c, currentScrollTop = 0;
    const navbar = document.querySelector('.header');

    console.log("detection js");

    window.addEventListener("scroll", function () {
        console.log("detection scroll");

        let a = window.scrollY;
        const b = navbar.clientHeight;
        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.classList.add("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.classList.remove("scrollUp");
        }

        c = currentScrollTop;
    });
}