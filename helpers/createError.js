const messages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict"
};

const createError = (status, message = messages[status]) => {

    console.log(message);
    const error = new Error(message);
    error.status = status;
    return error;
};

module.exports = createError;
