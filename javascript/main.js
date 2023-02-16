/*VARIAVEIS DE LOGIN E DO NAV-BAR*/
//
const defaultUser = 'admin'
const defaultPassword = 'administrador123'
const buttonLogin = document.querySelector('#button-login')
const FirstItem = document.querySelector('#first-item')
const SecondItem = document.querySelector('#second-item')
const ThirdItem = document.querySelector('#third-item')
const ForthItem = document.querySelector('#forth-item')
const FifthItem = document.querySelector('#fifth-item')
const itemLogin = document.querySelector('#item')
//
const formLogin = document.querySelector('#form-login')
const login = document.querySelector(".login")
const loading = document.querySelector(".loading")
const options = document.querySelector(".options")
const btn = document.querySelector("#back-to-top");
//
const listCustomers = document.querySelector(".list-customers")
const loginScreen = document.querySelector(".login-screen")
const cadastro = document.querySelector(".cadastro")
const registerProducts = document.querySelector(".register-products")
const registerRequests = document.querySelector(".register-requests")
const listProducts = document.querySelector('.list-products')
const formCadastro = document.querySelector('#form-cadastro')



// TELA DE LOGIN

function sendLogin(){
formLogin.addEventListener('submit', function(e){
    e.preventDefault()
    const user = document.forms['form-login']['name'].value
    const password = document.forms['form-login']['password'].value
    const verifyLogin = user === defaultUser && password === defaultPassword ? true : false

    if(!verifyLogin){
        formLogin.reset()
        return alert("Usuário ou senha incorretos")
    }
    loading.classList.remove('hidden')
    login.classList.add('hidden')

    setTimeout(function(){
      options.classList.remove('hidden')
      loading.classList.add('hidden')
      formLogin.reset()
    },800)
})
}

//HEADER
function painel(){
buttonLogin.addEventListener('click', function(e){
    e.preventDefault()
    loading.classList.remove('hidden')
    listCustomers.classList.add('hidden')
    cadastro.classList.add('hidden')
    registerProducts.classList.add('hidden')
    registerRequests.classList.add('hidden')
    listProducts.classList.add('hidden')

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
    listProducts.classList.add('hidden')

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
    listProducts.classList.add('hidden')

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
    listProducts.classList.add('hidden')

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
    listProducts.classList.add('hidden')

    setTimeout(function(){
        registerRequests.classList.remove('hidden')
        loading.classList.add('hidden')       
      },800) 
})
FifthItem.addEventListener('click', function(e){
  e.preventDefault()
  loading.classList.remove('hidden')
  loginScreen.classList.add('hidden') 
  listCustomers.classList.add('hidden')
  cadastro.classList.add('hidden')
  registerProducts.classList.add('hidden')
  registerRequests.classList.add('hidden')

  setTimeout(function(){
      listProducts.classList.remove('hidden')
      loading.classList.add('hidden')       
    },800) 
})
itemLogin.addEventListener('click', function(e){
    e.preventDefault()

    loading.classList.remove('hidden')
    loginScreen.classList.add('hidden') 
    listCustomers.classList.add('hidden')
    registerProducts.classList.add('hidden')
    registerRequests.classList.add('hidden')
    listProducts.classList.add('hidden')

    setTimeout(function(){
        cadastro.classList.remove('hidden')
        loading.classList.add('hidden')       
      },800)  
    
})  
btn.addEventListener("click", function(e) {
    e.preventDefault()
    loading.classList.remove('hidden')
    cadastro.classList.add('hidden')

    setTimeout(function(){
        loginScreen.classList.remove('hidden')
        loading.classList.add('hidden')       
      },800)    

});
}

// Coleção de clientes
    function addEventDeleteCustomer(){
      const buttonsDelete = document.querySelectorAll(".button-delete")
      buttonsDelete.forEach((button) => {
        button.addEventListener("click", function(e){
          e.preventDefault()
          const id = this.dataset.id

          fetch(`http://localhost:8080/api/customers/${id}`, {
            method: 'DELETE'
          }).then((response) => {
            response.json().then((data) => {
              if(data.message === 'success'){
                listOfCustomers()
                alert("Cliente removido com sucesso")
              }else{
                alert("Ops, houve um erro! Tente novamente!")
              }
            })
          })
        })
      })
    }

      


      function listOfCustomers(){
        const list = document.querySelector('.customers')
        let htmlCustomer = ''

        fetch('http://localhost:8080/api/customers').then(response =>{
            response.json().then(data =>{
                data.forEach((customer) =>{
                    htmlCustomer += `
                    <li class = "listOfCustomers">
                      ${customer.name} | ${customer.email}
                      <a href = "#" class = "button-delete"  data-id = "${customer._id}">[excluir]</a>
                    </li>
                  `
                })

                list.innerHTML = htmlCustomer
                addEventDeleteCustomer()
            })
        })
      }

      function verifyCampusAddCustomers(name, email, phone, address, password){
        let verifyError = false

        const inputName = document.forms['form-cadastro']['name']
        const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        const verifyName = regexName.test(name)
        if(!verifyName){
          verifyError = true
          inputName.classList.add('errorInput')
          const span = inputName.nextElementSibling
          span.innerHTML = 'Por favor preencha seu nome corretamente'
        }else{
          inputName.classList.remove('errorInput')
          const span = inputName.nextElementSibling
          span.innerHTML = ''
        }

        const inputEmail = document.forms['form-cadastro']['email']
        const regexEmail = /\S+@\S+\.\S+/
        const verifyEmail = regexEmail.test(email)

        if(!verifyEmail){
          verifyError = true
          inputEmail.classList.add('errorInput')
          const span = inputEmail.nextElementSibling
          span.innerHTML = 'Por favor, preencha o campo de e-mail'
        }else{
          inputEmail.classList.remove('errorInput')
          const span = inputEmail.nextElementSibling
          span.innerHTML = ''
        }


        const inputPhone = document.forms['form-cadastro']['phone']
        if(!phone){
          verifyError = true
          inputPhone.classList.add('errorInput')
          const span = inputPhone.nextElementSibling
          span.innerHTML = 'Por favor, informe seu telefone de contato'
        }else{
          inputPhone.classList.remove('errorInput')
          const span = inputPhone.nextElementSibling
          span.innerHTML = ''
        }
        
        const inputAddress = document.forms['form-cadastro']['address']
        if(!address){
          verifyError = true
          inputAddress.classList.add('errorInput')
          const span = inputAddress.nextElementSibling
          span.innerHTML = 'Por favor, preencha o seu endereço'
        }else{
          inputAddress.classList.remove('errorInput')
          const span = inputAddress.nextElementSibling
          span.innerHTML = ''
        }
        
        const inputPassword = document.forms['form-cadastro']['password']
        if(!password, password.length < 8){
          verifyError = true
          inputPassword.classList.add('errorInput')
          const span = inputPassword.nextElementSibling
          span.innerHTML = 'Senha inválida, preencha corretamente!'
        }else{
          inputPassword.classList.remove('errorInput')
          const span = inputPassword.nextElementSibling
          span.innerHTML = ''
        }

        return verifyError
      }
      function addCustomers(){
            
        formCadastro.onsubmit = function(e){
          e.preventDefault()

          const name = document.forms['form-cadastro']['name'].value
          const email = document.forms['form-cadastro']['email'].value
          const phone = document.forms['form-cadastro']['phone'].value
          const address = document.forms['form-cadastro']['address'].value 
          const password = document.forms['form-cadastro']['password'].value

          const verifyForm = verifyCampusAddCustomers(name, email, phone, address, password)

          if(!verifyForm){
            fetch('http://localhost:8080/api/customers', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name,
                email,
                phone,
                address,
                password
              })
            }).then((response) => {
              response.json().then((data) => {
                if(data.message === 'success'){
                  alert("Cliente cadastrado com sucesso!")
                  listOfCustomers()
                  formCadastro.reset()
                }else{
                  alert("Ops, ocorreu um erro! Tente novamente!")
                  formCadastro.reset()                
                }
                
              })
            })
          }
          
        }
      }




// Collection Produtos


    function addEventDeleteProduct(){
      const buttonsDelete = document.querySelectorAll('.list-products a')
      buttonsDelete.forEach((button) => {
        button.addEventListener("click", function(e){
          e.preventDefault()
          const id = button.dataset.id
          fetch(`http://localhost:8080/api/products/${id}`, {
            method: 'DELETE'
          }).then((response) => {
            response.json().then((data) => {
              if(data.message === 'success'){
                listOfProducts()
                alert("Produto removido com sucesso")         
              }else{
                alert("Ops, ocorreu um erro! Tente novamente!")
              }
            })
          })
        })
      })
    }

      function listOfProducts(){
        const list = document.querySelector('.products')
        let htmlProduct = ''

        fetch('http://localhost:8080/api/products').then((resolve) => {
          resolve.json().then((data) => {
            data.forEach((product) => {
              htmlProduct += `
              <li>
              ${product.name} | R$ ${product.price}
              <a href = "#" class = "button-delete" data-id = "${product._id}">[excluir]</a>
              </li>     
              `
            })

            list.innerHTML = htmlProduct
            addEventDeleteProduct()
          })
        })
      }

      function verifyCampusAddProducts(name, price){
        let verifyError = false

        const inputName = document.forms['registerProducts']['name']
        const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        const verifyName = regexName.test(name)
        if(!verifyName){
          verifyError = true
          inputName.classList.add('errorInput')
          const span = inputName.nextElementSibling
          span.innerHTML = 'Insira o nome do produto'
        }else{
          inputName.classList.remove('errorInput')
          const span = inputName.nextElementSibling
          span.innerHTML = ''
        }

        const inputPrice = document.forms['registerProducts']['price']
        if(!price){
          verifyError = true
          inputPrice.classList.add('errorInput')
          const span = inputPrice.nextElementSibling
          span.innerHTML = 'Insira o preço do produto'
        }else{
          inputPrice.classList.remove('errorInput')
          const span = inputPrice.nextElementSibling
          span.innerHTML = ''
        }

        return verifyError
      }

      function addProducts(){
        const formRegister = document.querySelector('#registerProducts')
        formRegister.onsubmit = function(e){
          e.preventDefault()

          const name = document.forms['registerProducts']['name'].value
          const price = document.forms['registerProducts']['price'].value
          
          const verifyForm = verifyCampusAddProducts(name, price)

          if(!verifyForm){
            fetch('http://localhost:8080/api/products', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name,
                price
              })
            }).then((response) => {
              response.json().then((data) => {
                if(data.message === 'success'){
                  formRegister.reset()
                  alert("Produto cadastrado com sucesso")
                }else{
                  alert("Ops, não foi possível cadastrar o produto! Tente novamente!")
                }
              })
            })
          }
        }
      }



          

 

  
  

    sendLogin()
    painel()
    listOfCustomers()
    addCustomers()
    
    addEventDeleteProduct()
    listOfProducts()
    addProducts()
