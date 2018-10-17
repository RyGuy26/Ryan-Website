const button = document.querySelector('#theButton')

function changebutton(params) {
    button.textContent = "oh hi"
}

button.addEventListener('click',changebutton)
