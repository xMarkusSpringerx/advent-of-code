import fs from "fs";

let input = fs.readFileSync('./7.txt');

let passes = input.toString().split('\n');

console.log(passes);

let list = passes.map((pass) => {

    let half = validate(pass[0], {
        from: 0,
        to: 127
    });

    half = validate(pass[1], half);
    half = validate(pass[2], half);
    half = validate(pass[3], half);
    half = validate(pass[4], half);
    half = validate(pass[5], half);
    half = validate(pass[6], half);


    let seats = validate(pass[7], {
        from: 0,
        to: 7
    });

    seats = validate(pass[8], seats);
    seats = validate(pass[9], seats);

    //console.log(half, seats);

    let result = {
        row: half.to,
        column: seats.to
    }

    return result.row * 8 + result.column;
}).sort((a, b) => b - a);


for (let i = 0; i <= 128 * 8; i++) {
    if (list.indexOf(i) == -1) {
        console.log('Missing: ', i);
    }
}

function validate(char: string, count: any) {
    let from;
    let to;

    let differrence = Math.floor((count.to - count.from) / 2);

    if (char === 'F' || char === 'L') {
        from = count.from;
        to = count.from + differrence;
    } else if (char === 'B' || char === 'R') {
        from = count.from + differrence;
        to = count.to;
    }
    return {
        from,
        to
    }
}
