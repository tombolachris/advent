const fs = require('node:fs');
const readline = require('node:readline');

const inputFileAsStream = fs.createReadStream('./1.in.txt', 'utf8');
const readableLineStream = readline.createInterface(inputFileAsStream);

let count = 0;

readableLineStream.on("line", (res) => {
    const m = res.match(/\d/g);
    count += Number(m[0] + m[m.length - 1]);
}).on("close", () => {
    console.log(count);
})