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

	for (let j = 0; j < amount; j++) {
		var moved = cargo[indexFrom].slice(-1);
		cargo[indexTo] = cargo[indexTo] + moved
		cargo[indexFrom] = cargo[indexFrom].slice(0, -1);
	}

}

var solution = "";
for (let i = 0; i < cargo.length; i++) {
	solution = solution + cargo[i].slice(-1)
}
console.log(solution)