"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./api/routes/v1/index");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const PORT = parseInt(process.env.SERVER_PORT || ''); // funky, find something else in actual apps
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', index_1.default);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
