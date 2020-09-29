module.exports = class CalculatorService {

    static async add(a, b) {
        return await a + b;
    }

    static async substract(a, b) {
        return await a - b;
    }

    static async multiply(a, b) {
        return await a * b;
    }

};
