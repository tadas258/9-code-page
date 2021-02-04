const DOM = document.getElementsByClassName("accordion")
var i;

for (i = 0; i < DOM.length; i++) {
    DOM[i].addEventListener('click', function () {
        this.classList.toggle('active');

        const panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block'
        }
    });
}