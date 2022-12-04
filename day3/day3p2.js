const fs = require("fs");
const lines = fs
	.readFileSync("data.txt", {
		encoding: "utf-8"
	})
	.split(/\r?\n/);

var sum = 0;
var partsize = 3;

for (let i = 0; i < lines.length; i += partsize) {
	var part = lines.slice(i, i + partsize);
	for (let j in part[0]) {
		var letter = part[0][j]
		if (part[1].includes(letter) && part[2].includes(letter)) {

			var count = letter.charCodeAt()
			if (letter == letter.toUpperCase()) {
				count = count - 38;
			} else {
				count = count - 96;
			}
			sum = sum + count;
			break;
		}
	}
}

console.log(sum)