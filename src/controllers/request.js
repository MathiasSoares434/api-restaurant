const RequestsModel = require('../models/request')
const ProductsModel = require('../models/products')
const CustomersModel = require('../models/customers')


async function get(req, res){
    const products = await ProductsModel.find({})
    const customers = await CustomersModel.find({})
    const { id } = req.params // ?id=123
    const obj = id ? {_id: id} : null
    const requests = await RequestsModel.find(obj)

    res.send({
        requests,
        products,
        customers,
    })
} 

async function post(req, res){
    const products = await ProductsModel.find({})
    const customers = await CustomersModel.find({})

    const{
        codeCustomer,
        codeProduct,
        dataCriation,
        status
    } = req.body

    const request = new RequestsModel({
        codeCustomer,
        codeProduct,
        dataCriation,
        status
    })

    request.save()

    res.send({
        message: 'success',
        products,
        customers,
    })

}

async function put(req, res){
    const {id} = req.params
    const request = await RequestsModel.findByIdAndUpdate({_id:id}, req.body, {new: true})

    res.send({
        message:'success',
        request,
    })
}


module.exports = {
    get,
    post,
    put,
}