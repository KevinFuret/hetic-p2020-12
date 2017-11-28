export default () => {
    let scrollPos = window.pageYOffset;
    document.querySelectorAll('.popup-button').forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(button.getAttribute('data-popin'))
                .then(response => response.text())
                .then((data) => {
                    const popinContent = document.createElement('div');
                    popinContent.innerHTML = data;

                    document.querySelector('.popin').appendChild(popinContent);
                    document.querySelector('body').classList.add('popin-open');
                    fermeturePopup();
                })
                .then((error) => {
                console.error(error);
                document.querySelector('body').classList.remove('popin-open');
                })
        })
    })

    function fermeturePopup(){
        const close = document.querySelector('.button__close--round');

        console.log(close);

        close.addEventListener('click', (e) => {
            document.querySelector('.popin').remove();
            document.querySelector('body').classList.remove('popin-open');
        })
    }
}
