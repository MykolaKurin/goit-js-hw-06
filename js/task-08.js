function onFormSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.password.value;
    
    if (email === '') {
        alert('No e-mail');
    } else if (password === '') {
        alert('No password');
    } else {
        const formResult = {
            email: email,
            password: password,
        };
        console.log(formResult);
        
        event.currentTarget.reset();
    }
};

const loginFormRef = document.querySelector('form.login-form');
loginFormRef.addEventListener('submit', onFormSubmit);
