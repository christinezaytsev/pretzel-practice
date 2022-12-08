"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// function add takes two arguments (numbers a, b) and returns a number
const add = (a, b) => a + b;
// create endpoint
app.get('/', (req, res, next) => {
    console.log(add(5, 5));
    res.send('Hello world');
});
// create another endpoint
app.get('/test', (req, res) => {
    res.send('Hello test');
});
// listen on port 5000 and log to terminal
app.listen(5000, () => console.log('Server running'));
