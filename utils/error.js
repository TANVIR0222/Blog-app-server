export const errorHandler = (statusCode,meassage) =>{
    const error = new Error()
    error.statusCode = statusCode
    error.meassage = meassage
    return error
}