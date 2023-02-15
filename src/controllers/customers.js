const CustomersModel = require('../models/customers')

async function get(req, res){
    const { id } = req.params
    const obj = id ? {_id: id} : null
    const customer = await CustomersModel.find(obj)

    res.send(customer)

}


async function post(req, res){
    const{
        name,
        email,
        phone,
        adress,
        password
    } = req.body

    const customer = new CustomersModel({
        name,
        email,
        phone,
        adress,
        password
    })

    customer.save()

    res.send({
        message: "success"
    })
}

async function del(req, res){
    const {id} = req.params
    const remove = await CustomersModel.deleteOne({_id: id})
    const message = remove.deletedCount ? "success" : "error"
    res.send({
        message,
    })
}


module.exports = {
    get,
    post,
    del,
}