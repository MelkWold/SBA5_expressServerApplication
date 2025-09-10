function globalErrorHandler(err, req, res, next) {
    console.error("Error caught: ", err.stack);

    // set default status 
    const statusCode = err.statusCode || 500;

    // Send response
    res.status(statusCode).json ({status: "error", message: err.message})
}

export default globalErrorHandler;