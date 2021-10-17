const inputRef = document.querySelector('#validation-input');
const inputRefLength = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener("blur", onInputRefAuditLength);

function onInputRefAuditLength(event) {
    if (event.currentTarget.value.length === inputRefLength) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');         
    }
}