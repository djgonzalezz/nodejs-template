const express = require("express");

function eRoutes() {
    const router = express.Router();

    var calculatorServices = require("./calculator/routes")(router);

    return router;
}

module.exports = eRoutes;
