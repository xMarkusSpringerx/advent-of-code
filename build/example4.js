"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let input = fs_1.default.readFileSync('./2.txt');
let amount = input.toString().split('\n');
console.log(amount.length);
console.log(amount.map((o) => {
    let objs = o.split(' ');
    if (o) {
        return {
            from: Number(objs[0].split('-')[0]),
            to: Number(objs[0].split('-')[1]),
            char: objs[1].replace(':', ''),
            password: objs[2]
        };
    }
}).filter((o) => {
    if (!o) {
        return false;
    }
    let test = o.password;
    let count = test.split(o.char).length - 1;
    if (count >= o.from && count <= o.to) {
        return true;
    }
    return false;
}).length);
input = fs_1.default.readFileSync('./2.txt');
amount = input.toString().split('\n');
console.log(amount.length);
console.log(amount.map((o) => {
    let objs = o.split(' ');
    if (o) {
        return {
            from: Number(objs[0].split('-')[0]),
            to: Number(objs[0].split('-')[1]),
            char: objs[1].replace(':', ''),
            password: objs[2]
        };
    }
}).filter((o) => {
    if (!o) {
        return false;
    }
    let test = o.password;
    if (test[o.from - 1] == o.char && test[o.to - 1] != o.char) {
        return true;
    }
    if (test[o.from - 1] != o.char && test[o.to - 1] == o.char) {
        return true;
    }
    return false;
}).length);
//# sourceMappingURL=example4.js.map