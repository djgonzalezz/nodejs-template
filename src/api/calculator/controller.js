const calculatorService = require('./service');

module.exports = class CalculatorController {
    
    static async add(req, res) {
        let a = req.body.a;
        let b = req.body.b;

        let result = {
            a: a,
            b: b,
            operation: "add",
            result: await calculatorService.add(a, b)
        };

        return res.json(result);
    }

    static async substract(req, res) {
        let a = req.body.a;
        let b = req.body.b;
        
        let result = {
            a: a,
            b: b,
            operation: "substract",
            result: await calculatorService.substract(a, b)
        };

        return res.json(result);
    }

    static async multiply(req, res) {
        let a = req.body.a;
        let b = req.body.b;
        
        let result = {
            a: a,
            b: b,
            operation: "multiply",
            result: await calculatorService.multiply(a, b)
        };

        return res.json(result);
    }

};