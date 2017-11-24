export default function(event) {
    var buttons = document.getElementsByClassName('popup-button');
    console.log(buttons);
    for (var i = 0; i <= buttons.length-1; i++) {
        console.log(buttons[i]);
        buttons[i].addEventListener('click', (e) => {
            console.log(e.target);
            alert(e.target.closest('button').dataset.popin);
            /*const url = e.target.getAttribute('data-popin') // 'fichier-1.html'

            fetch(url)
                .then(response => response.text())
                .then((data) => {
                    const div = document.createElement('div')
                    div.innerHTML = data
                    div.setAttribute('test', true)
                    div.classList.add('mySuperClass')
                    document.querySelector('.myclass').appendChild = div
                })*/
        })
    }

    /*close.addEventListerner('click', (e) => {
        document.querySelector('.test').remove()
    })*/

}
