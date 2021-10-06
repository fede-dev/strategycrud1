const httpManager = function(){
    this.strategy = null
    this.setStrategy = (strategy)=> {
        this.strategy = strategy
    }
    this.get = (options)=> this.strategy.get(options)
    this.post = (options)=> this.strategy.post(options)
    this.put = (options)=> this.strategy.put(options)
    this.delete = (options)=> this.strategy.delete(options)
    this.getTxt = (obj) => this.strategy.getTxt(obj)
    this.getJson = (obj) => this.strategy.getJson(obj)
}

module.exports = httpManager