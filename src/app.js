var express = require("express");
var bodyParser = require("body-parser");
const apiErrorHandler = require("./services/apiErrorHandler");

var app = express();

var router = require("./api/routes")();

var port = process.env.port || 3300;

app.listen(port, () => {
    console.log(`Hi, i'm listing on port: ${port}`);
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, x-access-token, x-api-key, x-url-ws, Accept"
    );
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);
app.use(apiErrorHandler);
