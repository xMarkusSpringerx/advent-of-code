import fs from "fs";

let input = fs.readFileSync('./8.txt');

let groups = input.toString().split('\n\n');
let count = 0;
groups.forEach((group) => {

    let users = group.split('\n');

    users = users.filter((obj) => {
        if (obj != '') {
            return true;
        } else {
            return false;
        }
    })
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
    })
})

console.log(count);




