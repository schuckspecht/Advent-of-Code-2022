const fs = require("fs");
const lines = fs
	.readFileSync("data.txt", {
		encoding: "utf-8"
	})
	.split(/\r?\n/);

var results = {
	"A X": 4,
	"A Y": 8,
	"A Z": 3,
	"B X": 1,
	"B Y": 5,
	"B Z": 9,
	"C X": 7,
	"C Y": 2,
	"C Z": 6
}

sum = 0;
for (let i = 0; i < lines.length; i++) {
	sum = sum + results[lines[i]];
}
console.log(sum)