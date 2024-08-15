"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomResponse = void 0;
class CustomResponse {
    constructor(options) {
        if (typeof options.data !== "undefined" && options.data.length !== 0) {
            this.data = options.data;
        }
        this.message = options.message;
        this.responseCode = options.responseCode;
    }
}
exports.CustomResponse = CustomResponse;
