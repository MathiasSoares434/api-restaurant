/*VARIAVEIS DE LOGIN E DO NAV-BAR*/
//
const defaultUser = 'admin'
const defaultPassword = 'administrador123'
const buttonLogin = document.querySelector('#button-login')
const FirstItem = document.querySelector('#first-item')
const SecondItem = document.querySelector('#second-item')
const ThirdItem = document.querySelector('#third-item')
const ForthItem = document.querySelector('#forth-item')

//
const formLogin = document.querySelector('#form-login')
const login = document.querySelector(".login")
const loading = document.querySelector(".loading")
const options = document.querySelector(".options")
//
const listCustomers = document.querySelector(".list-customers")
const loginScreen = document.querySelector(".login-screen")
const cadastro = document.querySelector(".cadastro")
const registerProducts = document.querySelector(".register-products")
const registerRequests = document.querySelector(".register-requests")


//HEADER
buttonLogin.addEventListener('click', function(e){
    e.preventDefault()
    loading.classList.remove('hidden')
    listCustomers.classList.add('hidden')
    cadastro.classList.add('hidden')
    registerProducts.classList.add('hidden')
    registerRequests.classList.add('hidden')

    setTimeout(function(){
        loginScreen.classList.remove('hidden')
        loading.classList.add('hidden')       
      },800) 
})
FirstItem.addEventListener('click', function(e){
    e.preventDefault()
    loading.classList.remove('hidden')
    loginScreen.classList.add('hidden') 
    cadastro.classList.add('hidden')
    registerProducts.classList.add('hidden')
    registerRequests.classList.add('hidden')

    setTimeout(function(){
        listCustomers.classList.remove('hidden')
        loading.classList.add('hidden')       
      },800)     
   
})
SecondItem.addEventListener('click', function(e){
    e.preventDefault()
    loading.classList.remove('hidden')
    loginScreen.classList.add('hidden') 
    listCustomers.classList.add('hidden')
    registerProducts.classList.add('hidden')
    registerRequests.classList.add('hidden')

    setTimeout(function(){
        cadastro.classList.remove('hidden')
        loading.classList.add('hidden')       
      },800)  
})

ThirdItem.addEventListener('click', function(e){
    e.preventDefault()
    loading.classList.remove('hidden')
    loginScreen.classList.add('hidden') 
    listCustomers.classList.add('hidden')
    cadastro.classList.add('hidden')
    registerRequests.classList.add('hidden')

    setTimeout(function(){
        registerProducts.classList.remove('hidden')
        loading.classList.add('hidden')       
      },800) 
})
ForthItem.addEventListener('click', function(e){
    e.preventDefault()
    loading.classList.remove('hidden')
    loginScreen.classList.add('hidden') 
    listCustomers.classList.add('hidden')
    cadastro.classList.add('hidden')
    registerProducts.classList.add('hidden')

    setTimeout(function(){
        registerRequests.classList.remove('hidden')
        loading.classList.add('hidden')       
      },800) 
})

// TELA DE LOGIN

formLogin.addEventListener('submit', function(e){
    e.preventDefault
})