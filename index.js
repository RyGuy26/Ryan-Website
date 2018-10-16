const button = document.querySelector('#theButton')

function changebutton(params) {
    button.textContent = "hey you"
}

button.addEventListener('click',changebutton)
