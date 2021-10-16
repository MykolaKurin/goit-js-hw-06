const loginForm = document.querySelector('form.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    const loginFormRef = event.currentTarget.elements;
    const email = loginFormRef.email.value;
    const password = loginFormRef.password.value;
    form.addEventListener('submit', onFormSubmit);
};
    
console.log(loginForm);
