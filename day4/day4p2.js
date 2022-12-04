const fs = require("fs");
const lines = fs
	.readFileSync("data.txt", {
		encoding: "utf-8"
	})
	.split(/\r?\n/);
var sum = 0;

for (let i = 0; i < lines.length; i++) {
	var line = lines[i];

	var elf1 = line.split(",")[0].split("-");
	var elf2 = line.split(",")[1].split("-");

	var section1 = range(parseInt(elf1[0]), parseInt(elf1[1]))
	var section2 = range(parseInt(elf2[0]), parseInt(elf2[1]))

	if (section1.some(number => section2.includes(number)) || section2.some(number => section1.includes(number))) {
		sum = sum + 1;
	}
}

console.log(sum)


function range(startAt, size) {
	var section = [];
	for (let i = startAt; i <= size; i++) {
		section.push(i)
	}
	return section;
}