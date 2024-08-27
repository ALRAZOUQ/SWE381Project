// document.addEventListener('DOMContentLoaded', function() {
//   const loginForm = document.getElementById('login-form');
//   const signupForm = document.getElementById('signup-form');
//   const loginLink = document.getElementById('login-link');
//   const signupLink = document.getElementById('signup-link');

//   loginLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     loginForm.parentNode.classList.remove('hidden');
//     signupForm.parentNode.classList.add('hidden');
//   });

//   signupLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     signupForm.parentNode.classList.remove('hidden');
//     loginForm.parentNode.classList.add('hidden');
//   });
// });

document.getElementById("signup-link").addEventListener('click', () => {

    document.getElementById("login-form").setAttribute("class", "form hidden")
    document.getElementById("login-footer").setAttribute("class", "toggle-form")
    document.getElementById("signup-form").setAttribute("class", "form")
    document.getElementById("signup-footer").setAttribute("class", "toggle-form hidden")
});

document.getElementById("login-link").addEventListener('click', () => {

    document.getElementById("login-form").setAttribute("class", "form")
    document.getElementById("login-footer").setAttribute("class", "toggle-form hidden")
    document.getElementById("signup-form").setAttribute("class", "form hidden")
    document.getElementById("signup-footer").setAttribute("class", "toggle-form")
});

function to_login() {

}