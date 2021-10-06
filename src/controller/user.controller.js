const { userModel } = require('../model')

const userController = {
    getUser: async (req, res, next)=> {
        try {
            const users = await userModel.getUser()
            res.status(200).json(users)
        }catch(error){
            next(error)
        }
    },
    createUser: async(req, res, next)=> {
        try{
            const result = await userModel.createUser(req.headers, req.body)
            res.status(200).json(result)
        }catch(error){
            //console.log(error.stack)
            next(error)
        }
    },
    updateUser: async(req, res, next)=> {
        try{
            const result = await userModel.createUser(req.headers, req.params.id, req.body)
            res.status(200).json(result)
        }catch(error){
            next(error)
        }
    },
    deleteUser: async(req, res, next)=>{
        try{
            const result = await userModel.createUser(req.headers, req.params.id)
            res.status(200).json(result)
        }catch(error){
            next(error)
        }
    }
}

module.exports = userController

/*
userController es un objeto que contiene diferentes métodos del crud [get, post, put, delete].
Además tiene req, res, next. Y los métodos son async y await.
Requiere el userModel y utiliza sos métodos. Y le envía a través de los parámetros los req.body, req.params, headers.
res.satus(200).json()
Es el que nutre a las rutas.
*/