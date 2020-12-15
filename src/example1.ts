import fs from "fs";

let input = fs.readFileSync('./1.txt');

let inputs = input.toString().split('\n').map((o) => {
    return Number(o);
});

for (let i = 0; i < inputs.length; i++) {
    for (let k = 0; k < inputs.length; k++) {
        for (let j = 0; j < inputs.length; j++) {
            if ((inputs[i] + inputs[j] + inputs[k]) == 2020) {
                console.log(inputs[i], inputs[j], inputs[k]);
                console.log(inputs[i] * inputs[j] * inputs[k]);
            }
        }
    }
}
