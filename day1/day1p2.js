const fs = require("fs");
const lines = fs
	.readFileSync("data.txt", {
		encoding: "utf-8"
	})
	.split("\n")
	.filter((x) => Boolean(x))
	.map((x) => parseInt(x));

var sums = [];
var sum = 0;

for (let i = 0; i < lines.length; i++) {
	if (lines[i]) {
		sum = sum + lines[i];
	} else {
		sums.push(sum);
		sum = 0;
	}

	if (i == (lines.length - 1)) {
		sums.push(sum);
	}
}

sums.sort(function (a, b) {
	return b - a;
});

console.log(sums[0] + sums[1] + sums[2])