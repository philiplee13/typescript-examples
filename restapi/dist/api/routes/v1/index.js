"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = require("./user.routes");
const router = (0, express_1.Router)();
router.use('/users', user_routes_1.default);
exports.default = router;
