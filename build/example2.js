"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const PORT = 8000;
app.get('/', (req, res, next) => {
    test2(() => {
        res.send('asfoahwefho');
    });
});
app.get('/test', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("asdfawef");
}));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
function testAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield test('user', 'password', 1000);
        yield test('user', 'password', 1000);
        test('user', 'pasdfasdfassword', 1000);
    });
}
function test2(callback) {
    setTimeout(() => {
        for (var index = 0; index < 200000; index++) {
            console.log(index);
            process.nextTick(() => {
            });
        }
        callback();
    }, 0);
}
function getDate() {
    try {
        return new Date('asdfasfd');
    }
    catch (e) {
        return 'Invalid date';
    }
}
function test(username, password, milliseconds = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'user' && password === 'password') {
                resolve('successfully authenticated');
            }
            else {
                reject('not successful');
            }
        }, milliseconds);
    });
}
function runAsyncWrapper(callback) {
    return function (req, res, next) {
        callback(req, res, next)
            .catch(next);
    };
}
//# sourceMappingURL=example2.js.map