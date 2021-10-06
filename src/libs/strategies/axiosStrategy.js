const axios = require('axios')

const returnOptions = (option) =>({
    headers: option.headers ? option.headers : null,
    body: option.body ? option.body : null
})


const axiosStrategy = {
    get: async (options)=> {
        const requestOptions = returnOptions(options)
        return await axios.get(options.url, requestOptions)
    },
    getTxt: async(obj)=>{
        return  JSON.stringify(obj.data)
    },
    getJson: async(obj)=>{
        return obj.data
    }
}

module.exports = axiosStrategy