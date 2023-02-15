const mongoose = require('mongoose')


function connect(){
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/api-youtube')
const db = mongoose.connection

db.once('open', () =>{
    console.log('Conected to database!')
})

db.on('error', () => {
    console.log('Error')
})
}

module.exports ={
    connect,
}


