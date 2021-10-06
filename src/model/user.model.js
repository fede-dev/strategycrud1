const { httpManager, strategies } = require('../libs')  
const requestHttp = new httpManager()
requestHttp.setStrategy(strategies.fetchStrategy)

const userModel = {
    getUser: async (header) => {
        let users = await requestHttp.get({url:'https://jsonplaceholder.typicode.com/users'})
        return await users.json()
    },
    createUser: async (header, user) =>{
        let result = await requestHttp.post({
            url:'https://jsonplaceholder.typicode.com/users',
            body: user
        })
        return await result.json()
    },
    updateUser:async (header,id,user) => {
        let result = await requestHttp.post({
            url:'https://jsonplaceholder.typicode.com/users',
            body: user,
            id: id
        })
        return await result.json()
    },

    deleteUser:async (header,id) => {
        let result = await requestHttp.post({
            url:'https://jsonplaceholder.typicode.com/users',
            id: id
        })
        return await result.json()
    }
}

module.exports = userModel

/*
Model es un objeto que tiene métodos y en los parámetros recibe la info que le llega de userController.
Requiere httpManager y la estrategia. Crea una instacia de httpManager.
Utiliza el método que tiene httpManager que es el setStrategy() y le envía la estrategia a utilizar.
También tiene httpManager los verbos [get, post, put, delete], la url y los req.body, params, header.
*/

