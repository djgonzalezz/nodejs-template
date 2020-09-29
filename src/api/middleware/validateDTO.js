const apiError = require("../../services/apiError");

function body(schema) {
    return async (req, res, next) => {
        try {
            let validatedBody = await schema.validate(req.body);
            req.body = validatedBody;
            next();
        } catch (error) {
            next(apiError.badRequest(error.message));
        }
    };
}

function params(schema) {
    return async (req, res, next) => {
        try {
            let validatedBody = await schema.validate(req.params);
            req.params = validatedBody;
            next();
        } catch (error) {
            next(apiError.badRequest(error.message));
        }
    };
}

module.exports = {
    body: body,
    params: params,
};
