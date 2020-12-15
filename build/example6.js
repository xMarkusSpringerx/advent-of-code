"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let input = fs_1.default.readFileSync('./6.txt');
let passports = input.toString().split('\n\n');
console.log(passports.map((passport) => {
    let line = passport.split('\n');
    let result = {};
    for (let i = 0; i < line.length; i++) {
        let items = line[i].split(' ');
        items.forEach((item) => {
            let key = item.split(':')[0];
            let value = item.split(':')[1];
            if (value) {
                // @ts-ignore
                result[key] = value;
            }
        });
    }
    return result;
}).filter((obj) => {
    // @ts-ignore
    if (!obj['byr']) {
        return false;
    }
    // @ts-ignore
    if (Number(obj['byr']) >= 1920 && Number(obj['byr']) <= 2002) {
        return true;
    }
    return false;
}).filter((obj) => {
    // @ts-ignore
    if (!obj['iyr']) {
        return false;
    }
    // @ts-ignore
    if (Number(obj['iyr']) >= 2010 && Number(obj['iyr']) <= 2020) {
        return true;
    }
    return false;
}).filter((obj) => {
    // @ts-ignore
    if (!obj['eyr']) {
        return false;
    }
    // @ts-ignore
    if (Number(obj['eyr']) >= 2020 && Number(obj['eyr']) <= 2030) {
        return true;
    }
    return false;
}).filter((obj) => {
    // @ts-ignore
    let height = obj['hgt'];
    if (!height) {
        return false;
    }
    if (height.indexOf('cm') != -1) {
        let count = Number(height.replace('cm', ''));
        if (count >= 150 && count <= 193) {
            return true;
        }
        return false;
    }
    if (height.indexOf('in') != -1) {
        let count = Number(height.replace('in', ''));
        if (count >= 59 && count <= 76) {
            return true;
        }
        return false;
    }
    return false;
}).filter((obj) => {
    // @ts-ignore
    let color = obj['hcl'];
    if (!color) {
        return false;
    }
    return color.toUpperCase().match(new RegExp('^(#)([0-9A-F]{6})$'));
}).filter((obj) => {
    // @ts-ignore
    let eye = obj['ecl'];
    if (!eye) {
        return false;
    }
    let accepted = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    return accepted.includes(eye);
}).filter((obj) => {
    // @ts-ignore
    let pid = obj['pid'];
    if (!pid) {
        return false;
    }
    if (pid.length == 9) {
        return true;
    }
    return false;
}).length);
//# sourceMappingURL=example6.js.map