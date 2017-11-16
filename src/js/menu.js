export default function(event) {
    let c, currentScrollTop = 0;
    const navbar = document.querySelector('.header');

    window.addEventListener("scroll", function () {

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

    setInterval(function() {
      let test = window.scrollY;
      console.log(test)
    }, 500);
}
