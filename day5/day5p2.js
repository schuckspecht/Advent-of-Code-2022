const fs = require("fs");
const lines = fs
	.readFileSync("data.txt", {
		encoding: "utf-8"
	})
	.split(/\r?\n/);
var cargo = [
	"SZPDLBFC",
	"NVGPHWB",
	"FWBJG",
	"GJNFLWCS",
	"WJLTPMSH",
	"BCWGFS",
	"HTPMQBW",
	"FSWT",
	"NCR"
]

for (let i = 0; i < lines.length; i++) {
	var move = lines[i];
	var commands = move.split(" ");

	var indexFrom = commands[3] - 1,
		indexTo = commands[5] - 1,
		amount = commands[1];

	var moved = cargo[indexFrom].slice(-amount);
	cargo[indexTo] = cargo[indexTo] + moved
	cargo[indexFrom] = cargo[indexFrom].slice(0, -amount);

}

var solution = "";
for (let i = 0; i < cargo.length; i++) {
	solution = solution + cargo[i].slice(-1)
}
console.log(solution)