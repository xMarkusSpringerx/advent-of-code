"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs = __importStar(require("fs"));
const express = require('express');
const app = express();
const PORT = 8000;
app.get('/', runAsyncWrapper((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield authorizeUser('user', 'password');
    yield authorizeUser('user', 'password');
    yield authorizeUser('user', 'password');
})));
app.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const readStream = fs.createReadStream('/Users/ma.springer/Code/test/nodejasdfawfs/big.txt');
    // This will wait until we know the readable stream is actually valid
    var data = '';
    var chunk;
    readStream.on('readable', function () {
        while ((chunk = readStream.read()) != null) {
            data += chunk;
        }
    });
    readStream.on('error', () => {
        console.log('error');
    });
    readStream.on('end', function () {
        res.send(data);
    });
}));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
function runAsyncWrapper(callback) {
    return function (req, res, next) {
        callback(req, res, next)
            .catch(next);
    };
}
;
function authorizeUser(username, password) {
    return new Promise((resolve, reject) => {
        for (var index = 0; index < 200000; index++) {
            console.log(index);
        }
        resolve();
    });
}
//# sourceMappingURL=example1.js.map