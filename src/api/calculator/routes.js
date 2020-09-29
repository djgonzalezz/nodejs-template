const calculatorController = require('./controller');
const calculatorDto = require('./dto');
const validateDto = require('../middleware/validateDTO');
const exceptionHandler = require('../middleware/exceptionHandler');

module.exports = function(router) {
    router
        .route('/calculator/add')
        .post(
            validateDto.body(calculatorDto.operationTwoDigitsBody),
            exceptionHandler(calculatorController.add)
        );

    router
        .route('/calculator/substract')
        .post(
            validateDto.body(calculatorDto.operationTwoDigitsBody),
            exceptionHandler(calculatorController.substract)
        );

    router
        .route('/calculator/multiply')
        .post(
            validateDto.body(calculatorDto.operationTwoDigitsBody),
            exceptionHandler(calculatorController.multiply)
        );
};