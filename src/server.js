const express = require('express')
const db = require('./database/db')
const cors = require('cors')
const routes = require('./routes/routes')

// Inicializando o express
const app = express()

//conexão com o banco de dados
db.connect()
const allowedOrigins = [
    'http//127.0.0.1:5501',
]
// Configurando o servidor para receber request
app.use(cors({
    origin: function(origin, callback){
        let allowed = true

        //mobile app
        if (!origin) allowed = true
        if(!allowedOrigins.includes(origin))
        
        callback(null, allowed)
    }
}))

// habilita server para receber dados do json
app.use(express.json())

//definindo  as rotas
app.use('/api', routes)

// executando servidor
const port = process.env.PORT || 8080
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})
