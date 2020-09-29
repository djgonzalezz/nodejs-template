const yup = require("yup");

const operationTwoDigitsBody = yup.object().shape({
    a: yup.number().required(),
    b: yup.number().required(),
});

module.exports = {
    operationTwoDigitsBody: operationTwoDigitsBody
};