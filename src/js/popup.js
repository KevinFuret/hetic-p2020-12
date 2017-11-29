export default () => {
    document.querySelectorAll('.popup-button').forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(button.getAttribute('data-popin'))
                .then(response => response.text())
                .then((data) => {
                    const popinContent = document.createElement('div');
                    popinContent.innerHTML = data;
                    popinContent.classList.add('popin-div');
                    document.querySelector('.popin').appendChild(popinContent);
                    document.querySelector('body').classList.add('popin-open');
                    document.querySelector('.header').classList.add('headroom--unpinned');
                    fermeturePopup();
                })
        })
    });

    function fermeturePopup(){
        const close = document.querySelector('.button__close--round');

        close.addEventListener('click', (e) => {
            document.querySelector('.popin-div').remove();
            document.querySelector('body').classList.remove('popin-open');
            document.querySelector('.header').classList.remove('unheadroom--unpinned');
        })
    }
}
