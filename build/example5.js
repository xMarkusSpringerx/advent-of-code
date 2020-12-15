"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let input = fs_1.default.readFileSync('./3.txt');
let lines = input.toString().split('\n');
let encountered = 0;
let counter = 0;
let result = 1;
lines.map((line) => {
    return line.repeat(1000);
}).forEach((line) => {
    if (line[counter] === '#') {
        // encountered
        encountered++;
    }
    counter = counter + 3;
});
result = encountered * result;
encountered = 0;
counter = 0;
lines.map((line) => {
    return line.repeat(1000);
}).forEach((line) => {
    if (line[counter] === '#') {
        // encountered
        encountered++;
    }
    counter = counter + 1;
});
result = encountered * result;
encountered = 0;
counter = 0;
lines.map((line) => {
    return line.repeat(1000);
}).forEach((line) => {
    if (line[counter] === '#') {
        // encountered
        encountered++;
    }
    counter = counter + 5;
});
result = encountered * result;
encountered = 0;
counter = 0;
lines.map((line) => {
    return line.repeat(1000);
}).forEach((line) => {
    if (line[counter] === '#') {
        // encountered
        encountered++;
    }
    counter = counter + 7;
});
result = encountered * result;
encountered = 0;
counter = 0;
lines.map((line) => {
    return line.repeat(1000);
}).forEach((line, index) => {
    if (index % 2 == 0) {
        if (line[counter] === '#') {
            // encountered
            encountered++;
        }
        counter = counter + 1;
    }
});
result = encountered * result;
console.log(result);
//# sourceMappingURL=example5.js.map