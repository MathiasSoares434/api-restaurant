const productsModel = require('../models/products')

async function get(req, res){
    const {id} = req.params
    const obj = id ? {_id: id} : null
    const product = await productsModel.find(obj)
    res.send(product)
}

async function post(req, res){
    const{
        name,
        price,
    } = req.body

    const product = await productsModel({
        name,
        price,
    })

    product.save()

    res.send({
        message: "success"
    })
}

async function del(req, res){
    const{id} = req.params
    const remove = await productsModel.deleteOne({_id: id})
    const message = remove.deletedCount ? "success" : "error"
    
    res.send({
        message
    })
}

module.exports = {
    get,
    post,
    del,
}