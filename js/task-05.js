const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

function onClickInput() {
    if (input.value === "") {
        return span.textContent = 'Anonymous';
    }
    
    span.textContent = input.value;
}

input.addEventListener('input', onClickInput)