import fs from "fs";

let input = fs.readFileSync('./2.txt');
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
        }
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


input = fs.readFileSync('./2.txt');
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
        }
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
