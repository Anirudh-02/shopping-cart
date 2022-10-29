let username = document.getElementById('name')
let pass = document.getElementById('pass')
let btnLogin = document.getElementById('btnLogin')
let btnSignup = document.getElementById('btnSignup')

btnSignup.addEventListener('click', () => {
    signUp(username.value, pass.value, 'signup')
})

btnLogin.addEventListener('click', () => {
    logIn(username.value, pass.value, 'login')
    window.location.replace('../')
})