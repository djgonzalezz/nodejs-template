function exceptionHandler(task) {
    return async (req, res, next) => {
        try {
            await task(req, res);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = exceptionHandler;
