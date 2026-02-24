accounts = [
    {
        email: 'test', name: 'test', password: 'test'
    }
];

const signDiv = document.querySelector('#sign-in');
const userWelcomeDiv = document.querySelector('#user-welcome');

const signUpInactiveBtn = document.querySelector('#sign-up-inactive-button');
const signInInactiveBtn = document.querySelector('#sign-in-inactive-button');
const signUpActiveBtn = document.querySelector('#sign-up-active-button');
const signInActiveBtn = document.querySelector('#sign-in-active-button');

const welcomeRegister = document.querySelector("#register-welcome");
const welcomeLogin = document.querySelector("#login-welcome");

const contentRegister = document.querySelector('#sign-up-content');
const contentLogin = document.querySelector('#sign-in-content');

const inputEmailSignIn = document.querySelector('#email-input-signin');
const inputPasswordSignIn = document.querySelector('#password-input-signin');
const inputNameSignIn = document.querySelector('#name-input-signin');

const inputEmailSignUp = document.querySelector('#email-input-signup');
const inputPasswordSignUp = document.querySelector('#password-input-signup');
const inputNameSignUp = document.querySelector('#name-input-signup');


function inputValueClean() {
    inputEmailSignIn.value = '';
    inputPasswordSignIn.value = '';
    // inputNameSignIn.value = '';

    inputEmailSignUp.value = '';
    inputPasswordSignUp.value = '';
    inputNameSignUp.value = '';
}

signDiv.addEventListener('click', function(event) {
    // signInDiv.classList.add('sign-in-active');
    if (event.target === signUpInactiveBtn) {

        welcomeRegister.style.display = 'none';
        welcomeLogin.style.display = 'block';

        contentRegister.style.display = 'block';
        contentLogin.style.display = 'none';

        inputValueClean();

    } else if (event.target === signInInactiveBtn) {

        welcomeRegister.style.display = 'block';
        welcomeLogin.style.display = 'none';

        contentRegister.style.display = 'none';
        contentLogin.style.display = 'block';

        inputValueClean();
    } 
    
    else if (event.target === signUpActiveBtn) {
        const newUser = {email: inputEmailSignUp.value, name: inputNameSignUp.value, password: inputPasswordSignUp.value};
        accounts.push(newUser);
        console.log(accounts);
    } else if (event.target === signInActiveBtn) {
        const findUser = accounts.find(userEmail => userEmail['email'] === inputEmailSignIn.value)
        const findPassword = accounts.find(userPassword => userPassword['password'] === inputPasswordSignIn.value)
        // const findName = accounts.find(userName => userName['name'] === inputNameSignIn.value)
        if (findUser) {
            // alert('Find user Email - Succes!');
            if (findPassword) {
                alert('Succes Authorization!')

                inputValueClean();
                signDiv.style.display = 'none';
                userWelcomeDiv.innerHTML= `<h1>It is</h1><h3>${findUser['name']}?</h3>`;

            } else {
                alert('Incorrect Password!')
            }
        } else {
            alert(`Incorrect User!`)
        }
    }
});
