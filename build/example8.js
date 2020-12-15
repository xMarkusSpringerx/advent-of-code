"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let input = fs_1.default.readFileSync('./8.txt');
let groups = input.toString().split('\n\n');
let count = 0;
groups.forEach((group) => {
    let users = group.split('\n');
    users = users.filter((obj) => {
        if (obj != '') {
            return true;
        }
        else {
            return false;
        }
    });
    let usersString = '';
    users.forEach((user) => {
        usersString = usersString + user;
    });
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.forEach((char) => {
        let temp = usersString;
        if ((temp.split(char).length - 1) >= users.length) {
            count++;
        }
    });
});
console.log(count);
//# sourceMappingURL=example8.js.map