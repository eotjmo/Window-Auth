const signInInactive = document.querySelector('#sign-in-inactive-button');
const signDiv = document.querySelector('#sign-in');

const signUpInactiveBtn = document.querySelector('#sign-up-inactive-button');
const signInInactiveBtn = document.querySelector('#sign-in-inactive-button');
const signUpActiveBtn = document.querySelector('#sign-up-active-button');
const signInActiveBtn = document.querySelector('#sign-in-active-button');

const welcomeRegister = document.querySelector("#register-welcome");
const welcomeLogin = document.querySelector("#login-welcome");

const contentRegister = document.querySelector('#sign-up-content');
const contentLogin = document.querySelector('#sign-in-content');

signDiv.addEventListener('click', function(event) {
    // signInDiv.classList.add('sign-in-active');
    if (event.target === signUpInactiveBtn) {
        // alert("TEst");
        welcomeRegister.style.display = 'none';
        welcomeLogin.style.display = 'inline';

        contentRegister.style.display = 'inline';
        contentLogin.style.display = 'none';

    } else if (event.target === signInInactiveBtn) {
        welcomeRegister.style.display = 'inline';
        welcomeLogin.style.display = 'none';

        contentRegister.style.display = 'none';
        contentLogin.style.display = 'inline';
        
    } 

    // else if (event.target === signInActiveBtn) {
    //     contentRegister.style.display = 'inline';
    //     contentLogin.style.display = 'none';
    // }
});
