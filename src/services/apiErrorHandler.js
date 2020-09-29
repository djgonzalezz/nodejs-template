const apiError = require("./apiError");

function apiErrorHandler(err, req, res, next) {
    if (err instanceof apiError) {
        if (err.status) {
            return res.status(err.status).json({
                status: err.status,
                message: err.message,
            });
        } else {
            return res.json({
                message: err.message,
            });
        }
    }

    console.log(err);

    return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
    });
}

module.exports = apiErrorHandler;
