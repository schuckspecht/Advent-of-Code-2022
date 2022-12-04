const fs = require("fs");
const lines = fs
	.readFileSync("data.txt", {
		encoding: "utf-8"
	})
	.split(/\r?\n/);

var sum = 0;
for (let i = 0; i < lines.length; i++) {
	var first = lines[i].slice(0, (lines[i].length / 2));
	var second = lines[i].slice((lines[i].length / 2));


	for (let j in first) {
		if (second.includes(first[j])) {
			var letter = first[j]
		}
	}
	var count = letter.charCodeAt()
	if (letter == letter.toUpperCase()) {
		count = count - 38;
	} else {
		count = count - 96;
	}
	sum = sum + count;
}
console.log(sum)