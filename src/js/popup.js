export default function(event) {
    const buttons = document.getElementsByClassName('popup-button');
    let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    for (let i = 0; i <= buttons.length-1; i++) {
        buttons[i].addEventListener('click', (e) => {
            const url = e.target.closest('button').dataset.popin;

            fetch(url)
                .then(response => response.text())
                .then((data) => {
                    const div = document.createElement('div');
                    div.innerHTML = data;
                    //div.setAttribute('test', true)
                    //div.classList.add('mySuperClass')
                    document.querySelector('.popin').appendChild(div);
                    fermeturePopup();
                })
        })
    }

    function fermeturePopup(){
        const close = document.querySelector('.button__close--round');

        console.log(close);

        close.addEventListener('click', (e) => {
            document.querySelector('.popin').remove();
        })
    }
}
