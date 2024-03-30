class CustomError extends Error {
    constructor(name, statusCode, description){
        super(description)
        this.name = name
        this.statusCode= statusCode
    }
}

export default CustomError


