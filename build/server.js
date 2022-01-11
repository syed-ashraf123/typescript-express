"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const add = (a, b) => {
    return a + b;
};
app.get("/", (req, res, next) => {
    const result = add(5, 2);
    res.send(String(result));
});
app.listen(4000);
