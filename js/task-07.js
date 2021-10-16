const onInput = () => spanRef.style.fontSize = inputRef.value + 'px';

const inputRef = document.querySelector('#font-size-control');
inputRef.addEventListener('input', onInput);

const spanRef = document.querySelector('#text');
