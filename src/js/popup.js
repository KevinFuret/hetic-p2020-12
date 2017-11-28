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
                    console.log(document.querySelector('.popin'));
                    document.querySelector('.popin').style.display = "block";
                    document.querySelector('body').classList.add('popin-open');
                    fermeturePopup();
                })
                .then((error) => {
                //console.error(error);
                })
        })
    });

    function fermeturePopup(){
        const close = document.querySelector('.button__close--round');

        console.log(close);

        close.addEventListener('click', (e) => {
            document.querySelector('.popin-div').remove();
            document.querySelector('body').classList.remove('popin-open');
        })
    }
}
