"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let input = fs_1.default.readFileSync('./1.txt');
let inputs = input.toString().split('\n').map((o) => {
    return Number(o);
});
for (let i = 0; i < inputs.length; i++) {
    for (let k = 0; k < inputs.length; k++) {
        for (let j = 0; j < inputs.length; j++) {
            if ((inputs[i] + inputs[j] + inputs[k]) == 2020) {
                console.log('whooop whoop', inputs[i], inputs[j], inputs[k]);
                console.log(inputs[i] * inputs[j] * inputs[k]);
            }
        }
    }
}
//# sourceMappingURL=example3.js.map